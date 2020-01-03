import * as types from '../actions/actionTypes'

let initialState = [] // ok

const dataReducer = (state = initialState, action) => {
  console.log("reducer",action)
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