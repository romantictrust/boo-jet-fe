import React from "react";

import TableWidget from "../table";
import DataGrid from "../grid";
import { WidgetTypes } from "../../../../../shared/components/Widget/constants";

export default function getWidgetContentByType(type, actions, budgetId) {
  console.log(type, WidgetTypes.ActionsTable);
  switch (type) {
    case WidgetTypes.ActionsTable:
      return <TableWidget actions={actions} />;
    case WidgetTypes.DataGrid:
      return <DataGrid budgetId={budgetId} actions={actions} />;
    default:
      break;
  }
}
