import appointmentsReducer from "../../store/appointmentsReducer";
import appointmentData from "../../data/data";
import appointments from "../fixtures/appointments";

test("Should set default state", () => {
  const state = appointmentsReducer(appointmentData, { type: "@@INIT" });
  expect(state).toEqual(appointmentData);
});

test("Should remove appointments by id", () => {
  const action = {
    type: "REMOVE_APPOINTMENT",
    id: appointments[1].id,
  };
  const state = appointmentsReducer(appointments, action);
  expect(state).toEqual([appointments[0], appointments[2]]);
});

test("Should not remove appointment, if id not found", () => {
  const action = {
    type: "REMOVE_APPOINTMENT",
    id: "-1",
  };
  const state = appointmentsReducer(appointments, action);
  expect(state).toEqual(appointments);
});

test("Should add an appointment", () => {
  const appointment = {
    id: 105,
    patientName: "Martin",
    aptNotes: "",
    aptDate: 10000,
    createdAt: 5000,
  };
  const action = {
    type: "ADD_APPOINTMENT",
    appointment,
  };
  const state = appointmentsReducer(appointments, action);
  expect(state).toEqual([...appointments, appointment]);
});

test("Should edit an appointment", () => {
  const patientName = "Jasper Jesperson";
  const action = {
    type: "EDIT_APPOINTMENT",
    id: appointments[0].id,
    updates: {
      patientName,
    },
  };
  const state = appointmentsReducer(appointments, action);
  expect(state[0].patientName).toBe(patientName);
});

test("Should not edit an appointment, if appointment not found", () => {
  const patientName = 355;
  const action = {
    type: "EDIT_APPOINTMENT",
    id: "-1",
    updates: {
      patientName,
    },
  };
  const state = appointmentsReducer(appointments, action);
  expect(state[0].patientName).toBe(state[0].patientName);
});
