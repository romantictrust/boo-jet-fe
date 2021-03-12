import React from "react";
import { connect } from "react-redux";

import Header from "../components/Header";

function HeaderContainer() {
  return <Header />;
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
