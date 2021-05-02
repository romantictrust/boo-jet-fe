import {
  budgetDelete,
  budgetEdit,
} from "../../../../pages/MainPage/actions/budget";

import { widgetDelete } from "../../../../pages/MainPage/actions/widgets";

export const WidgetTypes = {
  BudgetGroups: 0,
  ActionsTable: 1,
  DataGrid: 2,
};

export const WidgetMenuOperationsTypes = {
  Remove: 0,
  Rename: 1,
  Edit: 2,
};

export const WidgetMenuOperations = {
  [WidgetMenuOperationsTypes.Remove]: {
    title: "Remove",
    method: (widgetType, data, dispatch) => {
      if (widgetType === WidgetTypes.BudgetGroups)
        dispatch(budgetDelete.request(data));
      else dispatch(widgetDelete.request(data));
    },
  },
  [WidgetMenuOperationsTypes.Rename]: {
    title: "Rename",
    method: (widgetType, data, dispatch) => {
      console.log(widgetType, data);
    },
  },
  [WidgetMenuOperationsTypes.Edit]: {
    title: "Edit",
    method: (widgetType, data, dispatch) => {
      if (widgetType === WidgetTypes.BudgetGroups)
        dispatch(budgetEdit.edit(data));
    },
  },
};

export const WidgetMenuOptions = {
  [WidgetTypes.BudgetGroups]: [
    WidgetMenuOperations[WidgetMenuOperationsTypes.Remove],
    WidgetMenuOperations[WidgetMenuOperationsTypes.Edit],
  ],
  [WidgetTypes.ActionsTable]: [
    WidgetMenuOperations[WidgetMenuOperationsTypes.Remove],
  ],
  [WidgetTypes.DataGrid]: [
    WidgetMenuOperations[WidgetMenuOperationsTypes.Remove],
  ],
};
