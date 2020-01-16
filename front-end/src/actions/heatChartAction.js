import * as types from './actionTypes'
import axios from 'axios'

export const fetchHeatChartData = (startDate, endDate) => {
  return dispatch => {
    dispatch({
      type: types.START_FETCH_HEATCHART_DATA,
      isLoading: true
    })
    axios.get(`http://localhost:8081/request/device_by_hour?from_date=${startDate}&to_date=${endDate}`)
      .then(res => {
        dispatch({
          type: types.STOP_FETCH_HEATCHART_DATA,
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