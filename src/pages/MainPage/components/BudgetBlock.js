import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import BudgetCard from "../components/BudgetCard";
import BudgetAddcard from "../components/BudgetAddcard";

import styles from "../styles/BudgetBlock.module.css";

export default function BudgetBlock({
  currenciesList,
  onPushMessage,
  onGetCurrencies,
}) {
  return (
    <Paper className={styles.root}>
      <Typography variant="h5" className={styles.heading}>
        Budget groups
      </Typography>
      <Grid container spacing={2}>
        <BudgetCard />
        <BudgetCard />
        <BudgetAddcard
          currenciesList={currenciesList}
          onPushMessage={onPushMessage}
          onGetCurrencies={onGetCurrencies}
        />
      </Grid>
    </Paper>
  );
}
