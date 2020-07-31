import {
  addAppointment,
  removeAppointment,
  editAppointment,
} from "../../store/appointmentsAction";

test("Should set up remove appointment action object", () => {
  const action = removeAppointment({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_APPOINTMENT",
    id: "123abc",
  });
});

test("Should set up edit appointment action object", () => {
  const action = editAppointment("123abc", { aptNotes: "Notes" });
  expect(action).toEqual({
    type: "EDIT_APPOINTMENT",
    id: "123abc",
    updates: {
      aptNotes: "Notes",
    },
  });
});

test("Should set up add appointment action object with provided values", () => {
  const appointmentData = {
    patientName: "Patient Name",
    aptNotes: "Appointment notes",
    aptDate: 0,
    createdAt: 1000,
  };
  const action = addAppointment(appointmentData);
  expect(action).toEqual({
    type: "ADD_APPOINTMENT",
    appointment: {
      ...appointmentData,
      id: expect.any(String),
    },
  });
});

test("Should set up add appointment action object without provided values", () => {
  const action = addAppointment();
  expect(action).toEqual({
    type: "ADD_APPOINTMENT",
    appointment: {
      id: expect.any(String),
      patientName: "",
      aptNotes: "",
      aptDate: 0,
      createdAt: 0,
    },
  });
});
