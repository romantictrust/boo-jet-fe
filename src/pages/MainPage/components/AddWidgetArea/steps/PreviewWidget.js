import React from "react";

import { humanizeActions } from "../../../utils/prepareActions";
import Widget from "../../../../../shared/components/Widget";
import getWidgetContentByType from "../../Widgets/utils/getWidgetContentByType";

export default function PreviewWidget({ form }) {
  return (
    <Widget
      widgetType={form.type}
      heading={form.name}
      width={form.width}
      isPreview
    >
      {getWidgetContentByType(
        form.type,
        humanizeActions(form.budget.actions, form.budget.currency.symbol),
        form.budget._id
      )}
    </Widget>
  );
}
