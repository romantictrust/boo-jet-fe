import React from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../Header/components/Header";
import Content from "./components/Content";

export default function Page(props) {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <Content content={props.children} />
      </Grid>
    </Grid>
  );
}
