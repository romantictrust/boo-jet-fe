export const processWidgets = (state, processBudgets) => {
  const widgets = state.mainPage.widgets.data;
  const budgets = processBudgets(state);
  if (widgets.length !== 0 && budgets !== 0) {
    let processedWidgets = widgets.map((widget) => ({
      ...widget,
      budget: budgets.find((budget) => budget._id === widget.budget),
    }));
    return processedWidgets;
  } else return [];
};
