import { combineReducers } from 'redux';

import barChartData from './barChartReducer';
import pieChartData from './pieChartReducer';
import heatChartData from './heatChartReducer';

const reducers = combineReducers({
  barChartData: barChartData,
  pieChartData: pieChartData,
  heatChartData: heatChartData
})

export default reducers