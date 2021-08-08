import { put, take, fork, call } from "redux-saga/effects";
import {
  USER_SIGN_IN,
  EMAIL_RECONFIRMATION,
  userSignIn,
  emailReconfirmation,
} from "../actions";
import { snackbar } from "../../../shared/components/Snackbar/actions";
import { signInRoute, reconfirmEmailRoute } from "../../../shared/constants";

function* onSignInUser(userData) {
  const response = yield call(fetch, signInRoute, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = yield response.json();
  if (response.status === 200) {
    if (jsonResponse.user.confirmed) {
      yield put(userSignIn.success(jsonResponse.user));
    } else {
      yield put(
        snackbar.pushMessage({
          text:
            "Please, confirm your email! Click to send another email confirmation.",
          actionText: "Click",
          action: emailReconfirmation.request(jsonResponse.user),
          snackbarType: "info",
        })
      );
    }
  } else yield put(snackbar.pushMessage({ text: jsonResponse.error }));
}

function* onReconfirmEmail(userData) {
  const response = yield call(fetch, reconfirmEmailRoute, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = yield response.json();
  if (response.status === 200) {
    yield put(emailReconfirmation.success(jsonResponse));
  } else yield put(snackbar.pushMessage({ text: jsonResponse.error }));
}

export function* fetchSignInUser() {
  while (true) {
    const { payload } = yield take(USER_SIGN_IN.REQUEST);
    yield fork(onSignInUser, payload.userData);
  }
}

export function* fetchEmailConfirmation() {
  while (true) {
    const { payload } = yield take(EMAIL_RECONFIRMATION.REQUEST);
    yield fork(onReconfirmEmail, payload.userData);
  }
}
