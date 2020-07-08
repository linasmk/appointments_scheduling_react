import { createStore, combineReducers } from "redux";
import appointmentsReducer from "./appointmentsReducer";
import filtersReducer from "./filtersReducer";

/* =================================================
=========== STORE CONFIGURATION ================
================================================= */
export default () => {
  const store = createStore(
    combineReducers({
      appointments: appointmentsReducer,
      filters: filtersReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
