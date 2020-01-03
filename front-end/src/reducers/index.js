import { combineReducers } from 'redux'
import pieChartData from './pieChartDataReducer'
import lineChartData from './lineChartDataReducer'

const reducers = combineReducers({
  pieChartData: pieChartData,
  lineChartData: lineChartData
})

export default reducers