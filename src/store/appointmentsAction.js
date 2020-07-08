/* ========= App Dependencies ============= */
import { v4 as uuidv4 } from "uuid";
/* =================================================
=========== Action Creators: Appointments ================
================================================= */

// ADD_APPOINTMENT
export const addAppointment = ({
  patientName = "",
  aptNotes = "",
  aptDate = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_APPOINTMENT",
  appointment: {
    id: uuidv4(),
    patientName: patientName,
    aptNotes: aptNotes,
    aptDate: aptDate,
    createdAt: createdAt,
  },
});
// REMOVE_APPOINTMENT
export const removeAppointment = ({ id } = {}) => ({
  type: "REMOVE_APPOINTMENT",
  id,
});
// EDIT_APPOINTMENT
export const editAppointment = (id, updates) => ({
  type: "EDIT_APPOINTMENT",
  id,
  updates,
});
