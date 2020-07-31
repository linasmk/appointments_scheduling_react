import moment from "moment";
export default [
  {
    id: "1",
    patientName: "Bill Billy",
    aptNotes: "",
    aptDate: 0,
  },
  {
    id: "2",
    patientName: "Jim Jimy",
    aptNotes: "",
    aptDate: moment(0).add(4, "days").valueOf(),
  },
  {
    id: "3",
    patientName: "Jack Jacky",
    aptNotes: "",
    aptDate: moment(0).subtract(4, "days").valueOf(),
  },
];
