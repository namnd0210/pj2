const _ = require('lodash');

const device1 = _.random(10, 100)*10;
const device2 = 1000 - device1;

module.exports = [
  { x: "iOS", y: device1 },
  { x: "Android", y: device2 }
];
