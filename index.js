const express = require('express')
const app = express()
const port = 5000
app.get('/', function (req, res) {
    let a = 1
  res.send('Hello World')
})

app.listen(port, () => console.log('listening on port 5000'))
// app.listen(3000)