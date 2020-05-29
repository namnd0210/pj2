import { combineReducers } from 'redux';

import barChartData from './barChartReducer';
import pieChartData from './pieChartReducer';
import heatChartData from './heatChartReducer';
import lineChartData from './lineChartReducer';
import datePickerData from './datePickerReducer';
import deviceList from './deviceList';
import report from './report';

const reducers = combineReducers({
  barChartData: barChartData,
  pieChartData: pieChartData,
  heatChartData: heatChartData,
  lineChartData: lineChartData,
  datePickerData: datePickerData,
  deviceList: deviceList,
  report: report
})

export default reducers