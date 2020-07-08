/* ========= App Dependencies ============= */
import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import { AiFillCaretDown } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";
import getVisibleAppointments from "../../store/selectors.js";
import {
  setTextFilter,
  sortByDate,
  sortByPatientsName,
  setStartDate,
  setEndDate,
} from "../../store/filtersAction";
/* ========= Code ============= */
class SearchAppointments extends React.Component {
  state = {
    calendarFocused: null,
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({
      calendarFocused,
    }));
  };
  render() {
    return (
      <article className="appointments-article">
        <section className="accordion">
          <header className="accordion__header">
            <h2 className="accordion__heading">Search Appointments</h2>
            <BsPlusCircleFill className="plus-circle" />
          </header>
          <div className="accordion__body">
            <div className="searchblock">
              <input
                className="searchblock__input h-input-styles"
                placeholder="Search appointments"
                type="text"
                value={this.props.filters.text}
                onChange={(e) => {
                  this.props.dispatch(setTextFilter(e.target.value));
                }}
              />
              <div className="searchblock__select-wrapper">
                <select
                  className="searchblock__select-btn"
                  value={this.props.filters.sortBy}
                  onChange={(e) => {
                    if (e.target.value === "date") {
                      this.props.dispatch(sortByDate());
                    } else if (e.target.value === "patient's name") {
                      this.props.dispatch(sortByPatientsName());
                    }
                  }}
                >
                  <option value="date">Date</option>
                  <option value="patient's name">Name</option>
                </select>
                <AiFillCaretDown className="caret-down" />
              </div>
            </div>
            <div></div>
            <div className="datepicker-block">
              <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
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
  }
}
const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};
export default connect(mapStateToProps)(SearchAppointments);
