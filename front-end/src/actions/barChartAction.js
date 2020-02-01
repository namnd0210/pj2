import * as types from './actionTypes'
import axios from 'axios'

export const fetchBarChartData = (startDate, endDate) => dispatch => {
  dispatch({
    type: types.START_FETCH_BARCHART_DATA,
    isLoading: true
  })
  axios.get(`http://localhost:8081/request/ranking?from_date=${startDate}&to_date=${endDate}`)
    .then(res => {
      dispatch({
        type: types.STOP_FETCH_BARCHART_DATA,
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
