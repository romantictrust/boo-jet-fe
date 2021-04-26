import React from "react";

import Page from "../../shared/components/Page";
import BudgetBlockContainer from "./containers/BudgetBlockContainer";
import WidgetsBlockContainer from "./containers/WidgetsBlockContainer"
import AddWidgetAreaContainer from "./containers/AddWidgetAreaContainer";

export default function MainPage() {
  return (
    <Page>
      <BudgetBlockContainer />
      <WidgetsBlockContainer />
      <AddWidgetAreaContainer />
    </Page>
  );
}
