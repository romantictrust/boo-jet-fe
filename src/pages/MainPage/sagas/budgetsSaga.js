import { put, take, fork, call, select } from "redux-saga/effects";
import {
  BUDGET_POST,
  budgetPost,
  BUDGET_EDIT,
  budgetEdit,
  BUDGET_DELETE,
  budgetDelete,
  BUDGETS_GET,
  budgetsGet,
} from "../actions/budget";
import { snackbar } from "../../../shared/components/Snackbar/actions";
import { getUser } from "../selectors/userSelectors";
import {
  budgetPostRoute,
  budgetEditRoute,
  budgetDeleteRoute,
  budgetsGetRoute,
} from "../../../shared/constants";

function* onBudgetPost(props) {
  const response = yield call(fetch, budgetPostRoute, {
    method: "POST",
    body: JSON.stringify(props),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${props.user.token}`,
    },
  });
  const jsonResponse = yield response.json();
  if (response.status === 200) {
    yield put(budgetPost.success(jsonResponse));
  } else {
    yield put(snackbar.pushMessage({ text: jsonResponse.error }));
    yield put(budgetPost.failure());
  }
}

export function* fetchPostBudget() {
  while (true) {
    const { payload } = yield take(BUDGET_POST.REQUEST);
    const user = yield select(getUser);
    yield fork(onBudgetPost, { user, budget: payload });
  }
}

function* onBudgetsGet(props) {
  const response = yield call(fetch, budgetsGetRoute + props.user.id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${props.user.token}`,
    },
  });
  const jsonResponse = yield response.json();
  if (response.status === 200) {
    yield put(budgetsGet.success(jsonResponse));
  } else {
    yield put(snackbar.pushMessage({ text: jsonResponse.error }));
    yield put(budgetsGet.failure());
  }
}

export function* fetchGetBudgets() {
  while (true) {
    yield take(BUDGETS_GET.REQUEST);
    const user = yield select(getUser);
    yield fork(onBudgetsGet, { user });
  }
}

function* onBudgetDelete(props) {
  const response = yield call(fetch, budgetDeleteRoute, {
    method: "POST",
    body: JSON.stringify(props),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${props.user.token}`,
    },
  });
  const jsonResponse = yield response.json();
  if (response.status === 200) {
    yield put(budgetDelete.success(jsonResponse));
  } else {
    yield put(snackbar.pushMessage({ text: jsonResponse.error }));
    yield put(budgetDelete.failure());
  }
}

export function* fetchDeleteBudget() {
  while (true) {
    const { payload } = yield take(BUDGET_DELETE.REQUEST);
    const user = yield select(getUser);
    yield fork(onBudgetDelete, { user, budget: payload });
  }
}

function* onBudgetEdit(props) {
  const response = yield call(fetch, budgetEditRoute, {
    method: "POST",
    body: JSON.stringify(props),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${props.user.token}`,
    },
  });
  const jsonResponse = yield response.json();
  if (response.status === 200) {
    yield put(budgetEdit.success(jsonResponse));
  } else {
    yield put(snackbar.pushMessage({ text: jsonResponse.error }));
    yield put(budgetEdit.failure());
  }
}

export function* fetchEditBudget() {
  while (true) {
    const { payload } = yield take(BUDGET_EDIT.REQUEST);
    const user = yield select(getUser);
    yield fork(onBudgetEdit, { user, budget: payload });
  }
}
