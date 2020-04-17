import React, { Component } from "react";
import * as actions from "../../../store/actions/index";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Logout extends Component {
  // componentDid mount will be executed as soon as we enter page/render this component
  componentDidMount() {
    this.props.onLogout();
  }

  render() {
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout())
  };
};
export default connect(null, mapDispatchToProps)(Logout);
