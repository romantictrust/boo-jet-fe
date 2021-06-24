import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";

import Widget from "../../../../shared/components/Widget";
import LoadingWrapper from "../../../../shared/components/LoadingWrapper";

import usePrevious from "../../../../shared/hooks/usePrevious";
import { humanizeActions } from "../../utils/prepareActions";
import getWidgetContentByType from "./utils/getWidgetContentByType";

export default function WidgetsBlock({
  widgets = [],
  budgetsList,
  onGetWidgets,
  isLoading,
}) {
  const prevBudgetsList = usePrevious(budgetsList);

  useEffect(() => {
    if (prevBudgetsList?.length !== budgetsList.length && widgets.length === 0)
      onGetWidgets();
  }, [budgetsList]);

  return (
    <>
      {widgets.length !== 0 ? (
        widgets.map((widget) => (
          <Widget
            key={widget.id || widget._id}
            widgetType={widget.type}
            data={widget}
            heading={widget.name}
            width={widget.width}
          >
            <LoadingWrapper isLoading={isLoading} isLinear>
              {widget.budget &&
                getWidgetContentByType(
                  widget,
                  humanizeActions(
                    widget.budget.actions,
                    widget.budget.currency.symbol,
                    widget.dateFrom,
                    widget.dateTo
                  )
                )}
            </LoadingWrapper>
          </Widget>
        ))
      ) : (
        <>
          <Typography
            inline
            component="h1"
            variant="h5"
            style={{
              width: "100%",
              marginLeft: "20px",
              color: "var(--primary-green-color)",
            }}
          >
            No widgets yet
          </Typography>
          <Typography
            component="p2"
            variant="p1"
            style={{ margin: "0px 20px", color: "var(--primary-green-color)" }}
          >
            You must have at least one budget group to add a widget.
          </Typography>
        </>
      )}
    </>
  );
}
