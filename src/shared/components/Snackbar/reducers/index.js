import { SNACKBAR_HANDLE_MESSAGE, SNACKBAR_CLEAR_MESSAGE } from "../actions";

const initialState = { messages: [] };

export const snackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SNACKBAR_HANDLE_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case SNACKBAR_CLEAR_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};
