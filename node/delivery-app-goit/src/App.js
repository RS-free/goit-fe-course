import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "net";
import { refreshCurrentUser } from "../../../../ibet/src/components/ModalLogin/sessionActions";

class App extends Component {
  componentDidMount() {
    const { getCurrentUser } = this.props;
    getCurrentUser();
  }
  render() {
    return <div>App</div>;
  }
}
App.propTypes = {
  getCurrentUser: propTypes.func.isRequired
};

export default connect(
  null,
  { getCurrentUser: refreshCurrentUser }
)(App);
