import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import ActionPopup from "../../Budget/ActionPopup";
import useToggle from "../../../../../shared/hooks/useToggle";
import styles from "./styles/DataGrid.module.css";

const TableToolbar = ({
  budgetId,
  selectedAction,
  onPushMessage,
  onEditBudgetAction,
  onDeleteBudgetAction,
}) => {
  const [editRow, toggleEditRow] = useToggle();

  const handleDeleteAction = () => {
    const { id, ...action } = selectedAction;
    onDeleteBudgetAction({ budgetId, action });
  };

  return (
    <Toolbar className={styles.toolbar}>
      {selectedAction && (
        <Typography color="inherit" variant="subtitle1" component="div">
          {selectedAction.name} selected
        </Typography>
      )}

      {selectedAction && (
        <div>
          <Tooltip title="Delete">
            <IconButton aria-label="delete" onClick={handleDeleteAction}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton aria-label="edit" onClick={toggleEditRow}>
              <EditIcon />
            </IconButton>
          </Tooltip>
        </div>
      )}
      {editRow && (
        <ActionPopup
          action={selectedAction}
          budgetId={budgetId}
          onActionsClose={toggleEditRow}
          onPushMessage={onPushMessage}
          onEditBudgetAction={onEditBudgetAction}
        />
      )}
    </Toolbar>
  );
};
export default TableToolbar;
