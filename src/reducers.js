import { combineReducers } from "redux";
import { mainPageReducer } from "./pages/MainPage/reducers";
const rootReducer = combineReducers({ mainPage: mainPageReducer });
export default rootReducer;
