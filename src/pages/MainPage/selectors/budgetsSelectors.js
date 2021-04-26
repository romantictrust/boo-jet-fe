export const processBudgets = (state) => {
  const currencies = state.mainPage.currency.currencyData;
  const budgets = state.mainPage.budgets.data;
  let budgetsCopy = [...budgets];
  return budgetsCopy.map((budget) => {
    const processedActions = budget.actions.map((budgetAction) => ({
      ...budgetAction,
      date: budgetAction.date.slice(0, 16),
    }));
    const processedCurrency = currencies.find(
      (currency) => currency._id === budget.currency
    );
    return {
      ...budget,
      currency: processedCurrency,
      actions: processedActions,
    };
  });
};
