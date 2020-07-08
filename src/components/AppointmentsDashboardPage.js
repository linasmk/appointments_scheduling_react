/* ========= App Dependencies ============= */
import React from "react";

/* ========= Components ============= */
import AddAppointment from "./crud_components/AddAppointment";
import SearchAppointments from "./crud_components/SearchAppointments";
import ListAppointments from "./crud_components/ListAppointments";
/* ========= Code ============= */

const AppointmentsDashboardPage = () => (
  <div className="main">
    <article className="content-wrapper">
      <AddAppointment />
      <SearchAppointments />
      <ListAppointments />
    </article>
  </div>
);
export default AppointmentsDashboardPage;
