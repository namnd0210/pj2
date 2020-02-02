import * as types from './actionTypes';
import axios from 'axios';
import qs from 'qs';

export const fetchPieChartData = (startDate, endDate, data = []) => dispatch => {
  dispatch({
    type: types.START_FETCH_PIECHART_DATA,
    isLoading: true
  })
  axios({
    url: 'http://localhost:8081/request/device_summary',
    method: 'get',
    params: {
      data: data,
      from_date: startDate,
      to_date: endDate
    },
    paramsSerializer: params => {
      return qs.stringify(params, { arrayFormat: 'repeat' })
    }
  })
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
