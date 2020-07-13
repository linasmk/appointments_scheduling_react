/* ========= App Dependencies ============= */
import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

/* ========= Code ============= */
const now = moment();
console.log(now.format("MMM Do, YYYY"));

export default class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientName: props.appointment ? props.appointment.patientName : "",
      aptNotes: props.appointment ? props.appointment.aptNotes : "",
      aptDate: props.appointment ? moment(props.appointment.aptDate) : moment(),
      createdAt: props.appointment
        ? moment(props.appointment.createdAt)
        : moment(),
      calenderFocused: false,
      error: "",
    };
  }
  onPatientNameChange = (e) => {
    const patientName = e.target.value;
    this.setState(() => ({
      patientName,
    }));
  };
  onNoteChange = (e) => {
    const aptNotes = e.target.value;
    this.setState(() => ({
      aptNotes,
    }));
  };
  onDateChange = (aptDate) => {
    if (aptDate) {
      this.setState(() => ({ aptDate }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.patientName) {
      this.setState(() => ({
        error: "Patient's name field should not stay empty!",
      }));
    } else {
      this.setState(() => ({
        error: "",
      }));
      this.props.onSubmit({
        patientName: this.state.patientName,
        aptDate: this.state.aptDate.valueOf(),
        createdAt: this.state.createdAt.valueOf(),
        aptNotes: this.state.aptNotes,
      });
      this.setState(() => ({
        patientName: "",
        aptNotes: "",
        aptDate: moment(),
      }));
    }
  };
  render() {
    return (
      <form className="appointment-form" onSubmit={this.onSubmit}>
        {this.state.error && (
          <p className="appointment__form--warning">{this.state.error}</p>
        )}
        <div className="appointment-form__input-block">
          <input
            className="appointment-form__input h-input-styles"
            type="text"
            autoFocus
            placeholder="Add patient's name"
            value={this.state.patientName}
            onChange={this.onPatientNameChange}
          />
          <SingleDatePicker
            date={this.state.aptDate}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            daySize={33}
          />
        </div>
        <div className="appointment-form__textarea-block">
          <textarea
            rows="4"
            className="appointment-form__textarea h-input-styles"
            type="text"
            placeholder="Add notes (optional)"
            value={this.state.aptNotes}
            onChange={this.onNoteChange}
          />
        </div>
        <div className="appointment-form__btn-block">
          <button className="appointment-form__btn h-btn-styles">
            Add Appointment
          </button>
        </div>
      </form>
    );
  }
}
