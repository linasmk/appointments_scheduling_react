/* ========= App Dependencies ============= */
import React, { useState } from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import { AiFillCaretDown } from "react-icons/ai";
import { BsPlusCircleFill, BsPencilSquare } from "react-icons/bs";
import getVisibleAppointments from "../../store/selectors.js";
import {
  setTextFilter,
  sortByDate,
  sortByPatientsName,
  setStartDate,
  setEndDate,
} from "../../store/filtersAction";
/* ========= Code ============= */
const SearchAppointments = (props) => {
  const [calendarFocused, setState] = useState(null);
  const [isAccordionOpen, setAccordion] = useState(false);

  function onDatesChange({ startDate, endDate }) {
    props.dispatch(setStartDate(startDate));
    props.dispatch(setEndDate(endDate));
  }
  function onFocusChange(calendarFocused) {
    setState(() => calendarFocused);
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
              onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
              }}
            />
            <div className="searchblock__select-wrapper">
              <select
                className="searchblock__select-btn h-btn-styles"
                value={props.filters.sortBy}
                onChange={(e) => {
                  if (e.target.value === "date") {
                    props.dispatch(sortByDate());
                  } else if (e.target.value === "patient's name") {
                    props.dispatch(sortByPatientsName());
                  }
                }}
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
export default connect(mapStateToProps)(SearchAppointments);
