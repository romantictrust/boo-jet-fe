import React from "react";
import { connect } from "react-redux";
import PageContent from "./components/Page";
import Page from "../../shared/components/Page";
import { userSignIn } from "./actions";
import { snackbar } from "../../shared/components/Snackbar/actions";

const RegisterPage = ({ user, onSendUser, onPushMessage }) => {
  return (
    <Page isHeadered={false}>
      <PageContent
        user={user}
        onSendUser={onSendUser}
        onPushMessage={onPushMessage}
      />
    </Page>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.signInPage.userSignIn.user,
  };
};

export default connect(mapStateToProps, {
  onSendUser: userSignIn.request,
  onPushMessage: snackbar.pushMessage,
})(RegisterPage);
