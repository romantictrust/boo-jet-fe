import {
  createRequestTypes,
  action,
  REQUEST,
  SUCCESS,
  FAILURE,
} from "../../../actions";

export const USER_SIGN_IN = createRequestTypes("USER_SIGN_IN");
export const EMAIL_RECONFIRMATION = createRequestTypes("EMAIL_RECONFIRMATION");

export const userSignIn = {
  request: (userData) => action(USER_SIGN_IN[REQUEST], { userData }),
  success: (user) => action(USER_SIGN_IN[SUCCESS], { user }),
};

export const emailReconfirmation = {
  request: (userData) => action(EMAIL_RECONFIRMATION[REQUEST], { userData }),
  success: (response) => action(EMAIL_RECONFIRMATION[SUCCESS], { response }),
};
