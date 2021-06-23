const express = require('express')
const {
  renderAllBreweries, renderBreweryById, showDocumentation, getBreweries, getBreweryBySlug
} = require('./controller/breweries')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', renderAllBreweries)

app.get('/brewery/:id', renderBreweryById)

app.get('/documentation', showDocumentation)

app.get('/api/brewery/', getBreweries)

app.get('/api/brewery/:slug', getBreweryBySlug)

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1344, () => {
  console.log('Listening on 1344...') // eslint-disable-line no-console
})
