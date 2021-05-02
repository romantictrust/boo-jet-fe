import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import validate, { validateAll } from "../../../../shared/functions/validate";
import actionsTypes, { actionsCategories } from "../../constants";
import { objIsEmpty } from "../../../../shared/functions/isEmpty";

const errorsInitialState = {
  type: false,
  category: false,
  name: false,
  value: false,
  date: false,
};

export default function ActionPopup({
  action = {},
  budgetId,
  onActionsClose,
  onPushMessage,
  onPostBudgetAction,
  onEditBudgetAction,
}) {
  const [form, setFormValues] = useState({
    date: new Date(Date.now()).toISOString().slice(0, 16),
  });
  const [errors, setErrors] = useState(errorsInitialState);

  const editable = !objIsEmpty(action);

  useEffect(() => {
    if (editable) setFormValues(action);
  }, []);

  const handleTypeChange = (e) => {
    setFormValues({ ...form, type: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setFormValues({ ...form, category: e.target.value });
  };

  const handleNameChange = (e) => {
    setFormValues({ ...form, name: e.target.value });
  };

  const handleValueChange = (e) => {
    setFormValues({ ...form, value: e.target.value });
  };

  const handleDateChange = (e) => {
    setFormValues({ ...form, date: e.target.value });
  };

  const handleformSubmit = (e) => {
    e.preventDefault();

    const { name, type, value, category, date } = form;

    const isValid = validateAll(
      validate("actions", "name", name, setErrors, onPushMessage),
      validate("actions", "type", type, setErrors, onPushMessage),
      validate("actions", "category", category, setErrors, onPushMessage),
      validate("actions", "value", value, setErrors, onPushMessage),
      validate("actions", "date", date, setErrors, onPushMessage)
    );

    if (isValid) {
      const budgetAсtion = { name, type, category, date, value };

      editable
        ? onEditBudgetAction({
            budgetId,
            action: {
              _id: form._id,
              name,
              type,
              category,
              date,
              value,
              prevAction: action.type,
              prevValue: action.value,
            },
          })
        : onPostBudgetAction({
            budgetId,
            budgetAсtion,
          });
      onActionsClose();
    }
  };

  return (
    <>
      <Dialog
        open={true}
        onClose={onActionsClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {editable ? "Edit" : "Add"} action
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Action is an operation on budget. Ex. Payroll or taxes.
          </DialogContentText>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                required
                error={errors.name}
                margin="dense"
                id="name"
                label="Description"
                type="name"
                fullWidth
                value={form.name}
                onChange={(e) => handleNameChange(e)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="standard-select-type"
                select
                required
                error={errors.type}
                label="Type"
                fullWidth
                value={form.type}
                onChange={(e) => handleTypeChange(e)}
              >
                {actionsTypes.map((action) => (
                  <MenuItem key={action.id} value={action.id}>
                    {action.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="standard-select-category"
                select
                required
                error={errors.category}
                label="Category"
                fullWidth
                value={form.category}
                onChange={(e) => handleCategoryChange(e)}
              >
                {actionsCategories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
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
            <Grid item xs={6}>
              <TextField
                id="datetime-local"
                label="Action date"
                type="datetime-local"
                error={errors.date}
                InputLabelProps={{
                  shrink: true,
                }}
                value={form.date}
                onChange={(e) => handleDateChange(e)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onActionsClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" onClick={handleformSubmit} color="primary">
            {editable ? "Edit" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
