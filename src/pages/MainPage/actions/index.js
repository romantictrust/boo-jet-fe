import {
  createRequestTypes,
  action,
  REQUEST,
  SUCCESS,
  FAILURE,
} from "../../../actions";

export const USER_DATA = createRequestTypes("USER_DATA");

export const userData = {
  request: (userData) => action(USER_DATA[REQUEST], { userData }),
  success: (response) => action(USER_DATA[SUCCESS], { response }),
};

