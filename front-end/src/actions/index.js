import * as types from './actionTypes'
import axios from 'axios'

export const fetchPieChartData = () => {
  return dispatch => {
    axios.get('http://localhost:8081/request/device_summary')
      .then(res => {
        dispatch({
          type: types.FETCH_PIECHART_DATA,
          data: res.data.data
        })
      }
      )
  }
}

export const fetchLineChartData = () => {
  return dispatch => {
    axios.get('http://localhost:8081/request/device_summary1')
      .then(res => {
        dispatch({
          type: types.FETCH_LINECHART_DATA,
          data: res.data.data
        })
      }
      )
  }
}