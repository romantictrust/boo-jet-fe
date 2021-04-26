import React, { useEffect } from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import BudgetCard from "./Card";
import BudgetCardPopup from "./CardPopup";

import styles from "../../styles/BudgetBlock.module.css";

export default function BudgetBlock({
  currenciesList,
  budgetsList,
  editable,
  onPushMessage,
  onGetCurrencies,
  onPostBudget,
  onEditBudget,
  onBudgetEditOver,
  onGetBudget,
  onPostBudgetAction,
}) {
  useEffect(() => {
    if (currenciesList.length === 0) onGetCurrencies();
    if (budgetsList.length === 0) onGetBudget();
  }, []);

  return (
    <Grid item xs={12}>
      <Paper className={styles.root}>
        <Typography variant="h5" className={styles.heading}>
          Budget groups
        </Typography>
        <Grid container spacing={2}>
          {budgetsList.map((budget) => (
            <BudgetCard
              key={budget._id}
              budget={budget}
              onPushMessage={onPushMessage}
              onPostBudgetAction={onPostBudgetAction}
            />
          ))}
          <BudgetCardPopup
            currenciesList={currenciesList}
            editable={editable}
            onPushMessage={onPushMessage}
            onGetCurrencies={onGetCurrencies}
            onBudgetEditOver={onBudgetEditOver}
            onPostBudget={onPostBudget}
            onEditBudget={onEditBudget}
          />
        </Grid>
      </Paper>
    </Grid>
  );
}
