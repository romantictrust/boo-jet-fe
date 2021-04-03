import { combineReducers } from "redux";
import { mainPageReducer } from "./pages/MainPage/reducers";
import { userSignUpReduser } from "./pages/RegisterPage/reducers";
import { snackbarReducer } from "./shared/components/Snackbar/reducers";
const rootReducer = combineReducers({
  mainPage: mainPageReducer,
  signUpPage: userSignUpReduser,
  snackbars: snackbarReducer,
});
export default rootReducer;
