/* ========= App Dependencies ============= */
import React from "react";
import ReactDOM from "react-dom";

/* =========== Redux ================== */
import { Provider } from "react-redux";
import store from "./store/configureStore";
/* =========== Router ================== */
import AppRouter from "./routers/AppRouter";
/* ========== Styles ========== */
import "normalize.css/normalize.css";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import "./styles/styles.scss";

/* ========== Components ========== */

console.log("testing build");

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("app")
);
