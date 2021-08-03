import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

// Steps
import WidgetTypeForm from "./steps/WidgetTypeForm";
import WidgetOptionsForm from "./steps/WidgetOptionsForm";
import PreviewWidget from "./steps/PreviewWidget";

import validate, { validateAll } from "../../../../shared/functions/validate";
import { validationErrorMassages } from "../../../../shared/constants";
import { findEarliest } from "../../../../shared/functions/dates";

function getSteps() {
  return ["Select widget", "Select widget options", "Finalize"];
}

const errorsInitialState = {
  type: false,
  name: false,
  budget: false,
  width: false,
  period: false,
  dateFrom: false,
  dateTo: false,
};

export default function WidgetPopup({
  editable,
  budgetsList,
  onClose,
  onPushMessage,
  onPostWidget,
  onEditWidget,
  onWidgetEditOver,
  isEdit,
}) {
  const [form, setFormValues] = useState(
    isEdit
      ? {
          ...editable,
          dateFrom: editable.dateFrom
            ? new Date(editable.dateFrom).toISOString().slice(0, 16)
            : null,
          dateTo: editable.dateTo
            ? new Date(editable.dateTo).toISOString().slice(0, 16)
            : null,
          budget: budgetsList.find((budget) => budget._id === editable.budget),
          period: editable.dateFrom?.length && editable.dateTo?.length,
        }
      : { period: false }
  );
  const [activeStep, setActiveStep] = useState(0);
  const [errors, setErrors] = useState(errorsInitialState);
  const steps = getSteps();

  useEffect(() => {
    if (form.period && !(form.dateFrom?.length && form.dateTo?.length))
      setFormValues({
        ...form,
        dateFrom: findEarliest(form.budget.actions),
        dateTo: new Date(Date.now()).toISOString().slice(0, 16),
      });
  }, [form.period, form.budget]);

  const handleTypeChange = (type) => setFormValues({ ...form, type });

  const handleNameChange = (e) =>
    setFormValues({ ...form, name: e.target.value });

  const handleBudgetChange = (e) =>
    setFormValues({ ...form, budget: e.target.value });

  const handlePeriodChange = (e) =>
    setFormValues({ ...form, period: e.target.checked });

  const handleDateFromChange = (e) =>
    setFormValues({ ...form, dateFrom: e.target.value });

  const handleDateToChange = (e) =>
    setFormValues({ ...form, dateTo: e.target.value });

  const handleWidthChange = (e) =>
    setFormValues({ ...form, width: e.target.value });

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <WidgetTypeForm type={form.type} onTypeChange={handleTypeChange} />
        );
      case 1:
        return (
          <WidgetOptionsForm
            form={form}
            errors={errors}
            budgetsList={budgetsList}
            handleNameChange={handleNameChange}
            handleBudgetChange={handleBudgetChange}
            handlePeriodChange={handlePeriodChange}
            handleDateFromChange={handleDateFromChange}
            handleDateToChange={handleDateToChange}
            handleWidthChange={handleWidthChange}
          />
        );
      case 2:
        return <PreviewWidget form={form} />;
      default:
        return "Unknown step";
    }
  };

  const isStepFailed = (step) => {
    if (step === 0) {
      if (!validate("widgets", "type", form.type, setErrors, onPushMessage))
        return true;
    }
    if (step === 1) {
      if (
        !validateAll([
          validate("widgets", "name", form.name, setErrors, onPushMessage),
          validate("widgets", "budget", form.budget, setErrors, onPushMessage),
          validate("widgets", "width", form.width, setErrors, onPushMessage),
          validate(
            "widgets",
            "period",
            {
              period: form.period,
              dateTo: form.dateTo,
              dateFrom: form.dateFrom,
            },
            setErrors,
            onPushMessage
          ),
        ])
      )
        return true;
    }
  };

  const handleNext = (step) => {
    if (!isStepFailed(step))
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinish = () => {
    const { _id, name, type, width, budget, period, dateTo, dateFrom } = form;
    const widget = {
      name,
      type,
      width,
      budget: budget._id,
      dateTo: period ? dateTo : "",
      dateFrom: period ? dateFrom : "",
    };
    isEdit
      ? onEditWidget({ ...widget, _id: _id })
      : onPostWidget({ ...widget });
    handleFormClose();
  };

  const handleFormClose = () => {
    onWidgetEditOver();
    onClose();
  };

  return (
    <Dialog
      open={true}
      onClose={handleFormClose}
      aria-labelledby="form-dialog-title"
      fullWidth
      maxWidth="md"
    >
      <DialogTitle id="form-dialog-title">{`${
        isEdit ? "Edit" : "Add"
      } widget`}</DialogTitle>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const labelProps = {};
          if (errors.type)
            if (activeStep === index) {
              labelProps.error = true;
              labelProps.optional = (
                <Typography variant="caption" color="error">
                  {validationErrorMassages.widgets.type}
                </Typography>
              );
            }

          if (errors.name || errors.budget || errors.width || errors.period)
            if (activeStep === index) {
              labelProps.error = true;
              labelProps.optional = (
                <Typography variant="caption" color="error">
                  Please resolve form errors
                </Typography>
              );
            }
          return (
            <Step key={label}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <DialogContent>{getStepContent(activeStep)}</DialogContent>
      <DialogActions>
        <Button onClick={handleFormClose} color="primary">
          Cancel
        </Button>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        {activeStep === steps.length - 1 ? (
          <Button variant="contained" color="primary" onClick={handleFinish}>
            {isEdit ? "Edit" : "Finish"}
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleNext(activeStep)}
          >
            Next
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
