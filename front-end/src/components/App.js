import React from 'react';

import DatePicker from './DatePicker/DatePicker';
import PieChart from './PieChart/PieChart';
import Ranking from './BarChart/Ranking';
import HeatChart from './HeatChart/HeatChart';

function App() {
  return (
    <div className="container">
      <div>
        <DatePicker />
      </div>
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <PieChart />
        </div>
        <div className="col-md-12 col-lg-6">
          <Ranking />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <HeatChart />
        </div>
      </div>
    </div>
  );
}

export default App;
