export const processBudgets = (state) => {
  const currencies = state.mainPage.currency.currencyData;
  const budgets = state.mainPage.budgets.data;
  let budgetsCopy = [...budgets];
  return budgetsCopy.map((budget) => {
    const processedCurrency = currencies.find(
      (currency) => currency._id === budget.currency
    );
    return { ...budget, currency: processedCurrency };
  });
};
