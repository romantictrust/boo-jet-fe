import React from "react";
import { connect } from "react-redux";
import PageContent from "./components/Page";
import Page from "../../shared/components/Page";
import { userSignUp } from "./actions";

const RegisterPage = ({ onSendUser }) => {
  return (
    <Page isHeadered={false}>
      <PageContent onSendUser={onSendUser} />
    </Page>
  );
};

export default connect(null, { onSendUser: userSignUp.request })(RegisterPage);
