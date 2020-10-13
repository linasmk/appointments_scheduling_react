import selectAppointmentsTotal from "../../store/selectors-total";
import appointments from "../fixtures/appointments";

it("returns 0, if no appointments to show", () => {
  const res = selectAppointmentsTotal([]);
  expect(res).toBe(0);
});

it("correctly adds up 1 appointment", () => {
  const res = selectAppointmentsTotal([appointments[0]]);
  expect(res).toBe(1);
});

it("correctly adds up multiple appointments", () => {
  const res = selectAppointmentsTotal(appointments);
  expect(res).toBe(3);
});
