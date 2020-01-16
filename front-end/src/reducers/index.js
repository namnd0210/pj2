import { combineReducers } from 'redux';

import barChartData from './barChartReducer';
import pieChartData from './pieChartReducer';
import heatChartData from './heatChartReducer';
import datePickerData from './datePickerReducer';

const reducers = combineReducers({
  barChartData: barChartData,
  pieChartData: pieChartData,
  heatChartData: heatChartData,
  datePickerData: datePickerData
})

export default reducers