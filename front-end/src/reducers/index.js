import { combineReducers } from 'redux';

import barChartData from './barChart';
import pieChartData from './pieChart';
import heatChartData from './heatChart';
import lineChartData from './lineChart';
import datePickerData from './datePicker';
import deviceList from './deviceList';

const reducers = combineReducers({
  barChartData,
  pieChartData,
  heatChartData,
  lineChartData,
  datePickerData,
  deviceList,
})

export default reducers