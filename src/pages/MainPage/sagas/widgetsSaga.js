import { put, take, fork, call, select } from "redux-saga/effects";
import {
  WIDGET_POST,
  widgetPost,
  WIDGET_EDIT,
  widgetEdit,
  WIDGET_DELETE,
  widgetDelete,
  WIDGETS_GET,
  widgetsGet,
} from "../actions/widgets";
import { snackbar } from "../../../shared/components/Snackbar/actions";
import { getUser } from "../selectors/userSelectors";
import {
  widgetPostRoute,
  widgetEditRoute,
  widgetDeleteRoute,
  widgetsGetRoute,
} from "../../../shared/constants";

function* onWidgetPost(props) {
  const response = yield call(fetch, widgetPostRoute, {
    method: "POST",
    body: JSON.stringify(props),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${props.user.token}`,
    },
  });
  const jsonResponse = yield response.json();
  if (response.status === 200) {
    yield put(widgetPost.success(jsonResponse));
  } else {
    yield put(snackbar.pushMessage({ text: jsonResponse.error }));
    yield put(widgetPost.failure());
  }
}

export function* fetchPostWidget() {
  while (true) {
    const { payload } = yield take(WIDGET_POST.REQUEST);
    const user = yield select(getUser);
    yield fork(onWidgetPost, { user, widget: payload });
  }
}

function* onWidgetEdit(props) {
  const response = yield call(fetch, widgetEditRoute, {
    method: "POST",
    body: JSON.stringify(props),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${props.user.token}`,
    },
  });
  const jsonResponse = yield response.json();
  if (response.status === 200) {
    yield put(widgetEdit.success(jsonResponse));
  } else {
    yield put(snackbar.pushMessage({ text: jsonResponse.error }));
    yield put(widgetEdit.failure());
  }
}

export function* fetchEditWidget() {
  while (true) {
    const { payload } = yield take(WIDGET_EDIT.REQUEST);
    const user = yield select(getUser);
    yield fork(onWidgetEdit, { user, widget: payload });
  }
}

function* onWidgetsGet(props) {
  const response = yield call(fetch, widgetsGetRoute + props.user.id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${props.user.token}`,
    },
  });
  const jsonResponse = yield response.json();
  if (response.status === 200) {
    yield put(widgetsGet.success(jsonResponse));
  } else {
    yield put(snackbar.pushMessage({ text: jsonResponse.error }));
    yield put(widgetsGet.failure());
  }
}

export function* fetchGetWidgets() {
  while (true) {
    yield take(WIDGETS_GET.REQUEST);
    const user = yield select(getUser);
    yield fork(onWidgetsGet, { user });
  }
}

function* onWidgetDelete(props) {
  const response = yield call(fetch, widgetDeleteRoute, {
    method: "POST",
    body: JSON.stringify(props),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${props.user.token}`,
    },
  });
  const jsonResponse = yield response.json();
  if (response.status === 200) {
    yield put(widgetDelete.success(jsonResponse));
  } else {
    yield put(snackbar.pushMessage({ text: jsonResponse.error }));
    yield put(widgetDelete.failure());
  }
}

export function* fetchDeleteWidget() {
  while (true) {
    const { payload } = yield take(WIDGET_DELETE.REQUEST);
    const user = yield select(getUser);
    yield fork(onWidgetDelete, { user, widget: payload });
  }
}
