import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { currencyReducer } from "./currencyReducer";
import { budgetsReducer } from "./budgetsReducer";

export const mainPageReducer = combineReducers({
  user: userReducer,
  currency: currencyReducer,
  budgets: budgetsReducer,
});
