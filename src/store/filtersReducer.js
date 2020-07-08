/* ========= Dependencies ============= */
import moment from "moment";
/* =================================================
=========== FILTERS REDUCER =====================
================================================= */
const filtersReducerDefaultState = {
  text: "",
  sortBy: "patient's name",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month"),
};
export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SORT_BY_PATIENTS_NAME":
      return {
        ...state,
        sortBy: "patient's name",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};
