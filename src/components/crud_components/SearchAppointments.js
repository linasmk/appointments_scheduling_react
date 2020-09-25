/* ========= App Dependencies ============= */
import React, { useState } from "react";
import moment from "moment";
import { DateRangePicker } from "react-dates";
import { AiFillCaretDown } from "react-icons/ai";
import { BsPlusCircleFill, BsPencilSquare } from "react-icons/bs";
/* ========== Redux ============= */
import { connect } from "react-redux";

import {
  setTextFilter,
  sortByDate,
  sortByPatientsName,
  setStartDate,
  setEndDate,
} from "../../store/filtersAction";
/* ========= Code ============= */
export const SearchAppointments = (props) => {
  const [calendarFocused, setState] = useState(null);
  const [isAccordionOpen, setAccordion] = useState(false);

  function onDatesChange({ startDate, endDate }) {
    props.setStartDate(startDate);
    props.setEndDate(endDate);
  }
  function onFocusChange(calendarFocused) {
    setState(() => calendarFocused);
  }
  function onTextChange(e) {
    props.setTextFilter(e.target.value);
  }
  function onSortChange(e) {
    if (e.target.value === "date") {
      props.sortByDate();
    } else if (e.target.value === "patient's name") {
      props.sortByPatientsName();
    }
  }

  const toggleAccordion = () => setAccordion(!isAccordionOpen);

  return (
    <article className="appointments-article">
      <section
        className={isAccordionOpen ? "accordion accordion-open" : "accordion"}
      >
        <header className="accordion__header">
          <h2 className="accordion__heading h-heading-styles">
            Search Appointments
          </h2>
          <BsPlusCircleFill className="plus-circle" onClick={toggleAccordion} />
        </header>
        <div
          className={
            isAccordionOpen
              ? "accordion__body js-accordion-open-search"
              : "accordion__body"
          }
        >
          <div className="searchblock">
            <input
              className="searchblock__input"
              placeholder="Search appointments"
              type="text"
              value={props.filters.text}
              onChange={onTextChange}
            />
            <div className="searchblock__select-wrapper">
              <select
                className="searchblock__select-btn h-btn-styles"
                value={props.filters.sortBy}
                onChange={onSortChange}
              >
                <option value="date">Date</option>
                <option value="patient's name">Name</option>
              </select>
              <AiFillCaretDown className="caret-down" />
            </div>
          </div>

          <div className="datepicker-block">
            <DateRangePicker
              startDate={props.filters.startDate}
              endDate={props.filters.endDate}
              onDatesChange={onDatesChange}
              focusedInput={calendarFocused}
              onFocusChange={onFocusChange}
              startDateId={"dwjkhqkehwqjkeq"}
              endDateId={"cxzvcxbzbczxbz"}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
              daySize={33}
            />
          </div>
        </div>
      </section>
    </article>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};
const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByPatientsName: () => dispatch(sortByPatientsName()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchAppointments);
