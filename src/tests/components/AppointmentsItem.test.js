/* ========= App Dependencies ============= */
import React from "react";
import { shallow } from "enzyme";
import { AppointmentsItem } from "../../components/crud_components/AppointmentsItem";
import appointments from "../fixtures/appointments";
/* ========= Code ============= */

test("Should render AppointmentsItem correctly", () => {
  const wrapper = shallow(<AppointmentsItem {...appointments[0]} />);
  expect(wrapper).toMatchSnapshot();
});
