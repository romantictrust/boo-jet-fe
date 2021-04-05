import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { useSnackbar } from "notistack";
import { snackbar } from "./actions";

function SimpleSnackbar({ messages, onClearMessage }) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  useEffect(() => {
    if (messages.length > 0) {
      messages.forEach((message) => {
        enqueueSnackbar(message.text, {
          preventDuplicate: true,
          variant: message.snackbarType,
          key: message.id,
          persist: !message.autoHide,
          autoHideDuration: 2000,
          action:
            message.actionText && message.action
              ? (key) => (
                  <Button
                    key={key}
                    color="secondary"
                    size="small"
                    onClick={() => dispatch(message.action)}
                  >
                    {message.actionText}
                  </Button>
                )
              : null,
          onExited: (event, myKey) => {
            onClearMessage(message.id);
          },
        });
      });
    }
  }, [messages]);
  return null;
}

const mapStateToProps = (state) => {
  return {
    messages: state.snackbars.messages,
  };
};

const mapDispatchToProps = {
  onClearMessage: snackbar.clearMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleSnackbar);
