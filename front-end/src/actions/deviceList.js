import * as types from '../constant/actionTypes'
import axios from 'axios'

export const fetchDeviceListData = () => dispatch => {
  dispatch({
    type: types.START_FETCH_DEVICELIST_DATA,
    isLoading: true
  })
  axios({
    url: 'http://localhost:8081/device_list',
    method: 'get'
  })
    .then(res => {
      dispatch({
        type: types.STOP_FETCH_DEVICELIST_DATA,
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
