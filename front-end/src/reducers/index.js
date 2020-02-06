import { combineReducers } from 'redux';

import barChartData from './barChartReducer';
import pieChartData from './pieChartReducer';
import heatChartData from './heatChartReducer';
import lineChartData from './lineChartReducer';
import datePickerData from './datePickerReducer';

const reducers = combineReducers({
  barChartData: barChartData,
  pieChartData: pieChartData,
  heatChartData: heatChartData,
  lineChartData: lineChartData,
  datePickerData: datePickerData,
})

export default reducers