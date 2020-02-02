import * as types from './actionTypes'

export const setDate = (startDate, endDate) => dispatch => {
  dispatch({
    type: types.SET_DATE,
    startDate: startDate,
    endDate: endDate
  })
}