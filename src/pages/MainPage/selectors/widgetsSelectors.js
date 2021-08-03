export const processWidgets = (state, budgets) => {
  const widgets = state.mainPage.widgets.data;
  if (widgets.length !== 0 && budgets !== 0) {
    let processedWidgets = widgets.map((widget) => ({
      ...widget,
      budget: budgets.find((budget) => budget._id === widget.budget),
    }));
    return processedWidgets;
  } else return [];
};

export const processEditWidget = (state) => {
  const editable = state.mainPage.widgets.editable;
  const widgets = state.mainPage.widgets.data;
  if (widgets.length !== 0 && !!editable?._id) {
    return widgets.find((widget) => widget._id === editable._id);
  } else return {};
};
