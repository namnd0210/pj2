import * as types from '../actions/actionTypes'

const initialState = {
  isLoading: true,
  data: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.START_FETCH_HEATCHART_DATA:
      return {
        ...state,
        isLoading: true
      }
    case types.FETCH_HEATCHART_DATA:
      return {
        data: action.data,
        isLoading: false
      }
    case types.STOP_FETCH_HEATCHART_DATA:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}