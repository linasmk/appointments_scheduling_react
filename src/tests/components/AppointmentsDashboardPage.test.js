import React from "react";
import { shallow } from "enzyme";
import AppointmentsDashboardPage from "../../components/AppointmentsDashboardPage";

test("Should AppointmentsDashboardPage render corectly", () => {
  const wrapper = shallow(<AppointmentsDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
