import * as types from '../actions/actionTypes';
const initialState = {
  isLoading: true,
  data: []
};

export default function (state = initialState, action) {
  switch(action.type) {
    case types.START_FETCH_DEVICELIST_DATA: 
      return {
        ...state,
        isLoading: action.isLoading
      }
    case types.STOP_FETCH_DEVICELIST_DATA:
      return {
        isLoading: action.isLoading,
        data: action.data
      }
    default:
      return state
  }
}