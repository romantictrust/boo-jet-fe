const ORIGIN = "http://localhost:5000";

// Budgets
export const budgetPostRoute = ORIGIN + "/budgets";
export const budgetsGetRoute = ORIGIN + "/budgets/";
export const budgetDeleteRoute = ORIGIN + "/budgets/remove";
export const budgetEditRoute = ORIGIN + "/budgets/edit";

// Widgets
export const widgetPostRoute = ORIGIN + "/widgets";
export const widgetsGetRoute = ORIGIN + "/widgets/";
export const widgetDeleteRoute = ORIGIN + "/widgets/remove";

// Budget actions
export const budgetActionPostRoute = ORIGIN + "/actions";
export const budgetActionDeleteRoute = ORIGIN + "/actions/remove";
export const budgetActionEditRoute = ORIGIN + "/actions/edit";

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
  actions: {
    name: "Description should contain more than 2 and less then 25 symbols",
    type: "Please pick type",
    category:
      "Please pick category, if you don't know which category is your action, choose 'Other'",
    value: "Value should be greater than 0",
    date: "Please pick date",
  },
  widgets: {
    name: "Widget name should contain more than 2 and less then 25 symbols",
    type: "Please pick widget",
    budget: "Please pick budget",
    width: "Please choose wiget width",
    period: "Date from shouldn't be greater than Date to value",
  },
};

//ISO without seconds
export const dateReg = new RegExp(/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d/);

export const emailReg = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
export const passReg = new RegExp(/^(?=.*\d)[0-9a-z]{7,}$/);
//   (?=.*\d)          // should contain at least one digit
//   (?=.*[a-z])       // should contain at least one lower case
//   [a-zA-Z0-9]{7,}   // should contain at least 8 from the mentioned characters
