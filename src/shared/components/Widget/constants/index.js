import {
  budgetDelete,
  budgetEdit,
} from "../../../../pages/MainPage/actions/budget";

import {
  widgetDelete,
  widgetEdit,
} from "../../../../pages/MainPage/actions/widgets";

export const WidgetTypes = {
  BudgetGroups: 0,
  ActionsTable: 1,
  DataGrid: 2,
  PChartWP: 3,
  TimeLineChart: 4,
  CategoriesWastagePie: 5,
  CategoriesProfitPie: 6,
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
    method: (widgetType, data, dispatch) => {},
  },
  [WidgetMenuOperationsTypes.Edit]: {
    title: "Edit",
    method: (widgetType, data, dispatch) => {
      if (widgetType === WidgetTypes.BudgetGroups)
        dispatch(budgetEdit.edit(data));
      else dispatch(widgetEdit.edit(data));
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
    WidgetMenuOperations[WidgetMenuOperationsTypes.Edit],
  ],
  [WidgetTypes.DataGrid]: [
    WidgetMenuOperations[WidgetMenuOperationsTypes.Remove],
    WidgetMenuOperations[WidgetMenuOperationsTypes.Edit],
  ],
  [WidgetTypes.PChartWP]: [
    WidgetMenuOperations[WidgetMenuOperationsTypes.Remove],
    WidgetMenuOperations[WidgetMenuOperationsTypes.Edit],
  ],
  [WidgetTypes.TimeLineChart]: [
    WidgetMenuOperations[WidgetMenuOperationsTypes.Remove],
    WidgetMenuOperations[WidgetMenuOperationsTypes.Edit],
  ],
  [WidgetTypes.CategoriesProfitPie]: [
    WidgetMenuOperations[WidgetMenuOperationsTypes.Remove],
    WidgetMenuOperations[WidgetMenuOperationsTypes.Edit],
  ],
  [WidgetTypes.CategoriesWastagePie]: [
    WidgetMenuOperations[WidgetMenuOperationsTypes.Remove],
    WidgetMenuOperations[WidgetMenuOperationsTypes.Edit],
  ],
};
