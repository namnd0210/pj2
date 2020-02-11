import * as types from '../constant/actionTypes'
import axios from 'axios'
import qs from 'qs'

export const fetchHeatChartData = (startDate, endDate, data=[]) => dispatch => {
  dispatch({
    type: types.START_FETCH_HEATCHART_DATA,
    isLoading: true
  })

  axios({
    url: 'http://localhost:8081/request/device_by_hour',
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
