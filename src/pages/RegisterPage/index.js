import React from "react";
import { connect } from "react-redux";
import PageContent from "./components/Page";
import Page from "../../shared/components/Page";
import { userSignUp } from "./actions";
import { snackbar } from "../../shared/components/Snackbar/actions";

const RegisterPage = ({ onSendUser, onPushMessage }) => {
  return (
    <Page isHeadered={false}>
      <PageContent onSendUser={onSendUser} onPushMessage={onPushMessage} />
    </Page>
  );
};

export default connect(null, {
  onSendUser: userSignUp.request,
  onPushMessage: snackbar.pushMessage,
})(RegisterPage);
