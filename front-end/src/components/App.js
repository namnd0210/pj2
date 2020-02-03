import React from 'react';
import { useSelector } from 'react-redux';

import DatePicker from './DatePicker/DatePicker';
import PieChart from './PieChart/PieChart';
import BarChart from './BarChart/BarChart';
import HeatChart from './HeatChart/HeatChart';

function App() {
  const { startDate, endDate } = useSelector(state => state.datePickerData);
  return (
    <div className="container">
      <div className="my-3">
        <DatePicker />
      </div>
      <div className="row" style={{ height: "450px" }}>
        <div className="col-md-12 col-lg-6">
          <PieChart startDate={startDate} endDate={endDate} />
        </div>
        <div className="col-md-12 col-lg-6">
          <BarChart startDate={startDate} endDate={endDate} />
        </div>
      </div>
      <div className="row" style={{ height: "450px" }}>
        <div className="col-12">
          <HeatChart startDate={startDate} endDate={endDate} />
        </div>
      </div>
    </div>
  );
}

export default App;
