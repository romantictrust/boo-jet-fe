import {
  BUDGET_POST,
  BUDGETS_GET,
  BUDGET_EDIT,
  BUDGET_DELETE,
} from "../actions/budget";

import {
  BUDGET_ACTION_POST,
  BUDGET_ACTION_EDIT,
  BUDGET_ACTION_DELETE,
} from "../actions/budgetActions";

const initialState = { data: [], editable: {}, loading: false };

export const budgetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUDGET_POST.REQUEST:
    case BUDGETS_GET.REQUEST:
    case BUDGET_DELETE.REQUEST:
    case BUDGET_EDIT.REQUEST:
    case BUDGET_ACTION_POST.REQUEST:
    case BUDGET_ACTION_EDIT.REQUEST:
    case BUDGET_ACTION_DELETE.REQUEST:
      return { ...state, loading: true };
    case BUDGET_POST.SUCCESS:
    case BUDGETS_GET.SUCCESS:
    case BUDGET_DELETE.SUCCESS:
    case BUDGET_ACTION_POST.SUCCESS:
    case BUDGET_ACTION_EDIT.SUCCESS:
    case BUDGET_ACTION_DELETE.SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case BUDGET_EDIT.SUCCESS:
      return { ...state, data: action.payload, editable: {}, loading: false };
    case BUDGET_POST.FAILTURE:
    case BUDGETS_GET.FAILTURE:
    case BUDGET_DELETE.FAILTURE:
    case BUDGET_ACTION_POST.FAILTURE:
    case BUDGET_ACTION_EDIT.FAILTURE:
    case BUDGET_ACTION_DELETE.FAILTURE:
      return { ...state, loading: false };
    case "BUDGET_EDIT":
      return { ...state, editable: action.payload };
    case "BUDGET_EDIT_DENY":
    case BUDGET_EDIT.FAILTURE:
      return { ...state, editable: {} };
    default: {
      return state;
    }
  }
};
