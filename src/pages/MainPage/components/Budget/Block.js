import React, { useEffect } from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import BudgetCard from "./Card";
import BudgetCardPopup from "./CardPopup";
import LoadingWrapper from "../../../../shared/components/LoadingWrapper";

import styles from "../../styles/BudgetBlock.module.css";
import cardStyles from "../../styles/BudgetCardPopup.module.css";
import useToggle from "../../../../shared/hooks/useToggle";

export default function BudgetBlock({
  currenciesList,
  budgetsList,
  editable,
  isLoading,
  onPushMessage,
  onGetCurrencies,
  onPostBudget,
  onEditBudget,
  onBudgetEditOver,
  onGetBudget,
  onPostBudgetAction,
}) {
  const [isAddCardOpened, toggleAddCardModal] = useToggle();
  const isEdit = !!editable?._id;

  useEffect(() => {
    if (currenciesList.length === 0) onGetCurrencies();
    if (budgetsList.length === 0) onGetBudget();
  }, []);

  useEffect(() => {
    if (isEdit) toggleAddCardModal(true);
  }, [editable]);
  
  return (
    <LoadingWrapper isLoading={isLoading}>
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
            <Grid className={cardStyles.card} item xs={4}>
              <Button
                variant="contained"
                color="default"
                className={cardStyles.button}
                onClick={toggleAddCardModal}
              >
                <AddCircleOutlineIcon
                  className={cardStyles.icon}
                  fontSize="large"
                />
              </Button>
            </Grid>
            {isAddCardOpened && (
              <BudgetCardPopup
                currenciesList={currenciesList}
                editable={editable}
                onPushMessage={onPushMessage}
                onGetCurrencies={onGetCurrencies}
                onBudgetEditOver={onBudgetEditOver}
                onPostBudget={onPostBudget}
                onEditBudget={onEditBudget}
                onClose={toggleAddCardModal}
              />
            )}
          </Grid>
        </Paper>
      </Grid>
    </LoadingWrapper>
  );
}
