import * as types from '../constant/actionTypes';
import moment from 'moment';

const initialState = {
  startDate: moment().format('DD-MM-YYYY'),
  endDate: moment().add(120, 'day').format('DD-MM-YYYY'),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DATE:
      return {
        startDate: action.startDate,
        endDate: action.endDate
      }
    default:
      return state
  }
}