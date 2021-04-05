import { fork, all } from "redux-saga/effects";
import { fetchSignUpUser } from "./pages/RegisterPage/sagas";
import {
  fetchSignInUser,
  fetchEmailConfirmation,
} from "./pages/AuthPage/sagas";

export default function* root() {
  yield all([
    fork(fetchSignUpUser),
    fork(fetchSignInUser),
    fork(fetchEmailConfirmation),
  ]);
}
