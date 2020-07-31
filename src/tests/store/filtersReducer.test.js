import moment from "moment";
import filtersReducer from "../../store/filtersReducer";

test("Should set up default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "patient's name",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("Should set sortBy to date", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

test("Should set sortBy to patient's name", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "date",
  };
  const action = { type: "SORT_BY_PATIENTS_NAME" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("patient's name");
});

test("Should set text filter", () => {
  const text = "Text";
  const action = { type: "SET_TEXT_FILTER", text };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test("Should set startDate filter", () => {
  const startDate = moment();
  const action = { type: "SET_START_DATE", startDate };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test("Should set endDate filter", () => {
  const endDate = moment();
  const action = { type: "SET_END_DATE", endDate };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
