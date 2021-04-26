import React from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import DialogContentText from "@material-ui/core/DialogContentText";

export default function WidgetOptionsForm({
  form,
  errors,
  budgetsList,
  handleNameChange,
  handleBudgetChange,
  handlePeriodChange,
  handleDateFromChange,
  handleDateToChange,
  handleWidthChange,
}) {
  return (
    <div>
      <DialogContentText>Please select widget options</DialogContentText>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            autoFocus
            required
            error={errors.name}
            margin="dense"
            id="name"
            label="Widget name"
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
            error={errors.budget}
            label="Budget"
            fullWidth
            value={form.budget}
            onChange={(e) => handleBudgetChange(e)}
          >
            {budgetsList.map((budget) => (
              <MenuItem key={budget._id} value={budget}>
                {budget.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-select-category"
            select
            required
            error={errors.width}
            label="Widget width"
            fullWidth
            value={form.width}
            onChange={(e) => handleWidthChange(e)}
          >
            {[
              { id: 0, value: 12, label: "100%" },
              { id: 1, value: 6, label: "50%" },
            ].map((width) => (
              <MenuItem key={width.id} value={width.value}>
                {width.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        {form.budget && (
          <>
            <Grid item xs={2}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={form.period}
                    onChange={(e) => handlePeriodChange(e)}
                    name="Period"
                    color="primary"
                  />
                }
                style={{ height: "100%" }}
                label="Period"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="datetime-local"
                label="Date from"
                type="datetime-local"
                disabled={!form.period}
                error={errors.period}
                InputLabelProps={{
                  shrink: true,
                }}
                value={form.dateFrom}
                onChange={(e) => handleDateFromChange(e)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="datetime-local"
                label="Date to"
                type="datetime-local"
                disabled={!form.period}
                error={errors.period}
                InputLabelProps={{
                  shrink: true,
                }}
                value={form.dateTo}
                onChange={(e) => handleDateToChange(e)}
              />
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
}
