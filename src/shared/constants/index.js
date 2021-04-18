const ORIGIN = "http://localhost:5000";

// Budgets
export const budgetPostRoute = ORIGIN + "/budgets";
export const budgetsGetRoute = ORIGIN + "/budgets/";
export const budgetDeleteRoute = ORIGIN + "/budgets/remove";
export const budgetEditRoute = ORIGIN + "/budgets/edit";

// User auth
export const signUpRoute = ORIGIN + "/signup";
export const signInRoute = ORIGIN + "/signin";

// Mailing
export const reconfirmEmailRoute = ORIGIN + "/mailing/reconfirm";

// API's
export const currenciesListRoute = ORIGIN + "/api/currencies";

export const validationErrorMassages = {
  auth: {
    userName: "Username should contain more than 2 and less then 25 symbols",
    email: "Invalid email",
    password:
      "Password should contain at least one digit, one lower case and least 8 characters",
  },
  budget: {
    name: "Budget name should contain more than 2 and less then 25 symbols",
    currency: "Please choose currency",
    value: "Value should be greater than 0",
  },
};

export const emailReg = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
export const passReg = new RegExp(/^(?=.*\d)[0-9a-z]{7,}$/);
//   (?=.*\d)          // should contain at least one digit
//   (?=.*[a-z])       // should contain at least one lower case
//   [a-zA-Z0-9]{7,}   // should contain at least 8 from the mentioned characters
