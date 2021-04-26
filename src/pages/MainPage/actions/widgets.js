import {
  createRequestTypes,
  action,
  REQUEST,
  SUCCESS,
  FAILURE,
} from "../../../actions";

export const WIDGET_POST = createRequestTypes("WIDGET_POST");

export const widgetPost = {
  request: (payload) => action(WIDGET_POST[REQUEST], payload),
  success: (payload) => action(WIDGET_POST[SUCCESS], payload),
  failure: () => action(WIDGET_POST[FAILURE]),
};

export const WIDGET_DELETE = createRequestTypes("WIDGET_DELETE");

export const widgetDelete = {
  request: (payload) => action(WIDGET_DELETE[REQUEST], payload),
  success: (payload) => action(WIDGET_DELETE[SUCCESS], payload),
  failure: () => action(WIDGET_DELETE[FAILURE]),
};

export const WIDGETS_GET = createRequestTypes("WIDGETS_GET");

export const widgetsGet = {
  request: () => action(WIDGETS_GET[REQUEST]),
  success: (payload) => action(WIDGETS_GET[SUCCESS], payload),
  failure: () => action(WIDGETS_GET[FAILURE]),
};
