import { combineReducers } from "redux";
import { mainPageReducer } from "./pages/MainPage/reducers";
import { userSignUpReduser } from "./pages/RegisterPage/reducers";
import { userSignInReduser } from "./pages/AuthPage/reducers";
import { resentReducer } from "./pages/AuthPage/reducers/resentReduser";
import { snackbarReducer } from "./shared/components/Snackbar/reducers";
const rootReducer = combineReducers({
  mainPage: mainPageReducer,
  signUpPage: userSignUpReduser,
  signInPage: combineReducers({
    userSignIn: userSignInReduser,
    resentEmail: resentReducer,
  }),
  snackbars: snackbarReducer,
});
export default rootReducer;
