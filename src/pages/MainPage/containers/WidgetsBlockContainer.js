import React from "react";
import { connect } from "react-redux";
import WidgetsBlock from "../components/Widgets";
import { snackbar } from "../../../shared/components/Snackbar/actions";

import { processBudgets } from "../selectors/budgetsSelectors";
import { processWidgets } from "../selectors/widgetsSelectors";
import { widgetsGet } from "../actions/widgets";

const WidgetsBlockContainer = (props) => {
  return (
    <WidgetsBlock
      isLoading={props.isLoading || props.budgetIsUpdating}
      {...props}
    />
  );
};

const mapStateToProps = (state) => {
  const budgets = processBudgets(state);
  return {
    widgets: processWidgets(state, budgets),
    budgetsList: budgets,
    isLoading: state.mainPage.widgets.loading,
    budgetIsUpdating: state.mainPage.budgets.loading,
  };
};

const mapDispatchToProps = {
  onPushMessage: snackbar.pushMessage,
  onGetWidgets: widgetsGet.request,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetsBlockContainer);
