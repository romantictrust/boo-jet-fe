import {
  WIDGET_POST,
  WIDGET_EDIT,
  WIDGETS_GET,
  WIDGET_DELETE,
} from "../actions/widgets";

const initialState = { data: [], editable: {}, loading: false };

export const widgetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case WIDGET_POST.REQUEST:
    case WIDGETS_GET.REQUEST:
    case WIDGET_DELETE.REQUEST:
    case WIDGET_EDIT.REQUEST:
      return { ...state, loading: true };
    case WIDGET_POST.SUCCESS:
    case WIDGETS_GET.SUCCESS:
    case WIDGET_DELETE.SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case WIDGET_EDIT.SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case WIDGET_POST.FAILURE:
    case WIDGETS_GET.FAILURE:
    case WIDGET_DELETE.FAILURE:
      return { ...state, loading: false };
    case "WIDGET_EDIT":
      return { ...state, editable: action.payload };
    case "WIDGET_EDIT_DENY":
    case WIDGET_EDIT.FAILURE:
      return { ...state, editable: {} };
    default: {
      return state;
    }
  }
};
