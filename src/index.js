import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// Components
import App from "./App";

// Configuration
import store from "./config/store";

// Assets
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
