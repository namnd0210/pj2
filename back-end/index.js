const express = require('express')
const app = express()
const port = 8081
var cors = require('cors')
const _ = require('lodash');


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
    const device = _.map(
      // ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      (month) => ({
        month: month,
        data: _.map(_.range(1, month === 2 ? 30 : (month < 8 ? ((month % 2 === 1) ? 32 : 31) : (month % 2 === 0) ? 32 : 31)), day => ({
          x: day,
          y: _.random(0, 2) !== 2 ? _.random(0, 30) : _.random(0, 50)
        }))
      })
    )
    res.send(device)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
