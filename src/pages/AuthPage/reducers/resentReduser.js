import { EMAIL_RECONFIRMATION } from "../actions";

const initialState = { loading: false };

export const resentReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_RECONFIRMATION.REQUEST:
      return { ...state, loading: true };
    case EMAIL_RECONFIRMATION.RESPONSE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
