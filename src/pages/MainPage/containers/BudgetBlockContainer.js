import React from "react";
import { connect } from "react-redux";
import BudgetBlock from "../components/BudgetBlock";
import { snackbar } from "../../../shared/components/Snackbar/actions";

const BudgetBlockContainer = ({ onPushMessage }) => {
  return <BudgetBlock onPushMessage={onPushMessage} />;
};

export default connect(null, {
  onPushMessage: snackbar.pushMessage,
})(BudgetBlockContainer);
