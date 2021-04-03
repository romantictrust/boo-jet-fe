import { USER_SIGNUP } from "../actions";

const initialState = { data: {}, loading: false };

export const userSignUpReduser = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP.REQUEST:
      return { ...state, loading: true };
    case USER_SIGNUP.RESPONSE:
      return { ...state, data: action.payload, loading: false };
    default:
      return state;
  }
};
