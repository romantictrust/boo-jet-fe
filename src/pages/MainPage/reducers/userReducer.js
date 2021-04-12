import { USER_SIGN_IN } from "../../AuthPage/actions";

const initialState = { user: {} };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGN_IN.SUCCESS:
      return { ...state, user: action.payload };
    default: {
      return state;
    }
  }
};
