import { combineReducers } from 'redux';

import barChartData from './barChartReducer';
import pieChartData from './pieChartReducer';

const reducers = combineReducers({
  barChartData: barChartData,
  pieChartData: pieChartData
})

export default reducers