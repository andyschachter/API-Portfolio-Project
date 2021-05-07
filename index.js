const express = require('express')
const breweries = require('./breweries')
const { getAllBreweries, getBreweryById, showDocumentation } = require('./controller/breweries')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', getAllBreweries)

app.get('/brewery/:id', getBreweryById)

app.get('/documentation', showDocumentation)

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1344, () => {
  console.log('Listening on 1344...') // eslint-disable-line no-console
})
