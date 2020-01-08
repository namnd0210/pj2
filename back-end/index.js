const express = require('express')
const app = express()
const port = 8081
var cors = require('cors')
const a = require('./summaryDeviceDB.js')

const deviceSummaryFile = a
const rankingFile = require('./rankingDB.js')

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
