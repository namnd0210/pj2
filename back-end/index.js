const express = require('express')
const app = express()
const port = 8081
var cors = require('cors')
const _ = require('lodash')
const moment = require('moment')


app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/request/device_summary/', (req, res) => {
  res.setTimeout(1000, () => {
    const deviceSummary = [
      { x: "Android", y: _.random(0, 100), isActive: true },
      { x: "Windows", y: _.random(0, 100), isActive: true },
      { x: "iOS", y: _.random(0, 100), isActive: true },
      { x: "Os X", y: _.random(0, 100), isActive: true },
      { x: "Unknown", y: _.random(0, 100), isActive: true },
      { x: "Linux", y: _.random(0, 100), isActive: true }
    ];
    if (req.query.data !== undefined) {
      const listOS = req.query.data.isActive;
      const handleModalData = _.map(deviceSummary, (o, i) => ({ ...o, isActive: listOS[i] === 'true' }))
      res.send(handleModalData)
    }
    else {
      res.send(deviceSummary)
    }
  })
})

app.get('/request/ranking/', (req, res) => {
  res.setTimeout(1500, () => {
    const ranking = [
      { x: "Day 1", y: _.random(1, 20) },
      { x: "Day 2", y: _.random(1, 20) },
      { x: "Day 3", y: _.random(1, 20) },
      { x: "Day 4", y: _.random(1, 20) },
      { x: "Day 5", y: _.random(1, 20) },
      { x: "Day 6", y: _.random(1, 20) },
      { x: "Day 7", y: _.random(1, 20) },
    ]
    res.send(ranking)
  })
})

app.get('/request/device_by_hour/', (req, res) => {
  res.setTimeout(500, () => {
    const deviceByHour = _.map(
      ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
      (day) => ({
        name: day,
        data: _.map(_.range(0, 24), time => ({
          x: `${time}:00`,
          y: _.random(0, 2) !== 2 ? _.random(0, 30) : _.random(0, 50)
        }))
      })
    )
    res.send(deviceByHour)
  })
})

app.get('/request/device/', (req, res) => {
  res.setTimeout(700, () => {
    const { from_date, to_date } = req.query

    const devices =
      _.map(
        ["ios", "Android"],
        (device) => {
          const startDate = moment(from_date, 'DD-MM-YYYY');
          const endDate = moment(to_date, 'DD-MM-YYYY');
          let datesBetween = [];
          let i = startDate;

          while (i <= endDate) {
            datesBetween.push({
              x: i.clone().format('DD-MM-YYYY'),
              y: _.random(0, 2) !== 2 ? _.random(0, 30) : _.random(0, 50)
            })
            i.add(1, 'days');
          }

          return ({
            device: device,
            data: datesBetween
          })
        }
      )
    res.send(devices)
  })
})

app.get('/device_list/', (req, res) => {
  res.setTimeout(1000, () => {
    const deviceList = [
      { x: "Android", y: _.random(0, 100)},
      { x: "Windows", y: _.random(0, 100)},
      { x: "iOS", y: _.random(0, 100)},
      { x: "Os X", y: _.random(0, 100)},
      { x: "Unknown", y: _.random(0, 100)},
      { x: "Linux", y: _.random(0, 100)}
    ];
    res.send(deviceList)
  })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
