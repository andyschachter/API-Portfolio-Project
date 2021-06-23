const express = require('express')
const {
  renderAllBreweries, renderBreweryById, showDocumentation, getBreweries, getBreweryBySlug
} = require('./controller/breweries')

const { getBeers, getBeerByNameOrId, getBeerByStyle } = require('./controller/beers')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', renderAllBreweries)

app.get('/brewery/:id', renderBreweryById)

app.get('/documentation', showDocumentation)

app.get('/api/brewery/', getBreweries)

app.get('/api/brewery/:slug', getBreweryBySlug)

app.get('/api/beer/', getBeers)

app.get('/api/beer/:identifier', getBeerByNameOrId)

app.get('/api/style/:style', getBeerByStyle)

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1344, () => {
  console.log('Listening on 1344...') // eslint-disable-line no-console
})
