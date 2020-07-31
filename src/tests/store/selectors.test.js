import moment from "moment";
import getVisibleAppointments from "../../store/selectors";
import appointments from "./fixtures/appointments";

test("Should filter by text value", () => {
  const filters = {
    text: "a",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = getVisibleAppointments(appointments, filters);
  expect(result).toEqual([appointments[2]]);
});

test("Should filter by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined,
  };
  const result = getVisibleAppointments(appointments, filters);
  expect(result).toEqual([appointments[1], appointments[0]]);
});

test("Should filter by endDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0).add(2, "days"),
  };
  const result = getVisibleAppointments(appointments, filters);
  expect(result).toEqual([appointments[0], appointments[2]]);
});

test("Should sortBy date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = getVisibleAppointments(appointments, filters);
  expect(result).toEqual([appointments[1], appointments[0], appointments[2]]);
});

test("Should sortBy patientName", () => {
  const filters = {
    text: "",
    sortBy: "patientName",
    startDate: undefined,
    endDate: undefined,
  };
  const result = getVisibleAppointments(appointments, filters);
  expect(result).toEqual([appointments[0], appointments[1], appointments[2]]);
});
