import React, { useEffect } from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import WidgetPopup from "./WidgetPopup.js";
import styles from "../../styles/AddWidgetArea.module.css";
import useToggle from "../../../../shared/hooks/useToggle";

export default function AddWidgetArea({
  budgetsList,
  onPostWidget,
  onEditWidget,
  onPushMessage,
  onWidgetEditOver,
  editable,
}) {
  const isEdit = !!editable?._id;
  const [isPopupOpened, togglePopupModal] = useToggle(isEdit);
  
  useEffect(() => {
    if (isEdit) togglePopupModal(true);
  }, [editable]);

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
          <WidgetPopup
            editable={editable}
            budgetsList={budgetsList}
            onClose={togglePopupModal}
            onPostWidget={onPostWidget}
            onEditWidget={onEditWidget}
            onPushMessage={onPushMessage}
            onWidgetEditOver={onWidgetEditOver}
            isEdit={isEdit}
          />
        )}
      </Grid>
    </>
  );
}
