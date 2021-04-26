import React from "react";
import { connect } from "react-redux";
import BudgetBlock from "../components/Budget/Block";
import { snackbar } from "../../../shared/components/Snackbar/actions";
import { currenciesList } from "../actions/currency";
import { budgetPost, budgetEdit, budgetsGet } from "../actions/budget";
import { budgetActionPost } from "../actions/budgetActions";
import { processBudgets } from "../selectors/budgetsSelectors";

const BudgetBlockContainer = ({
  currenciesList,
  budgetsList,
  editable,
  onPushMessage,
  onGetCurrencies,
  onPostBudget,
  onEditBudget,
  onBudgetEditOver,
  onGetBudget,
  onPostBudgetAction,
}) => {
  return (
    <BudgetBlock
      currenciesList={currenciesList}
      budgetsList={budgetsList}
      editable={editable}
      onPushMessage={onPushMessage}
      onGetCurrencies={onGetCurrencies}
      onPostBudget={onPostBudget}
      onEditBudget={onEditBudget}
      onBudgetEditOver={onBudgetEditOver}
      onGetBudget={onGetBudget}
      onPostBudgetAction={onPostBudgetAction}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    currenciesList: state.mainPage.currency.currencyData,
    budgetsList: processBudgets(state),
    editable: state.mainPage.budgets.editable,
  };
};

const mapDispatchToProps = {
  onPushMessage: snackbar.pushMessage,
  onGetCurrencies: currenciesList.request,
  onPostBudget: budgetPost.request,
  onEditBudget: budgetEdit.request,
  onBudgetEditOver: budgetEdit.deny,
  onGetBudget: budgetsGet.request,
  onPostBudgetAction: budgetActionPost.request,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BudgetBlockContainer);
