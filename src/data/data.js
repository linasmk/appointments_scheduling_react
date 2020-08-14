/* ========= App Dependencies ============= */
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const appointmentData = [
  {
    id: uuidv4(),
    patientName: "Richard Dapkins",
    patientAge: "38",
    aptNotes:
      "Aliqua culpa anim voluptate id consequat reprehenderit. Ullamco veniam consequat irure aliquip irure anim cillum mollit proident ad. Adipisicing aliquip sint Lorem cillum consectetur. Sunt dolore nostrud esse cillum mollit exercitation commodo voluptate. Consequat duis laborum non nisi minim sunt Lorem.",
    aptDate: "2020-08-28 13:30",
    createdAt: "2020-01-01",
  },
  {
    id: uuidv4(),
    patientName: "Bob Speldner",
    patientAge: "59",
    aptNotes:
      "Enim ut enim enim est do ad qui consectetur nostrud eiusmod aute nostrud tempor aliqua.",
    aptDate: "2021-11-01 10:15",
    createdAt: "2020-02-01",
  },
  {
    id: uuidv4(),
    patientName: "Sam Mullenwang",
    patientAge: "47",
    aptNotes: "Non non Lorem excepteur qui reprehenderit.",
    aptDate: "2020-08-05 14:45",
    createdAt: "2020-03-01",
  },
  {
    id: uuidv4(),
    patientName: "Nadia Stephenson",
    patientAge: "60",
    aptNotes:
      "Aute ad occaecat consectetur exercitation ea. Cillum occaecat commodo magna ex do cupidatat aliquip consequat. Lorem non elit mollit esse duis sint dolore eu excepteur. Laborum veniam ut occaecat ullamco id laboris enim laboris officia reprehenderit et. Enim tempor nisi et incididunt in consequat nisi aliquip aliqua fugiat dolore ex. Fugiat adipisicing est culpa fugiat minim. Culpa enim velit fugiat officia commodo est magna commodo in tempor aliquip do velit.",
    aptDate: "08/20/2020",
    createdAt: "2020-04-01",
  },
  {
    id: uuidv4(),
    patientName: "Salma Pichnick",
    patientAge: "57",
    aptNotes:
      "Reprehenderit Lorem culpa dolore ullamco Lorem culpa. Esse eiusmod enim pariatur quis mollit amet Lorem culpa ad sint veniam cillum nisi ad. Cillum minim officia adipisicing sit mollit non cillum veniam veniam magna quis. Excepteur aliquip eiusmod consectetur deserunt occaecat tempor occaecat velit reprehenderit. Adipisicing amet ad est proident incididunt ullamco excepteur officia irure Lorem irure eu. Enim dolor aute minim dolor labore elit aliquip. Aute sint exercitation esse aute cillum excepteur esse irure ex sunt tempor ipsum deserunt.",
    aptDate: "2021-03-15 9:00",
    createdAt: "2020-05-01",
  },
  {
    id: uuidv4(),
    patientName: "Zack Tarvis",
    patientAge: "63",
    aptNotes:
      "Sit sit eiusmod mollit ex consequat sit enim. Ad in cupidatat velit veniam tempor velit fugiat. Laboris ea Lorem elit ea fugiat deserunt. Magna excepteur laborum sint amet minim.",
    aptDate: "2021-01-14 13:15",
    createdAt: "2020-06-01",
  },
  {
    id: uuidv4(),
    patientName: "Odeta Weis",
    patientAge: "51",
    aptNotes:
      "Pariatur cillum enim dolore do aliqua voluptate reprehenderit adipisicing.",
    aptDate: "2020-12-27 10:00",
    createdAt: "2020-08-01",
  },
  {
    id: uuidv4(),
    patientName: "Melanie Jensen",
    patientAge: "27",
    aptNotes:
      "Occaecat adipisicing ut laboris Lorem adipisicing excepteur mollit non veniam eu culpa laborum.",
    aptDate: "2020-11-03 11:45",
    createdAt: "2020-01-01",
  },
  {
    id: uuidv4(),
    patientName: "Frederik Kirsch",
    patientAge: "55",
    aptNotes:
      "Voluptate sit reprehenderit eiusmod aliqua ea anim aliqua cupidatat tempor.",
    aptDate: "2020-10-15 14:30",
    createdAt: "2020-01-01",
  },
  {
    id: uuidv4(),
    patientName: "Cyntia McGregor",
    patientAge: "32",
    aptNotes:
      "Minim esse velit ut ullamco Lorem occaecat non exercitation est ullamco. Ullamco anim esse amet non occaecat dolor do qui. Enim quis enim excepteur proident aliqua anim aliquip do ex commodo. Enim commodo pariatur magna fugiat sint exercitation Lorem. Anim laboris eiusmod sunt cillum.",
    aptDate: "2020-09-19 16:00",
    createdAt: "2020-01-01",
  },
  {
    id: uuidv4(),
    patientName: "Wesley Davis",
    patientAge: "43",
    aptNotes:
      "Commodo adipisicing adipisicing commodo excepteur consectetur fugiat. Laborum cillum anim ea ullamco culpa occaecat sunt labore laboris et anim deserunt in. Do occaecat cupidatat sint elit.",
    aptDate: "2020-08-21 8:30",
    createdAt: "2020-01-01",
  },
  {
    id: uuidv4(),
    patientName: "Peter Berkam",
    patientAge: "41",
    aptNotes:
      "Quis consectetur quis culpa fugiat irure eiusmod nostrud laborum magna laboris. Tempor excepteur minim dolore incididunt. Sunt pariatur consequat enim magna cupidatat fugiat laborum cillum ad anim irure. Laborum sunt culpa do pariatur id qui elit occaecat dolore. Ea do est commodo velit ea cupidatat ad. Magna officia commodo nostrud dolor. Amet cupidatat occaecat magna nisi mollit commodo.",
    aptDate: "2020-08-10 10:15",
    createdAt: "2020-01-01",
  },
  {
    id: uuidv4(),
    patientName: "Stephanie Jorgensen",
    patientAge: "29",
    aptNotes:
      "Cillum pariatur elit aliqua fugiat anim minim nisi fugiat proident Lorem amet. Elit ipsum ullamco enim magna anim et fugiat est. Elit anim sint laborum do irure sint cupidatat Lorem exercitation amet mollit. Duis velit id enim occaecat cupidatat qui nisi minim pariatur eiusmod nulla. Do non minim irure eiusmod occaecat cillum anim eu voluptate est sit nisi. Proident consectetur ea dolore non magna cillum ad occaecat aliquip laboris.",
    aptDate: "08/30/2020",
    createdAt: "2020-01-01",
  },
  {
    id: uuidv4(),
    patientName: "Lydia Brun",
    patientAge: "33",
    aptNotes:
      "Nostrud et id culpa nulla pariatur tempor anim culpa consequat laboris qui reprehenderit consectetur.",
    aptDate: "2020-08-19 14:30",
    createdAt: "2020-01-01",
  },
  {
    id: uuidv4(),
    patientName: "Benedikt Abramovic",
    patientAge: "74",
    aptNotes: "Aliquip pariatur esse ut reprehenderit aute laboris.",
    aptDate: "2020-08-12 15:45",
    createdAt: "2020-01-01",
  },
  {
    id: uuidv4(),
    patientName: "Kate Ranzver",
    patientAge: "20",
    aptNotes: "Est sunt elit officia proident amet ullamco aute.",
    aptDate: "2020-09-06 9:00",
    createdAt: "2020-01-01",
  },
  {
    id: uuidv4(),
    patientName: "Felix Ostrum",
    patientAge: "24",
    aptNotes: "Eu exercitation aute sunt nulla mollit nulla.",
    aptDate: "10/01/2020",
    createdAt: "2020/01/01",
  },
  {
    id: uuidv4(),
    patientName: "Samuel Lindgren",
    patientAge: "41",
    aptNotes:
      "Laborum ex laboris consequat voluptate. Nisi reprehenderit et qui consequat cupidatat pariatur enim. Commodo dolore ex aliqua cillum cupidatat irure aliquip elit. Ullamco Lorem nulla exercitation culpa aliquip mollit sint tempor et magna do laborum laboris irure. Id reprehenderit laboris qui labore incididunt veniam esse cupidatat in excepteur id commodo. Culpa officia minim veniam anim culpa dolor.",
    aptDate: "2020-12-1 10:00",
    createdAt: "2020-01-01",
  },
  {
    id: uuidv4(),
    patientName: "Cosmo Raducanu",
    patientAge: "36",
    aptNotes:
      "Sint deserunt nisi deserunt fugiat et dolore mollit sunt ex. Adipisicing deserunt sit commodo enim consectetur magna ipsum commodo consectetur excepteur amet nostrud ut. Veniam Lorem Lorem incididunt esse in magna dolore occaecat enim laborum commodo cillum officia minim. Cupidatat excepteur ipsum nostrud eu. Dolor occaecat incididunt cillum nulla pariatur aliquip in ex et voluptate officia ex est ea. Officia proident et aliqua consequat.",
    aptDate: "2020-11-1 11:30",
    createdAt: "2020-01-01",
  },
  {
    id: uuidv4(),
    patientName: "Kasper Jensen",
    patientAge: "80",
    aptNotes:
      "Fugiat sit pariatur labore cillum anim reprehenderit deserunt dolore tempor sunt.",
    aptDate: "2020-12-1 15:15",
    createdAt: "2020-01-01",
  },
  {
    id: uuidv4(),
    patientName: "Charlie Padington",
    patientAge: "45",
    aptNotes: "Sunt occaecat cupidatat quis adipisicing anim veniam ullamco.",
    aptDate: "2020-12-2 8:45",
    createdAt: "2020-01-01",
  },
  {
    id: uuidv4(),
    patientName: "Teodora Almanescu",
    patientAge: "32",
    aptNotes: "Do minim et occaecat mollit.",
    aptDate: "2020-10-2 13:30",
    createdAt: "2020-01-01",
  },
  {
    id: uuidv4(),
    patientName: "Stine Lauridsen",
    patientAge: "22",
    aptNotes: "Sint veniam mollit occaecat nostrud reprehenderit.",
    aptDate: "11/02/2020",
    createdAt: "2020-01-01",
  },
  {
    id: uuidv4(),
    patientName: "Sigulde Morbjerg",
    patientAge: "39",
    aptNotes: "Fugiat ipsum laborum ut ea nisi sint velit.",
    aptDate: "2020-11-7 15:00",
    createdAt: "2020-01-01",
  },
  {
    id: uuidv4(),
    patientName: "Natalie Neradova",
    patientAge: "50",
    aptNotes: "Nostrud consectetur velit sint laboris est sunt pariatur.",
    aptDate: "2020-12-17 9:00",
    createdAt: "2020-01-01",
  },
];

export default appointmentData;
