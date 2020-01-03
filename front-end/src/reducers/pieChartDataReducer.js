import * as types from '../actions/actionTypes'

let initialState = []

const dataReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_PIECHART_DATA:
      return [
        ...action.data
      ]
      default:
        return state
  }
}

export default dataReducer