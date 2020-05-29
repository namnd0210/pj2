import * as types from '../actions/actionTypes';

const initialState = {
  report_message: "",
  users: [],
  files: [],
  channels: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.GET_REPORT: {
      const { report_message, users, attachments, channels } = action.data
      // debugger
      return {
        report_message, users, attachments, channels
      }
    }
    default:
      return state
  }
}