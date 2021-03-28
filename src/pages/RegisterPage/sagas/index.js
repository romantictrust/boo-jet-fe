import { takeLatest, put, take, fork, call } from "redux-saga/effects";
import { USER_SIGNUP, userSignUp } from "../actions";

function* onSignUpUser(userData) {
  try {
    const response = yield call(fetch, "http://localhost:5000/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonResponse = yield response.json();
    yield put(userSignUp.success(jsonResponse));
  } catch (e) {
    yield put(userSignUp.failure(e));
  }
}

export function* fetchSignUpUser() {
  while (true) {
    const { userData } = yield take(USER_SIGNUP.REQUEST);
    yield fork(onSignUpUser, userData);
  }
}
