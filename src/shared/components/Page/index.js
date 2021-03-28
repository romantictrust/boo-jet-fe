import React from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../Header/components/Header";
import Content from "./components/Content";

export default function Page({ isHeadered = true, children }) {
  return (
    <Grid container direction="column">
      {isHeadered && (
        <Grid item>
          <Header />
        </Grid>
      )}
      <Grid item>
        <Content content={children} />
      </Grid>
    </Grid>
  );
}
