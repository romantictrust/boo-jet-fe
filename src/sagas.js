import { fork, all } from "redux-saga/effects";
import { fetchSignUpUser } from "./pages/RegisterPage/sagas";
import {
  fetchSignInUser,
  fetchEmailConfirmation,
} from "./pages/AuthPage/sagas";
import { fetchCurrencies } from "./pages/MainPage/sagas/currencySaga";
import {
  fetchPostBudget,
  fetchGetBudgets,
  fetchDeleteBudget,
  fetchEditBudget,
} from "./pages/MainPage/sagas/budgetsSaga";
import {
  fetchPostWidget,
  fetchGetWidgets,
  fetchDeleteWidget,
} from "./pages/MainPage/sagas/widgetsSaga";
import {
  fetchPostBudgetAction,
  fetchDeleteBudgetAction,
  fetchEditBudgetAction,
} from "./pages/MainPage/sagas/budgetActionsSaga";

export default function* rootSaga() {
  yield all([
    fork(fetchSignUpUser),
    fork(fetchSignInUser),
    fork(fetchEmailConfirmation),
    fork(fetchCurrencies),
    fork(fetchPostBudget),
    fork(fetchGetBudgets),
    fork(fetchDeleteBudget),
    fork(fetchEditBudget),
    fork(fetchPostBudgetAction),
    fork(fetchDeleteBudgetAction),
    fork(fetchEditBudgetAction),
    fork(fetchPostWidget),
    fork(fetchGetWidgets),
    fork(fetchDeleteWidget),
  ]);
}
