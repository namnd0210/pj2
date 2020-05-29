import * as types from './actionTypes'
import fakeData from './db.json'
var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet("http://localhost:3000/staff").reply(200, fakeData.report);
mock.onGet("http://localhost:3000/admin").reply(200, fakeData.reportAdmin);

export const getReport = (setData) => {
  axios.get("http://localhost:3000/staff").then(res => {
    const { report_message, attachments } = res.data
    const { users, channels } = res.data.slack_channels
    // dispatch({
    //   type: types.GET_REPORT,
    //   data: { report_message, users, attachments, channels }
    // })
    setData({ report_message, users, channels, attachments })
  });
}

export const getReportInAdmin = (report_id, setData) => {
  axios.get("http://localhost:3000/admin").then(res => {
    const { report_message, attachments, users, send_from, send_to } = res.data
    // dispatch({
    //   type: types.GET_REPORT,
    //   data: { report_message, users, attachments, channels }
    // })
    setData({ report_message, attachments, users, send_from, send_to })
  });
}