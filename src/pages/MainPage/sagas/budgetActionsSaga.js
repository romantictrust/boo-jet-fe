import { put, take, fork, call, select } from "redux-saga/effects";
import {
  BUDGET_ACTION_POST,
  budgetActionPost,
  BUDGET_ACTION_EDIT,
  budgetActionEdit,
  BUDGET_ACTION_DELETE,
  budgetActionDelete,
} from "../actions/budgetActions";
import { snackbar } from "../../../shared/components/Snackbar/actions";
import { getUser } from "../selectors/userSelectors";
import {
  budgetActionPostRoute,
  budgetActionEditRoute,
  budgetActionDeleteRoute,
} from "../../../shared/constants";

function* onbudgetActionPost(props) {
  const response = yield call(fetch, budgetActionPostRoute, {
    method: "POST",
    body: JSON.stringify(props.payload),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${props.user.token}`,
    },
  });
  const jsonResponse = yield response.json();
  if (response.status === 200) {
    yield put(budgetActionPost.success(jsonResponse));
  } else {
    yield put(snackbar.pushMessage({ text: jsonResponse.error }));
    yield put(budgetActionPost.failure());
  }
}

export function* fetchPostBudgetAction() {
  while (true) {
    const { payload } = yield take(BUDGET_ACTION_POST.REQUEST);
    const user = yield select(getUser);
    yield fork(onbudgetActionPost, { user, payload });
  }
}

function* onbudgetActionDelete(props) {
  const response = yield call(fetch, budgetActionDeleteRoute, {
    method: "POST",
    body: JSON.stringify(props),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${props.user.token}`,
    },
  });
  const jsonResponse = yield response.json();
  if (response.status === 200) {
    console.log(jsonResponse);
    yield put(budgetActionDelete.success(jsonResponse));
  } else {
    yield put(snackbar.pushMessage({ text: jsonResponse.error }));
    yield put(budgetActionDelete.failure());
  }
}

export function* fetchDeleteBudgetAction() {
  while (true) {
    const { payload } = yield take(BUDGET_ACTION_DELETE.REQUEST);
    const user = yield select(getUser);
    yield fork(onbudgetActionDelete, { user, budgetAction: payload });
  }
}

function* onbudgetActionEdit(props) {
  const response = yield call(fetch, budgetActionEditRoute, {
    method: "POST",
    body: JSON.stringify(props),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${props.user.token}`,
    },
  });
  const jsonResponse = yield response.json();
  if (response.status === 200) {
    yield put(budgetActionEdit.success(jsonResponse));
  } else {
    yield put(snackbar.pushMessage({ text: jsonResponse.error }));
    yield put(budgetActionEdit.failure());
  }
}

export function* fetchEditBudgetAction() {
  while (true) {
    const { payload } = yield take(BUDGET_ACTION_EDIT.REQUEST);
    const user = yield select(getUser);
    yield fork(onbudgetActionEdit, { user, budgetAction: payload });
  }
}
