import React from "react";
import Grid from "@material-ui/core/Grid";
import styles from "../styles/Content.module.css";

export default function Content({ content }) {
  return (
    <div className={styles.root}>
      <Grid container className={styles.container}>
        {content}
      </Grid>
    </div>
  );
}
