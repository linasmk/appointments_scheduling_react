/* ========= App Dependencies ============= */
import React, { useState } from "react";
import { connect } from "react-redux";
import {
  AiOutlineCloseCircle,
  AiFillEdit,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import moment from "moment";

/* ========= Redux ============= */
import {
  editAppointment,
  removeAppointment,
} from "../../store/appointmentsAction";
/* ========= Code ============= */
class AppointmentsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.appointment ? props.appointment.id : "",
      patientName: props.appointment ? props.appointment.patientName : "",
      aptNotes: props.appointment ? props.appointment.aptNotes : "",
      aptDate: props.appointment ? moment(props.appointment.aptDate) : moment(),
      createdAt: props.appointment
        ? moment(props.appointment.createdAt)
        : moment(),
      isContentInEditMode: false,
    };
  }
  toggleEditMode = () => {
    this.setState((prevState) => ({
      isContentInEditMode: !prevState.isContentInEditMode,
    }));
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
  editAppointment = (e) => {
    (appointment) => {
      this.props.dispatch(editAppointment(this.state.id, appointment));
    };
    this.toggleEditMode();
  };
  render() {
    return (
      <section key={this.state.id} className="appointment-item">
        <AiOutlineCloseCircle
          className="appointment-item__close-circle h-icon-styles"
          onClick={(e) => {
            console.log(this.state.patientName);
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
        <p className="appointment-item__date">
          Appointment is schedulled for:
          <span
            contentEditable={this.state.isContentInEditMode}
            suppressContentEditableWarning
          >
            {/*this.state.aptDate*/}
          </span>
        </p>
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
          Created at: <span>{/*this.state.createdAt*/}</span>
        </p>
      </section>
    );
  }
}
// const AppointmentsItem = ({
//   id,
//   patientName,
//   aptNotes,
//   aptDate,
//   createdAt,
//   updates,
//   dispatch,
// }) => {
//   const [isContentInEditMode, setEditMode] = useState(false);

//   const toggleEditMode = () => setEditMode(!isContentInEditMode);
//   return (
//     <section key={id} className="appointment-item">
//       <AiOutlineCloseCircle
//         className="appointment-item__close-circle h-icon-styles"
//         onClick={() => {
//           dispatch(removeAppointment({ id }));
//         }}
//       />
//       {isContentInEditMode ? (
//         <AiOutlineCheckCircle
//           className="appointment-item__check-circle h-icon-styles"
//           onClick={toggleEditMode}
//         />
//       ) : (
//         <AiFillEdit
//           className="appointment-item__fill-edit h-icon-styles"
//           onClick={toggleEditMode}
//         />
//       )}

//       <h3 className="appointment-item__name">
//         Patient's name:{" "}
//         <span
//           contentEditable={isContentInEditMode}
//           suppressContentEditableWarning
//         >
//           {patientName}
//         </span>
//       </h3>
//       <p className="appointment-item__date">
//         Appointment is schedulled for:{" "}
//         <span
//           contentEditable={isContentInEditMode}
//           suppressContentEditableWarning
//         >
//           {aptDate}
//         </span>
//       </p>
//       <h4 className="appointment-item__notes-heading">Notes</h4>
//       <p
//         className="appointment-item__notes-p"
//         contentEditable={isContentInEditMode}
//         suppressContentEditableWarning
//       >
//         {aptNotes}
//       </p>
//       <p className="appointment-item__created-at">
//         Created at: <span>{createdAt}</span>
//       </p>
//     </section>
//   );
// };
const mapStateToProps = (state, props) => {
  return {
    appointment: state.appointments.find(
      (appointment) => appointment.id === props.id
    ),
  };
};

export default connect(mapStateToProps)(AppointmentsItem);
