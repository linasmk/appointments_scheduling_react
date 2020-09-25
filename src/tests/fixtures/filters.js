import moment from "moment";

const filters = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const altFilters = {
  text: "Bill Billy",
  sortBy: "patient's name",
  startDate: moment(0),
  endDate: moment(0).add(5, "days"),
};

export { filters, altFilters };
