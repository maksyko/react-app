import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

export class App extends React.Component {
  render() {
    return <div>App component</div>;
  }
}

export default connect()(App);
