import React from "react";

import TableWidget from "../../Widgets/table";
import { prepareActions } from "../../../utils/prepareActions";
import Widget from "../../../../../shared/components/Widget";

export default function PreviewWidget({ form }) {
  const actions = prepareActions(
    form.budget.actions,
    form.budget.currency.symbol
  );
  return (
    <Widget  widgetType={form.type} heading={form.name} width={form.width}>
      <TableWidget actions={actions} />
    </Widget>
  );
}
