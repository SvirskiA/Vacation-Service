import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import ErrorBoundary from "./ErrorBoundary";
import store from "./store/store";
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
