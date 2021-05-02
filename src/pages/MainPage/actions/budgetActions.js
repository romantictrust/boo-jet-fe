import {
  createRequestTypes,
  action,
  REQUEST,
  SUCCESS,
  FAILURE,
} from "../../../actions";

export const BUDGET_ACTION_POST = createRequestTypes("BUDGET_ACTION_POST");

export const budgetActionPost = {
  request: (payload) => action(BUDGET_ACTION_POST[REQUEST], payload),
  success: (payload) => action(BUDGET_ACTION_POST[SUCCESS], payload),
  failure: () => action(BUDGET_ACTION_POST[FAILURE]),
};

export const BUDGET_ACTION_EDIT = createRequestTypes("BUDGET_ACTION_EDIT");

export const budgetActionEdit = {
  request: (payload) => action(BUDGET_ACTION_EDIT[REQUEST], payload),
  success: (payload) => action(BUDGET_ACTION_EDIT[SUCCESS], payload),
  failure: () => action(BUDGET_ACTION_EDIT[FAILURE]),
};

export const BUDGET_ACTION_DELETE = createRequestTypes("BUDGET_ACTION_DELETE");

export const budgetActionDelete = {
  request: (payload) => action(BUDGET_ACTION_DELETE[REQUEST], payload),
  success: (payload) => action(BUDGET_ACTION_DELETE[SUCCESS], payload),
  failure: () => action(BUDGET_ACTION_DELETE[FAILURE]),
};
