import { combineReducers } from "redux";
import { mainPageReducer } from "./pages/MainPage/reducers";
import { userSignUpReduser } from "./pages/RegisterPage/reducers";
const rootReducer = combineReducers({
  mainPage: mainPageReducer,
  signUpPage: userSignUpReduser,
});
export default rootReducer;
