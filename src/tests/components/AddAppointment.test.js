import React from "react";
import { shallow } from "enzyme";
import {
  AddAppointment,
  AddBook,
} from "../../components/crud_components/AddAppointment";
import appointments from "../fixtures/appointments";

let onSubmit, wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  wrapper = shallow(<AddAppointment onSubmit={onSubmit} />);
});

test("Should render AddAppointment correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should handle onSubmit", () => {
  wrapper.find("AppointmentForm").prop("onSubmit")(appointments[1]);
  expect(onSubmit).toHaveBeenLastCalledWith(appointments[1]);
});
