/* ========= Dependencies ============= */
import React, { useState } from "react";
import { connect } from "react-redux";
import { BsPlusCircleFill, BsFillDashCircleFill } from "react-icons/bs";
import { addAppointment } from "../../store/appointmentsAction";

/* ========= Components ============= */
import AppointmentForm from "./AppointmentForm";

/* ========= Code ============= */

export const AddAppointment = (props) => {
  const [isAccordionOpen, setAccordion] = useState(true);
  const toggleAccordion = () => setAccordion(!isAccordionOpen);
  return (
    <article className="appointments-article">
      <section
        className={isAccordionOpen ? "accordion accordion-open" : "accordion"}
      >
        <header className="accordion__header">
          <h2 className="accordion__heading h-heading-styles">
            Add Appointment
          </h2>

          {isAccordionOpen ? 
            <BsFillDashCircleFill className="circle-icon" onClick={toggleAccordion} />
            : 
            <BsPlusCircleFill className="circle-icon" onClick={toggleAccordion} /> 
           }
        </header>
        <div
          className={
            isAccordionOpen
              ? "accordion__body js-accordion-open-add"
              : "accordion__body"
          }
        >
          <AppointmentForm
            // onSubmit={(appointment) => {
            //   props.dispatch(addAppointment(appointment));
            // }}
            onSubmit={props.addAppointment}
          />
        </div>
      </section>
    </article>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addAppointment: (appointment) => dispatch(addAppointment(appointment)),
});
export default connect(undefined, mapDispatchToProps)(AddAppointment);
