const express = require('express')
const { Liquid } = require('liquidjs')

const app = express()
const engine = new Liquid({
  root: __dirname, 
  extname: '.liquid'
})

app.engine('liquid', engine.express())
app.set('view engine', 'liquid')
app.set('views', ['./templates'])

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Welcome to liquidjs!'
  })
})

// Start the application.
app.listen(3000, function () {
  console.log('Express running: http://localhost:3000')
})
