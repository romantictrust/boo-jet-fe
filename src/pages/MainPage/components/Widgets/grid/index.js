import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { connect } from "react-redux";
import { snackbar } from "../../../../../shared/components/Snackbar/actions";

import TableToolbar from "./DataGridToolbar";
import styles from "./styles/DataGrid.module.css";
import { unHumanizeAction } from "../../../utils/prepareActions";
import {
  budgetActionEdit,
  budgetActionDelete,
} from "../../../actions/budgetActions";

const columns = [
  { field: "_id", headerName: "ID", sortable: false, width: 100 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "type", headerName: "Type", width: 130 },
  {
    field: "category",
    headerName: "Category",
    width: 200,
  },
  {
    field: "value",
    headerName: "Value",
    width: 100,
  },
  {
    field: "date",
    headerName: "Date",
    width: 160,
  },
];

function DataTable({
  budgetId,
  actions,
  onPushMessage,
  onEditBudgetAction,
  onDeleteBudgetAction,
}) {
  const [selectionModel, setSelectionModel] = useState([]);
  const [selectedAction, setSelectedAction] = useState(null);

  const handleSelectionModelChange = (newSelection) => {
    const action = actions.find(
      (action) => action.id === newSelection.selectionModel[0]
    );
    setSelectedAction(action);
    setSelectionModel(newSelection.selectionModel);
  };

  return (
    <>
      <TableToolbar
        budgetId={budgetId}
        selectedAction={unHumanizeAction(selectedAction)}
        onPushMessage={onPushMessage}
        onEditBudgetAction={onEditBudgetAction}
        onDeleteBudgetAction={onDeleteBudgetAction}
      />
      <div className={styles.grid}>
        <DataGrid
          rows={actions}
          columns={columns}
          pageSize={5}
          onSelectionModelChange={handleSelectionModelChange}
          selectionModel={selectionModel}
          hideFooterSelectedRowCount
        />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  onPushMessage: snackbar.pushMessage,
  onEditBudgetAction: budgetActionEdit.request,
  onDeleteBudgetAction: budgetActionDelete.request,
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
