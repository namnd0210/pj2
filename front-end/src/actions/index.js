import * as types from './actionTypes'
import axios from 'axios'

export const fetchPieChartData = () => {
  return dispatch => {
    dispatch({
      type: types.START_FETCH_PIECHART_DATA,
      complete: false
    })
    axios.get('http://localhost:8080/request/device_summary')
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
        dispatch({
          type: types.STOP_FETCH_PIECHART_DATA,
          complete: true
        })
      });
  }
}

export const fetchBarChartData = () => {
  return dispatch => {
    dispatch({
      type: types.START_FETCH_BARCHART_DATA,
      complete: false
    })
    axios.get('http://localhost:8080/request/ranking')
      .then(res => {
        console.log("axios",res.data)
        dispatch({
          type: types.FETCH_BARCHART_DATA,
          data: res.data
        })
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch({
          type: types.STOP_FETCH_BARCHART_DATA,
          complete: true
        })
      });
  }
}