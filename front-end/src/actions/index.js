import * as types from './actionTypes'
import axios from 'axios'

export const fetchPieChartData = () => {
  return dispatch => {
    dispatch({
      type: types.START_FETCH_PIECHART_DATA,
      isLoading: true
    })  
    axios.get('http://localhost:8081/request/device_summary')
      .then(res => {
        dispatch({
          type: types.FETCH_PIECHART_DATA,
          data: res.data,
          isLoading: false
        })
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch({
          type: types.STOP_FETCH_PIECHART_DATA,
          isLoading: false
        })
      });
  }
}

export const fetchBarChartData = () => {
  return dispatch => {
    dispatch({
      type: types.START_FETCH_BARCHART_DATA,
      isLoading: true
    })
    axios.get('http://localhost:8081/request/ranking')
      .then(res => {
        dispatch({
          type: types.FETCH_BARCHART_DATA,
          data: res.data,
          isLoading: false
        })
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch({
          type: types.STOP_FETCH_BARCHART_DATA,
          isLoading: false
        })
      });
  }
}