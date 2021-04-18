import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import configureStore from "./store";

const store = configureStore();

const renderContainer = Component => {
  const root = document.getElementById("root");

  const Application = (
    <Provider store={store}>
      <Router>
        <Component />
      </Router>
    </Provider>
  );

  render(Application, root);
};

renderContainer(App);

reportWebVitals();
