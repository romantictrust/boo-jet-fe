import React from "react";
import Grid from "@material-ui/core/Grid";
import { SnackbarProvider } from "notistack";
import Header from "../Header/components/Header";
import Content from "./components/Content";
import Snackbar from "../Snackbar";

export default function Page({ isHeadered = true, children }) {
  return (
    <Grid container direction="column">
      {isHeadered && (
        <Grid item>
          <Header />
        </Grid>
      )}
      <Grid item>
        <SnackbarProvider maxSnack={5}>
          <Content content={children} />
          <Snackbar />
        </SnackbarProvider>
      </Grid>
    </Grid>
  );
}
