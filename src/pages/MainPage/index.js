import React from "react";
import Grid from "@material-ui/core/Grid";

import Page from "../../shared/components/Page";
import Widget from "../../shared/components/Widget";
import { WidgetTypes } from "../../shared/components/Widget/constants";

export default function MainPage() {
  return (
    <Page>
      <Grid item xs={12}>
        <Widget widgetType={WidgetTypes.BudgetGroups} heading="Budget groups">
          content
        </Widget>
      </Grid>
    </Page>
  );
}
