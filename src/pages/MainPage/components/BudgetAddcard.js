import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import styles from "../styles/BudgetAddcard.module.css";
import useToggle from "../../../shared/hooks/useToggle";
import validate from "../../../shared/functions/validate";

export default function BudgetAddcard({ onPushMessage }) {
  const [isAddCardOpened, toggleAddCardModal] = useToggle();
  const [errors, setErrors] = useState({
    name: false,
    currency: false,
    value: false,
  });

  const handleformSubmit = (e) => {
    e.preventDefault();
    const name = BudgetAddcard.budgetName.value;
    const currency = BudgetAddcard.currency.value;
    const value = BudgetAddcard.value.value;

    validate("budget", "name", name, setErrors, onPushMessage);
    validate("budget", "currency", currency, setErrors, onPushMessage);
    validate("budget", "value", value, setErrors, onPushMessage);
  };

  return (
    <>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="default"
          className={styles.card}
          onClick={toggleAddCardModal}
        >
          <AddCircleOutlineIcon className={styles.icon} fontSize="large" />
        </Button>
      </Grid>
      <Dialog
        open={isAddCardOpened}
        onClose={toggleAddCardModal}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add budget source</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Budget source is used to describe your current budget status.
          </DialogContentText>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                required
                error={errors.name}
                margin="dense"
                id="name"
                label="Name"
                type="name"
                fullWidth
                inputRef={(el) => {
                  BudgetAddcard.budgetName = el;
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="standard-select-currency"
                select
                required
                error={errors.currency}
                label="Select"
                fullWidth
                inputRef={(el) => {
                  BudgetAddcard.currency = el;
                }}
                // value={currency}
                // onChange={handleCurrency}
              >
                {/* {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))} */}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-number"
                label="Value"
                type="number"
                error={errors.value}
                required
                fullWidth
                inputProps={{ min: 0 }}
                InputLabelProps={{
                  shrink: true,
                }}
                inputRef={(el) => {
                  BudgetAddcard.value = el;
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleAddCardModal} color="primary">
            Cancel
          </Button>
          <Button type="submit" onClick={handleformSubmit} color="primary">
            Add budget
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
