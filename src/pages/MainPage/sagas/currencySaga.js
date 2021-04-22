import { put, take, fork, call } from "redux-saga/effects";
import { CURRENCY_DATA, currenciesList } from "../actions/currency";
import { snackbar } from "../../../shared/components/Snackbar/actions";
import { currenciesListRoute } from "../../../shared/constants";

function* onCurrencyGet() {
  const response = yield call(fetch, currenciesListRoute, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = yield response.json();
  if (response.status === 200) {
    console.log(jsonResponse);
    yield put(currenciesList.success(jsonResponse));
  } else {
    yield put(snackbar.pushMessage({ text: jsonResponse.error }));
    yield put(currenciesList.failure());
  }
}

export function* fetchCurrencies() {
  while (true) {
    yield take(CURRENCY_DATA.REQUEST);
    yield fork(onCurrencyGet, "payload");
  }
}
