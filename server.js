const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const http = require('http')
const api = require('./server/routes/api')

// initialize server app
const app = express()
const port = process.env.PORT || '3000'

// parsers
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// set static folder
app.use(express.static(path.join(__dirname, 'dist')))

// set api routes
app.use('/api', api)

// set default route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})

// set port
app.set('port', port)

// listen to port
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})