import * as types from './actionTypes'
import { fetchHeatChartData, fetchPieChartData, fetchBarChartData } from './index'

export const setDate = (startDate, endDate) => dispatch => {
  const inputStartDate = new Date(startDate._d.toString()).toJSON()
  const inputEndDate = new Date(endDate._d.toString()).toJSON()

  dispatch(fetchHeatChartData(inputStartDate, inputEndDate))
  dispatch(fetchPieChartData(inputStartDate, inputEndDate))
  dispatch(fetchBarChartData(inputStartDate, inputEndDate))

  dispatch({
    type: types.SET_DATE,
    startDate: inputStartDate,
    endDate: inputEndDate
  })
}