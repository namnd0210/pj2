import { combineReducers } from 'redux'
import pieChartData from './pieChartDataReducer'
import loadingData from './loadingDataReducer'

const reducers = combineReducers({
  pieChartData: pieChartData,
  loadingData: loadingData
})

export default reducers