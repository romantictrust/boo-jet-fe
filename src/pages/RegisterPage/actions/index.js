import {
  createRequestTypes,
  action,
  REQUEST,
  SUCCESS,
  FAILURE,
} from "../../../actions";

export const USER_SIGN_UP = createRequestTypes("USER_SIGN_UP");

export const userSignUp = {
  request: (userData) => action(USER_SIGN_UP[REQUEST], { userData }),
  success: (response) => action(USER_SIGN_UP[SUCCESS], { response }),
};
