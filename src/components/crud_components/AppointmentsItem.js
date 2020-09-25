/* ========= App Dependencies ============= */
import React from "react";
import { connect } from "react-redux";
import {
  AiOutlineCloseCircle,
  AiFillEdit,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

/* ========= Redux ============= */
import {
  editAppointment,
  removeAppointment,
} from "../../store/appointmentsAction";
/* ========= Code ============= */
export class AppointmentsItem extends React.Component {
  state = {
    id: this.props.appointment ? this.props.appointment.id : "",
    patientName: this.props.appointment
      ? this.props.appointment.patientName
      : "",
    aptNotes: this.props.appointment ? this.props.appointment.aptNotes : "",
    aptDate: this.props.appointment
      ? moment(this.props.appointment.aptDate.valueOf())
      : moment(),
    createdAt: this.props.appointment
      ? moment(this.props.appointment.createdAt)
      : moment(),
    isContentInEditMode: false,
    calenderFocused: false,
  };

  toggleEditMode = () => {
    this.setState((prevState) => ({
      isContentInEditMode: !prevState.isContentInEditMode,
    }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderFocused: focused }));
  };
  onPatientNameChange = (e) => {
    const patientName = e.target.textContent;
    this.setState(() => ({
      patientName,
    }));
  };
  onAppointmentNotesChange = (e) => {
    const aptNotes = e.target.textContent;
    this.setState(() => ({
      aptNotes,
    }));
  };
  onDateChange = (aptDate) => {
    if (aptDate) {
      this.setState(() => ({ aptDate: aptDate }));
    }
  };
  editAppointment = () => {
    this.setState((appointment) => {
      this.props.dispatch(editAppointment(this.state.id, appointment));
    });
    this.toggleEditMode();
  };

  render() {
    return (
      <section key={this.state.id} className="appointment-item">
        <AiOutlineCloseCircle
          className="appointment-item__close-circle h-icon-styles"
          onClick={(e) => {
            this.props.dispatch(removeAppointment({ id: this.state.id }));
          }}
        />
        {this.state.isContentInEditMode ? (
          <AiOutlineCheckCircle
            className="appointment-item__check-circle h-icon-styles"
            onClick={this.editAppointment}
          />
        ) : (
          <AiFillEdit
            className="appointment-item__fill-edit h-icon-styles"
            onClick={this.toggleEditMode}
          />
        )}

        <h3 className="appointment-item__name">
          Patient's name:
          <span
            contentEditable={this.state.isContentInEditMode}
            suppressContentEditableWarning
            onBlur={this.onPatientNameChange}
          >
            {" "}
            {this.state.patientName}
          </span>
        </h3>
        <div className="appointment-item__date">
          <p>Appointment is schedulled for: &nbsp;</p>
          {this.state.isContentInEditMode ? (
            <SingleDatePicker
              noBorder={true}
              date={this.state.aptDate}
              onDateChange={this.onDateChange}
              focused={this.state.calenderFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              daySize={33}
            />
          ) : (
            <p>
              {moment(this.state.aptDate.valueOf()).format(
                "MMMM Do, YYYY. [At:] LT"
              )}
            </p>
          )}
        </div>
        <h4 className="appointment-item__notes-heading">Notes</h4>
        <p
          className="appointment-item__notes-p"
          contentEditable={this.state.isContentInEditMode}
          suppressContentEditableWarning
          onBlur={this.onAppointmentNotesChange}
        >
          {this.state.aptNotes}
        </p>
        <p className="appointment-item__created-at">
          Created at:{" "}
          <span>
            {moment(this.props.createdAt.valueOf()).format(
              "MMMM Do, YYYY. [At:] LT"
            )}
          </span>
        </p>
      </section>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    appointment: state.appointments.find(
      (appointment) => appointment.id === props.id
    ),
  };
};

export default connect(mapStateToProps)(AppointmentsItem);
