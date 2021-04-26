import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { currencyReducer } from "./currencyReducer";
import { budgetsReducer } from "./budgetsReducer";
import { widgetsReducer } from "./widgetsReducer";

export const mainPageReducer = combineReducers({
  user: userReducer,
  currency: currencyReducer,
  budgets: budgetsReducer,
  widgets: widgetsReducer,
});
