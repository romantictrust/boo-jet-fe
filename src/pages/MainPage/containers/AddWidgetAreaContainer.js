import React from "react";
import { connect } from "react-redux";
import AddWidgetArea from "../components/AddWidgetArea";
import { snackbar } from "../../../shared/components/Snackbar/actions";

import { processBudgets } from "../selectors/budgetsSelectors";
import { widgetPost } from "../actions/widgets";

const AddWidgetAreaContainer = ({
  currenciesList,
  budgetsList,
  onPostWidget,
  onPushMessage,
}) => {
  return (
    <AddWidgetArea
      currenciesList={currenciesList}
      budgetsList={budgetsList}
      onPushMessage={onPushMessage}
      onPostWidget={onPostWidget}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    currenciesList: state.mainPage.currency.currencyData,
    budgetsList: processBudgets(state),
  };
};

const mapDispatchToProps = {
  onPushMessage: snackbar.pushMessage,
  onPostWidget: widgetPost.request,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddWidgetAreaContainer);
