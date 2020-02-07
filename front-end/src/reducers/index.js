import { combineReducers } from 'redux';

import barChartData from './barChartReducer';
import pieChartData from './pieChartReducer';
import heatChartData from './heatChartReducer';
import lineChartData from './lineChartReducer';
import datePickerData from './datePickerReducer';
import deviceList from './deviceList';

const reducers = combineReducers({
  barChartData: barChartData,
  pieChartData: pieChartData,
  heatChartData: heatChartData,
  lineChartData: lineChartData,
  datePickerData: datePickerData,
  deviceList: deviceList
})

export default reducers