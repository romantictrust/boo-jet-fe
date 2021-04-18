import {
  budgetDelete,
  budgetEdit,
} from "../../../../pages/MainPage/actions/budgetActions";

export const WidgetTypes = {
  BudgetGroups: 0,
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
};
