import { put, take, fork, call } from "redux-saga/effects";
import { USER_SIGNUP, userSignUp } from "../actions";
import { snackbar } from "../../../shared/components/Snackbar/actions";
import { successMessage } from "../constants";

function* onSignUpUser(userData) {
  const response = yield call(fetch, "http://localhost:5000/signup", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = yield response.json();
  if (response.status === 200) {
    yield put(userSignUp.success(jsonResponse));
    yield put(
      snackbar.pushMessage({ text: successMessage, snackbarType: "info" })
    );
  } else yield put(snackbar.pushMessage({ text: jsonResponse.error }));
}

export function* fetchSignUpUser() {
  while (true) {
    const { payload } = yield take(USER_SIGNUP.REQUEST);
    yield fork(onSignUpUser, payload.userData);
  }
}
