import React from "react";
import { connect } from "react-redux";
import BudgetBlock from "../components/BudgetBlock";
import { snackbar } from "../../../shared/components/Snackbar/actions";
import { currenciesList } from "../actions/currencyActions";

const BudgetBlockContainer = ({
  currenciesList,
  onPushMessage,
  onGetCurrencies,
}) => {
  return (
    <BudgetBlock
      currenciesList={currenciesList}
      onPushMessage={onPushMessage}
      onGetCurrencies={onGetCurrencies}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    currenciesList: state.mainPage.currency.currencyData,
  };
};

export default connect(mapStateToProps, {
  onPushMessage: snackbar.pushMessage,
  onGetCurrencies: currenciesList.request,
})(BudgetBlockContainer);
