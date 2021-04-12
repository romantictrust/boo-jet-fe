import {
  createRequestTypes,
  action,
  REQUEST,
  SUCCESS,
  FAILURE,
} from "../../../actions";

export const CURRENCY_DATA = createRequestTypes("CURRENCY_DATA");

export const currenciesList = {
  request: () => action(CURRENCY_DATA[REQUEST]),
  success: (payload) => action(CURRENCY_DATA[SUCCESS], payload),
  failure: () => action(CURRENCY_DATA[FAILURE]),
};
