import React from "react";
import { shallow } from "enzyme";
import { ListAppointments } from "../../components/crud_components/ListAppointments";
import appointments from "../fixtures/appointments";

test("Should render ListAppointments with appointments", () => {
  const wrapper = shallow(<ListAppointments appointments={appointments} />);
  expect(wrapper).toMatchSnapshot();
});

test("Should render ListAppointments with empty message", () => {
  const wrapper = shallow(<ListAppointments appointments={[]} />);
  expect(wrapper).toMatchSnapshot();
});
