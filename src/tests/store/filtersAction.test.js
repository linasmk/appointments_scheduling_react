import moment from "moment";
import {
  setTextFilter,
  sortByDate,
  sortByPatientsName,
  setStartDate,
  setEndDate,
} from "../../store/filtersAction";

// Generate startDate
test("Should generate setStartDate action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

// Generate endDate
test("Should generate setEndDate action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

// Generate setText filter with provided values
test("Should generate setTextFilter action object with text values", () => {
  const text = "Text string";
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text,
  });
});

// Generate setTextFilter without provided values
test("Should generate setTextFilter action object without text values", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});

// Generate sortByDate
test("Should generate sortByDate filter action object", () => {
  expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" });
});

// Generate sortByPatientsName
test("Should generate sortByPatientsName filter action object", () => {
  expect(sortByPatientsName()).toEqual({ type: "SORT_BY_PATIENTS_NAME" });
});
