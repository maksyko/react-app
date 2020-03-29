import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import configureStore from "./store/configureStore";
import initialReduxState from "./constants/initialState";

import App from "./app";
import Home from "./home";

const store = configureStore(initialReduxState);

const renderApp = (state, callback = () => {}) => {
  ReactDOM.render(
    <Provider store={store}>
      <Router {...state}>
        <Switch>
          <Route path="" component={App}>
            <Route path="/" component={Home}></Route>
          </Route>
        </Switch>
      </Router>
    </Provider>,
    document.getElementById("root"),
    callback
  );
};

const initialState = {
  location: window.location.pathname
};

// Render the app initially
renderApp(initialState);
