import { action } from "../../../../actions";
import random from "../../../functions/random";

export const SNACKBAR_HANDLE_MESSAGE = "SNACKBAR_HANDLE_MESSAGE";
export const SNACKBAR_CLEAR_MESSAGE = "SNACKBAR_CLEAR_MESSAGE";

export const snackbar = {
  pushMessage: (message) =>
    action(SNACKBAR_HANDLE_MESSAGE, {
      id: random(),
      text: message.text,
      action: message.action,
      actionText: message.actionText,
      autoHide: message.autoHide ?? true,
      snackbarType: message?.snackbarType ?? "error",
    }),
  clearMessage: (id) => action(SNACKBAR_CLEAR_MESSAGE, { id }),
};
