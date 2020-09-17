/* ===== App Dependencies ===== */
import React from "react";
import { shallow } from "enzyme";
import appointments from "../fixtures/appointments";
/* ========== Components ========== */
import AppointmentForm from "../../components/crud_components/AppointmentForm";

/* ========== Code ========== */
test("Should render AppointmentForm correctly", () => {
  const wrapper = shallow(<AppointmentForm />);
  expect(wrapper).toMatchSnapshot();
});

test("Should render AppointmentForm with appointments data", () => {
  const wrapper = shallow(<AppointmentForm appointment={appointments[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test("Should render error for invalid form submission", () => {
  const wrapper = shallow(<AppointmentForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("Should set Patient Name on input change", () => {
  const value = "New Patient Name";
  const wrapper = shallow(<AppointmentForm />);
  wrapper.find("input").at(0).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("patientName")).toBe(value);
});

test("Should set note on textarea change", () => {
  const value = "New note value";
  const wrapper = shallow(<AppointmentForm />);
  wrapper.find("textarea").at(0).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("aptNotes")).toBe(value);
});

test("Should call onSubmit prop for valid form submission", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <AppointmentForm appointment={appointments[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    patientName: appointments[0].patientName,
    aptNotes: appointments[0].aptNotes,
    aptDate: appointments[0].aptDate,
    createdAt: appointments[0].createdAt,
  });
});
