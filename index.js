const express = require('express')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1344, () => {
  console.log('Listening on 1344...') // eslint-disable-line no-console
})
