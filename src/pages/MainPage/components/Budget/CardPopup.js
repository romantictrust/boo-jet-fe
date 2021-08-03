import React, { useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import useValidate from "../../../../shared/hooks/useValidate";
import { objIsEmpty } from "../../../../shared/functions/isEmpty";

const fields = [
  { name: "name", module: "budget" },
  { name: "currency", module: "budget" },
  { name: "value", module: "budget" },
];

export default function BudgetCardPopup({
  currenciesList,
  editable,
  onPushMessage,
  onGetCurrencies,
  onPostBudget,
  onEditBudget,
  onBudgetEditOver,
  onClose,
}) {
  const [validationFields, handlers, errors, isValid, validate] = useValidate(
    fields.map((field) => ({
      ...field,
      value:
        field.name === "currency"
          ? editable?.[field.name]._id
          : editable?.[field.name] ?? field?.value ?? "",
    })),
    onPushMessage
  );

  const editMode = !objIsEmpty(editable);

  useEffect(() => {
    if (currenciesList.length === 0) {
      onGetCurrencies();
    }
  }, []);

  const handleFormClose = () => {
    onBudgetEditOver();
    onClose();
  };

  const handleformSubmit = (e) => {
    e.preventDefault();

    const { name, currency, value } = validationFields;

    if (validate()) {
      const budget = { name, currency: currency?._id ?? currency, value };
      editMode
        ? onEditBudget({ ...budget, _id: editable._id })
        : onPostBudget({ ...budget });
      onClose();
    }
  };

  return (
    <>
      <Dialog
        open={true}
        onClose={handleFormClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {editMode ? "Edit" : "Add"} budget source
        </DialogTitle>
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
                value={validationFields.name}
                onChange={handlers.name}
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
                value={
                  validationFields.currency?._id ?? validationFields.currency
                }
                onChange={handlers.currency}
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
                value={validationFields.value}
                onChange={handlers.value}
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
