import React, { useEffect } from "react";

import TableWidget from "./table";
import Widget from "../../../../shared/components/Widget";
import { WidgetTypes } from "../../../../shared/components/Widget/constants";
import usePrevious from "../../../../shared/hooks/usePrevious";
import { prepareActions } from "../../utils/prepareActions";

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
            heading={widget.name}
            width={widget.width}
          >
            <TableWidget
              actions={prepareActions(
                widget.budget.actions,
                widget.budget.currency.symbol
              )}
            />
          </Widget>
        ))
      ) : (
        <>No widgets yet</>
      )}
    </>
  );
}
