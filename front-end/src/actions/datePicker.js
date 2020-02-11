import * as types from '../constant/actionTypes'

export const setDate = (startDate, endDate)  => {
  return({
    type: types.SET_DATE,
    startDate,
    endDate
  })
}