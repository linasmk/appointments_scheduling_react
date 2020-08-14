/* ========== Dependencies ============ */
import React from "react";
/* ========== Redux ============= */
import { connect } from "react-redux";
import getVisibleAppointments from "../../store/selectors";
/* =========== Components ========== */
import AppointmentsItem from "./AppointmentsItem";
/* =========== Code ============= */

export const ListAppointments = (props) => (
  <article className="appointments-article">
    <div className="appointments-article__header">
      <h2 className="appointments-article__heading h-heading-styles">
        Appointments List
      </h2>
    </div>
    {props.appointments.length === 0 ? (
      <h3 className="appointments-article__no-appointments">
        You currently have no appointments for a specified period or search
        name! Add an appointment or choose another period or name.
      </h3>
    ) : (
      props.appointments.map((appointment) => {
        return <AppointmentsItem key={appointment.id} {...appointment} />;
      })
    )}
  </article>
);

const mapStateToProps = (state) => {
  return {
    appointments: getVisibleAppointments(state.appointments, state.filters),
  };
};

export default connect(mapStateToProps)(ListAppointments);
