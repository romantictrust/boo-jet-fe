import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import actionsTypes, { actionsCategories } from "../../constants";
import { objIsEmpty } from "../../../../shared/functions/isEmpty";
import useValidate from "../../../../shared/hooks/useValidate";

const fields = [
  { name: "type", module: "actions" },
  { name: "category", module: "actions" },
  { name: "name", module: "actions" },
  { name: "value", module: "actions" },
  {
    name: "date",
    module: "actions",
    value: new Date(Date.now()).toISOString().slice(0, 16),
  },
];

export default function ActionPopup({
  action = {},
  budgetId,
  onActionsClose,
  onPushMessage,
  onPostBudgetAction,
  onEditBudgetAction,
}) {
  const [validationFields, handlers, errors, isValid, validate] = useValidate(
    fields.map((field) => ({
      ...field,
      value: action?.[field.name] ?? field?.value ?? "",
    })),
    onPushMessage
  );

  const editable = !objIsEmpty(action);

  const handleformSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const { name, type, category, date, value } = validationFields;
      const budgetAсtion = { name, type, category, date, value };
      editable
        ? onEditBudgetAction({
            budgetId,
            action: {
              _id: action._id,
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
                value={validationFields.name}
                onChange={handlers.name}
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
                value={validationFields.type}
                onChange={handlers.type}
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
                value={validationFields.category}
                onChange={handlers.category}
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
                value={validationFields.value}
                onChange={handlers.value}
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
                value={validationFields.date}
                onChange={handlers.date}
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
