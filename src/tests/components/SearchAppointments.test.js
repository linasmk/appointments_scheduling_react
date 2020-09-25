/* ===== App Dependencies ===== */
import React from "react";
import { act, renderHook } from "@testing-library/react";
import { shallow } from "enzyme";
import moment from "moment";
import { DateRangePicker } from "react-dates";
import { filters, altFilters } from "../fixtures/filters";
/* ========== Components ========== */
import { SearchAppointments } from "../../components/crud_components/SearchAppointments";

/* ========== Code ========== */
let setTextFilter,
  sortByDate,
  sortByPatientsName,
  setStartDate,
  setEndDate,
  onFocusChange,
  wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByPatientsName = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  onFocusChange = jest.fn();
  wrapper = shallow(
    <SearchAppointments
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByPatientsName={sortByPatientsName}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("should render SearchAppointments correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render SearchAppointments with alternative data correctly", () => {
  wrapper.setProps({
    filters: altFilters,
  });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = "Bill Will";
  wrapper.find("input").at(0).simulate("change", {
    target: { value },
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should sort by date", () => {
  const value = "date";
  wrapper.setProps({
    filters: altFilters,
  });
  wrapper.find("select").simulate("change", {
    target: { value },
  });
  expect(sortByDate).toHaveBeenCalled();
});

test("should sortByPatientsName", () => {
  const value = "patient's name";
  wrapper.find("select").simulate("change", {
    target: { value },
  });
  expect(sortByPatientsName).toHaveBeenCalled();
});
test("should handle date changes", () => {
  const startDate = moment(0).add(1, "years");
  const endDate = moment(0).add(3, "years");
  wrapper.find(DateRangePicker).prop("onDatesChange")({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test.only("should handle date focus changes", () => {
  const { result } = wrapper.renderHook(calendarFocused);
  act(() => {
    result.current.setState();
  });
  expect(result.current.setState).toBe("endDate");
});
