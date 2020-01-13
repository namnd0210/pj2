const _ = require('lodash');

module.exports = _.map(
  ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
  (day) => ({
    name: day,
    data: _.map(_.range(0, 24), time => ({
      x: `${time}:00`,
      y: _.random(0, 2) !== 2 ? _.random(0, 30) : _.random(0, 50)
    }))
  })
)