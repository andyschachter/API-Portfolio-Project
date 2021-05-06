const express = require('express')
const breweries = require('./breweries')
const { getAllBreweries } = require('./controller/breweries')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => response.render('index', { breweries }))

app.get('/brewery/:id', (request, response) => {
  const season = breweries.find((brewery) => brewery.id === parseInt(request.params.id))

  return response.render('brewery')
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1344, () => {
  console.log('Listening on 1344...') // eslint-disable-line no-console
})
