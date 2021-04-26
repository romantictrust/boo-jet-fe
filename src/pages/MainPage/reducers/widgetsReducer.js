import { WIDGET_POST, WIDGETS_GET, WIDGET_DELETE } from "../actions/widgets";

const initialState = { data: [], loading: false };

export const widgetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case WIDGET_POST.REQUEST:
    case WIDGETS_GET.REQUEST:
    case WIDGET_DELETE.REQUEST:
      return { ...state, loading: true };
    case WIDGET_POST.SUCCESS:
    case WIDGETS_GET.SUCCESS:
    case WIDGET_DELETE.SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case WIDGET_POST.FAILTURE:
    case WIDGETS_GET.FAILTURE:
    case WIDGET_DELETE.FAILTURE:
      return { ...state, loading: false };
    default: {
      return state;
    }
  }
};
