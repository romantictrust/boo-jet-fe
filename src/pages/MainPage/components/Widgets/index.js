import React, { useEffect } from "react";

import Widget from "../../../../shared/components/Widget";
import usePrevious from "../../../../shared/hooks/usePrevious";
import { humanizeActions } from "../../utils/prepareActions";
import getWidgetContentByType from "./utils/getWidgetContentByType";

export default function WidgetsBlock({ widgets, budgetsList, onGetWidgets }) {
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
            key={widget.id}
            widgetType={widget.type}
            data={widget}
            heading={widget.name}
            width={widget.width}
          >
            {widget.budget &&
              getWidgetContentByType(
                widget.type,
                humanizeActions(
                  widget.budget.actions,
                  widget.budget.currency.symbol
                ),
                widget.budget._id
              )}
          </Widget>
        ))
      ) : (
        <>No widgets yet</>
      )}
    </>
  );
}
