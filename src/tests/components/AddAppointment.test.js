import React from "react";
import { shallow } from "enzyme";
import { AddAppointment } from "../../components/crud_components/AddAppointment";
import appointments from "../fixtures/appointments";

let addAppointment, wrapper;

beforeEach(() => {
  addAppointment = jest.fn();
  wrapper = shallow(<AddAppointment addAppointment={addAppointment} />);
});

test("Should render AddAppointment correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should handle onSubmit", () => {
  wrapper.find("AppointmentForm").prop("onSubmit")(appointments[1]);
  expect(addAppointment).toHaveBeenLastCalledWith(appointments[1]);
});
