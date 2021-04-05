import { USER_SIGN_IN } from "../actions";

const initialState = { user: {}, loading: false };

export const userSignInReduser = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGN_IN.REQUEST:
      return { ...state, loading: true };
    case USER_SIGN_IN.SUCCESS:
      return { ...state, user: action.payload.user, loading: false };
    default:
      return state;
  }
};
