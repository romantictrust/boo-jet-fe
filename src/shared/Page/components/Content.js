import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import styles from "../styles/Content.module.css";

export default function Content({ content }) {
  console.log(content);
  return (
    <Grid container className={styles.root}>
      <Container maxWidth="md" fixed>
        {content}
      </Container>
    </Grid>
  );
}
