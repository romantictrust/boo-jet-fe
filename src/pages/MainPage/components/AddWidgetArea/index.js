import React from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import AddWidgetPopup from "./AddWidgetPopup.js";
import styles from "../../styles/AddWidgetArea.module.css";
import useToggle from "../../../../shared/hooks/useToggle";

export default function AddWidgetArea({
  budgetsList,
  onPostWidget,
  onPushMessage,
}) {
  const [isPopupOpened, togglePopupModal] = useToggle();

  return (
    <>
      <Grid item xs={12} className={styles.root}>
        <Button
          variant="contained"
          color="default"
          className={styles.card}
          onClick={togglePopupModal}
        >
          <AddCircleOutlineIcon className={styles.icon} fontSize="large" />
        </Button>
        {isPopupOpened && (
          <AddWidgetPopup
            budgetsList={budgetsList}
            onClose={togglePopupModal}
            onPostWidget={onPostWidget}
            onPushMessage={onPushMessage}
          />
        )}
      </Grid>
    </>
  );
}
