import React from "react";
import Grid from "@material-ui/core/Grid";

import Page from "../../shared/components/Page";
import Widget from "../../shared/components/Widget";

export default function MainPage() {
  return (
    <Page>
      <Grid item xs={12}>
        <Widget heading="Budget groups">content</Widget>
      </Grid>
      <Grid item xs={6}>
        <Widget>xs=6</Widget>
      </Grid>
      <Grid item xs={6}>
        <Widget>xs=6</Widget>
      </Grid>
    </Page>
  );
}
