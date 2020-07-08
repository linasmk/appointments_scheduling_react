import appointmentData from "../data/data";

/* =================================================
=========== APPOINTMENTS REDUCER ================
================================================= */
const appointmentsReducerDefaultState = appointmentData;

export default (state = appointmentsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_APPOINTMENT":
      return [...state, action.appointment];
    case "REMOVE_APPOINTMENT":
      return state.filter((appointment) => {
        return appointment.id !== action.id;
      });
    case "EDIT_APPOINTMENT":
      return state.map((appointment) => {
        if (appointment.id === action.id) {
          return {
            ...appointment,
            ...action.updates,
          };
        } else {
          return appointment;
        }
      });
    default:
      return state;
  }
};
