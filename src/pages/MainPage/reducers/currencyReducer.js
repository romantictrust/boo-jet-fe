import { CURRENCY_DATA } from "../actions/currency";

const initialState = { currencyData: [], loading: false };

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENCY_DATA.REQUEST:
      return { ...state, loading: true };
    case CURRENCY_DATA.SUCCESS:
      return { ...state, currencyData: action.payload, loading: false };
    case CURRENCY_DATA.FAILURE:
      return { ...state, loading: false };
    default: {
      return state;
    }
  }
};
