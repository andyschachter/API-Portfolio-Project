const express = require('express')
const { getAllBreweries } = require('./controller/breweries')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => response.render('index'))

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1344, () => {
  console.log('Listening on 1344...') // eslint-disable-line no-console
})
