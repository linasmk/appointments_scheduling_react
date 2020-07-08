/* ========= Dependencies ============= */

import moment from "moment";
/* =================================================
=========== Get Visible Appointments ================
================================================= */
export default (appointments, { text, sortBy, startDate, endDate }) => {
  return appointments
    .filter((appointment) => {
      const aptDateMoment = moment(appointment.aptDate);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(aptDateMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(aptDateMoment, "day")
        : true;

      const textMatch = appointment.patientName
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "patient's name") {
        return a.patientName < b.patientName ? -1 : 1;
      }
    });
};
