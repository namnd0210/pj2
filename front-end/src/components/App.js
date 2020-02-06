import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Analysis from './Analysis/';
import DeviceList from './DeviceList/';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <ul >
          <li>
            <Link to="/analysis">Analysis</Link>
          </li>
          <li>
            <Link to="/device_list">Device List</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/analysis">
            <Analysis />
          </Route>
          <Route path="/device_list">
            <DeviceList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
