import {
  createRequestTypes,
  action,
  REQUEST,
  SUCCESS,
  FAILURE,
} from "../../../actions";

export const BUDGET_POST = createRequestTypes("BUDGET_DATA");

export const budgetPost = {
  request: (payload) => action(BUDGET_POST[REQUEST], payload),
  success: (payload) => action(BUDGET_POST[SUCCESS], payload),
  failure: () => action(BUDGET_POST[FAILURE]),
};

export const BUDGET_EDIT = createRequestTypes("BUDGET_EDIT");

export const budgetEdit = {
  edit: (payload) => action("BUDGET_EDIT", payload),
  deny: () => action("BUDGET_EDIT_DENY"),
  request: (payload) => action(BUDGET_EDIT[REQUEST], payload),
  success: (payload) => action(BUDGET_EDIT[SUCCESS], payload),
  failure: () => action(BUDGET_DELETE[FAILURE]),
};

export const BUDGET_DELETE = createRequestTypes("BUDGET_DELETE");

export const budgetDelete = {
  request: (payload) => action(BUDGET_DELETE[REQUEST], payload),
  success: (payload) => action(BUDGET_DELETE[SUCCESS], payload),
  failure: () => action(BUDGET_DELETE[FAILURE]),
};

export const BUDGETS_GET = createRequestTypes("BUDGETS_GET");

export const budgetsGet = {
  request: () => action(BUDGETS_GET[REQUEST]),
  success: (payload) => action(BUDGETS_GET[SUCCESS], payload),
  failure: () => action(BUDGETS_GET[FAILURE]),
};
