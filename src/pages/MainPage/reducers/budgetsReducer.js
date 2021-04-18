import {
  BUDGET_POST,
  BUDGETS_GET,
  BUDGET_EDIT,
  BUDGET_DELETE,
} from "../actions/budgetActions";

const initialState = { data: [], editable: {}, loading: false };

export const budgetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUDGET_POST.REQUEST:
      return { ...state, loading: true };
    case BUDGET_POST.SUCCESS:
    case BUDGETS_GET.SUCCESS:
    case BUDGET_DELETE.SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case BUDGET_EDIT.SUCCESS:
      return { ...state, data: action.payload, editable: {}, loading: false };
    case BUDGET_POST.FAILTURE:
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
