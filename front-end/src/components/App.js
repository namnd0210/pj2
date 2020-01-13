import React from 'react';

import PieChart from './PieChart';
import Ranking from './Ranking';
import HeatChart from './HeatChart';

function App() {
  return (
    <div className="container">
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
