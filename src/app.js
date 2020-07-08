/* ========= App Dependencies ============= */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

/* =========== Redux ================== */
import configureStore from "./store/configureStore";
/* =========== Redux ================== */
import AppRouter from "./routers/AppRouter";
/* ========== Styles ========== */
import "normalize.css/normalize.css";
import "react-dates/lib/css/_datepicker.css";
import "./styles/styles.scss";
import "react-dates/initialize";
/* ========== Components ========== */

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("app")
);
