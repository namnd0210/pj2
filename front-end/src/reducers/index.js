import { combineReducers } from 'redux'
import pieChartData from './pieChartDataReducer'

const reducers = combineReducers({
  pieChartData: pieChartData
})

export default reducers