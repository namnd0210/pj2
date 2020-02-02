import React, { useState } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { setDate } from '../../actions';


export default function DatePicker() {
  const dispatch = useDispatch();
  const prevStartDate = useSelector(state => state.datePickerData.startDate)
  const prevEndDate = useSelector(state => state.datePickerData.endDate)
  const [startDate, setStartDate] = useState(moment())
  const [endDate, setEndDate] = useState(moment().add(1, 'day'))
  const [focusedInput, setFocusedInput] = useState(null)

  const onClick = () => {
    if ((prevStartDate !== startDate.format('DD-MM-YYYY') || prevEndDate !== endDate.format('DD-MM-YYYY')) &&
      startDate !== null && endDate !== null)
      dispatch(setDate(startDate.format('DD-MM-YYYY'), endDate.format('DD-MM-YYYY')))

  }

  return (
    <div>
      <DateRangePicker
        startDate={startDate} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={endDate} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={({ startDate, endDate }) => {
          setStartDate(startDate)
          setEndDate(endDate)
        }} // PropTypes.func.isRequired,
        focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
      />
      <Button
        color="primary"
        onClick={onClick}
      >OK</Button>
    </div>
  )
}
