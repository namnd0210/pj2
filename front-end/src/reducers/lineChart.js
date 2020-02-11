import * as types from '../constant/actionTypes';

const initialState = {
  isLoading: true,
  data: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.START_FETCH_LINECHART_DATA:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case types.STOP_FETCH_LINECHART_DATA:
      return {
        data: action.data,
        isLoading: action.isLoading
      }
    default:
      return state
  }
}