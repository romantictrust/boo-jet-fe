import React, { useState, useEffect } from "react";

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

import styles from "../../styles/BudgetCardPopup.module.css";
import useToggle from "../../../../shared/hooks/useToggle";
import validate, { validateAll } from "../../../../shared/functions/validate";
import usePrevious from "../../../../shared/hooks/usePrevious";
import { objIsEmpty } from "../../../../shared/functions/isEmpty";

const errorsInitialState = {
  name: false,
  currency: false,
  value: false,
};

export default function BudgetCardPopup({
  currenciesList,
  editable,
  onPushMessage,
  onGetCurrencies,
  onPostBudget,
  onEditBudget,
  onBudgetEditOver,
}) {
  const [isAddCardOpened, toggleAddCardModal] = useToggle();
  const [form, setFormValues] = useState({});
  const [errors, setErrors] = useState(errorsInitialState);
  const prevOpenedState = usePrevious(isAddCardOpened);

  const editMode = !objIsEmpty(editable);

  useEffect(() => {
    if (editMode) setFormValues(editable);
  }, [editable]);

  useEffect(() => {
    if (
      isAddCardOpened &&
      prevOpenedState !== isAddCardOpened &&
      currenciesList.length === 0
    ) {
      onGetCurrencies();
    }
    if (!isAddCardOpened && prevOpenedState !== isAddCardOpened)
      setErrors(errorsInitialState);
  }, [isAddCardOpened]);

  useEffect(() => {
    if (editMode) toggleAddCardModal();
  }, [editable]);

  const handleNameChange = (e) => {
    setFormValues({ ...form, name: e.target.value });
  };

  const handleCurrencyChange = (e) => {
    setFormValues({ ...form, currency: e.target.value });
  };

  const handleValueChange = (e) => {
    setFormValues({ ...form, value: e.target.value });
  };

  const handleFormClose = () => {
    onBudgetEditOver();
    setFormValues({});
    toggleAddCardModal();
  };

  const handleformSubmit = (e) => {
    e.preventDefault();

    const { name, currency, value, _id } = form;

    const isValid = validateAll(
      validate("budget", "name", name, setErrors, onPushMessage),
      validate(
        "budget",
        "currency",
        currency?._id ?? currency,
        setErrors,
        onPushMessage
      ),
      validate("budget", "value", value, setErrors, onPushMessage)
    );

    if (isValid) {
      const budget = { name, currency: currency?._id ?? currency, value };
      editMode
        ? onEditBudget({ ...budget, _id: _id })
        : onPostBudget({ ...budget });
      setFormValues({});
      toggleAddCardModal();
    }
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
        onClose={handleFormClose}
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
                value={form.name}
                onChange={(e) => handleNameChange(e)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="standard-select-currency"
                select
                required
                error={errors.currency}
                label="Currency"
                fullWidth
                value={form.currency?._id ?? form.currency}
                onChange={(e) => handleCurrencyChange(e)}
              >
                {currenciesList.map((currency) => (
                  <MenuItem key={currency._id} value={currency._id}>
                    {currency.code}
                  </MenuItem>
                ))}
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
                value={form.value}
                onChange={(e) => handleValueChange(e)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFormClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" onClick={handleformSubmit} color="primary">
            {editMode ? "Edit" : "Add budget"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
