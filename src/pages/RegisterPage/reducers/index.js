import { USER_SIGNUP } from "../actions";

export const userSignUpReduser = (
  state = { data: {}, error: null, loading: false },
  { type, data, error }
) => {
  switch (type) {
    case USER_SIGNUP.REQUEST:
      return { ...state, error: null, loading: true };
    case USER_SIGNUP.RESPONSE:
      return { ...state, data, error: null, loading: false };
    case USER_SIGNUP.FAILURE:
      return { ...state, data: {}, error, loading: false };
    default:
      return state;
  }
};
