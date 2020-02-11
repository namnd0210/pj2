import React from 'react';
import { useSelector } from 'react-redux';

import DatePicker from './DatePicker/DatePicker';
import PieChart from './PieChart/PieChart';
import BarChart from './BarChart/BarChart';
import HeatChart from './HeatChart/HeatChart';
import LineChart from './LineChart/LineChart';

export default () => {
  const { startDate, endDate } = useSelector(state => state.datePickerData);
  return (
    <div style={{ height: "1000px" }}>
      <div className="my-3">
        <DatePicker />
      </div>
      <div className="row" style={{ height: "40%" }}>
        <div className="col-md-12 col-lg-5">
          <PieChart startDate={startDate} endDate={endDate} />
        </div>
        <div className="col-md-12 col-lg-7">
          <LineChart startDate={startDate} endDate={endDate} />
        </div>
      </div>
      <div className="row" style={{ height: "40%" }}>
        <div className="col-md-12 col-lg-5">
          <BarChart startDate={startDate} endDate={endDate} />
        </div>
        <div className="col-md-12 col-lg-7">
          <HeatChart startDate={startDate} endDate={endDate} />
        </div>
      </div>
    </div>
  )
}
