import { USER_SIGN_UP } from "../actions";

const initialState = { data: {}, loading: false };

export const userSignUpReduser = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGN_UP.REQUEST:
      return { ...state, loading: true };
    case USER_SIGN_UP.RESPONSE:
      return { ...state, data: action.payload, loading: false };
    default:
      return state;
  }
};
