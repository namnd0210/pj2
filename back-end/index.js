const express = require('express')
const app = express()
const port = 8081
var cors = require('cors')

const file = require('./db.json')

app.use(cors())


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/request/device_summary', (req, res) =>
  res.send(file)
)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))