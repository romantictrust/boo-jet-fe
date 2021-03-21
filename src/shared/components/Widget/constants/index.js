export const WidgetTypes = {
  BudgetGroups: 0,
};

export const WidgetMenuOperationsTypes = {
  Remove: 0,
  Rename: 1,
};

export const WidgetMenuOperations = {
  [WidgetMenuOperationsTypes.Remove]: {
    title: "Remove",
    method: (e) => {
      console.log(e);
    },
  },
  [WidgetMenuOperationsTypes.Rename]: {
    title: "Rename",
    method: (e) => {
      console.log(e);
    },
  },
};

export const WidgetMenuOptions = {
  [WidgetTypes.BudgetGroups]: [
    WidgetMenuOperations[WidgetMenuOperationsTypes.Remove],
  ],
};
