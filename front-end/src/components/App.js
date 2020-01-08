import React from 'react';

import PieChart from './PieChart';
import Ranking from './Ranking';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <h2>Summary Device</h2>
          <PieChart />
        </div>
        <div className="col-sm-6">
          <h2>Ranking</h2>
          <Ranking />
        </div>
      </div>
    </div>
  );
}

export default App;
