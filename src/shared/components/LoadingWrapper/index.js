import React from "react";
import Grid from "@material-ui/core/Grid";

import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";

import styles from "./styles/LoadingWrapper.module.css";

export default function LoadingWrapper({ isLoading, isLinear, children }) {
  return (
    <Grid item xs={12}>
      <div className={isLoading ? styles.loadingTarget : null}>{children}</div>
      {isLoading ? (
        isLinear ? (
          <LinearProgress />
        ) : (
          <CircularProgress className={styles.loader} />
        )
      ) : null}
    </Grid>
  );
}
