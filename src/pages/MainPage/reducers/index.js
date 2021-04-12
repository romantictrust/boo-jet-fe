import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { currencyReducer } from "./currencyReducer";

export const mainPageReducer = combineReducers({
  user: userReducer,
  currency: currencyReducer,
});
