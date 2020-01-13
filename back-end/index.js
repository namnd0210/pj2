const express = require('express')
const app = express()
const port = 8081
var cors = require('cors')
const deviceSummaryFile = require('./summaryDeviceDB.js')

const rankingFile = require('./rankingDB.js')

const deviceByHourFile = require('./deviceByHourDB.js')

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/request/device_summary', (req, res) =>
  res.setTimeout(10000, () => 
    res.send(deviceSummaryFile))
)

app.get('/request/ranking', (req, res) =>
  res.setTimeout(15000, () =>
    res.send(rankingFile))
)

app.get('/request/device_by_hour', (req, res) =>
  res.setTimeout(5000, () =>
    res.send(deviceByHourFile))
)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
