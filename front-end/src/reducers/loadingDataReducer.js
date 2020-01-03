import * as types from '../actions/actionTypes'

let initialState = []

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_FETCH_PIECHART_DATA:
      return {
        complete: action.complete
      }
    case types.STOP_FETCH_PIECHART_DATA:
      return {
        complete: action.complete
      }
    default:
      return state
  }
}

export default dataReducer