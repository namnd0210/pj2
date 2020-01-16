import React from 'react';

import DatePicker from './DatePicker/DatePicker';
import PieChart from './PieChart/PieChart';
import Ranking from './barChart/Ranking';
import HeatChart from './HeatChart/HeatChart';

function App() {
  return (
    <div className="container">
      <div>
        <DatePicker />
      </div>
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <h2>Summary Device</h2>
          <PieChart />
        </div>
        <div className="col-md-12 col-lg-6">
          <h2>Ranking</h2>
          <Ranking />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2>Device By Hour</h2>
          <HeatChart />
        </div>
      </div>
    </div>
  );
}

export default App;
