import * as types from './actionTypes'
import axios from 'axios'

export const fetchPieChartData = () => {
  return dispatch => {
    axios.get('http://localhost:8081/request/device_summary')
      .then(res => {
        dispatch({
          type: types.FETCH_PIECHART_DATA,
          data: res.data
        })
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {

      });
  }
}