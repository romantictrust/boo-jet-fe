import {
  createRequestTypes,
  action,
  REQUEST,
  SUCCESS,
  FAILURE,
} from "../../../actions";

export const USER_SIGNUP = createRequestTypes("USER_SIGNUP");

export const userSignUp = {
  request: (userData) => action(USER_SIGNUP[REQUEST], { userData }),
  success: (response) => action(USER_SIGNUP[SUCCESS], { response }),
};
