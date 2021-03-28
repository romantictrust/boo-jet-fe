import { fork, all } from "redux-saga/effects";
import { eventChannel, END } from "redux-saga";
import { fetchSignUpUser } from "./pages/RegisterPage/sagas";

export default function* root() {
  yield all([fork(fetchSignUpUser)]);
}
