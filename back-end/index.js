const express = require('express')
const app = express()
const port = 8081
var cors = require('cors')
const _ = require('lodash');


app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/request/device_summary/', (req, res) =>
  res.setTimeout(1000, () => {
    const device1 = _.random(10, 100) * 10;
    const device2 = 1000 - device1;

    const deviceSummary = [
      { x: "iOS", y: device1 },
      { x: "Android", y: device2 }
    ];
    
    res.send(deviceSummary)
  })
)

app.get('/request/ranking/', (req, res) =>
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
)

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
