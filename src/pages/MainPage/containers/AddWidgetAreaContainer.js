import React from "react";
import { connect } from "react-redux";
import AddWidgetArea from "../components/AddWidgetArea";
import { snackbar } from "../../../shared/components/Snackbar/actions";

import { processBudgets } from "../selectors/budgetsSelectors";
import { processEditWidget } from "../selectors/widgetsSelectors";
import { widgetEdit, widgetPost } from "../actions/widgets";

const AddWidgetAreaContainer = (props) => {
  return <AddWidgetArea {...props} />;
};

const mapStateToProps = (state) => {
  return {
    currenciesList: state.mainPage.currency.currencyData,
    budgetsList: processBudgets(state),
    editable: processEditWidget(state),
  };
};

const mapDispatchToProps = {
  onPushMessage: snackbar.pushMessage,
  onPostWidget: widgetPost.request,
  onEditWidget: widgetEdit.request,
  onWidgetEditOver: widgetEdit.deny,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddWidgetAreaContainer);
