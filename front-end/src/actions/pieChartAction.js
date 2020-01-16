import * as types from './actionTypes'
import axios from 'axios'

export const fetchPieChartData = (startDate, endDate) => {
  return dispatch => {
    dispatch({
      type: types.START_FETCH_PIECHART_DATA,
      isLoading: true
    })  
    axios.get(`http://localhost:8081/request/device_summary?from_date=${startDate}&to_date=${endDate}`)
      .then(res => {
        dispatch({
          type: types.STOP_FETCH_PIECHART_DATA,
          data: res.data,
          isLoading: false
        })
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        
      });
  }
}