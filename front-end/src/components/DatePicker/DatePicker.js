import React, { Component } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import moment from 'moment';

import { setDate } from '../../actions';


class DatePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment(),
      endDate: moment().add(1, 'day'),
      focusedInput: null
    }
  }

  render() {
    return (
      <div>
        <DateRangePicker
          className="mb-5"
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />
        <Button color="primary" onClick={() => this.props.setDate(this.state.startDate, this.state.endDate)}>OK</Button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDate: (startDate, endDate) => dispatch(setDate(startDate, endDate))
  }
}

export default connect(null, mapDispatchToProps)(DatePicker)