const breweries = require('../breweries')

const getAllBreweries = (request, response) => {
  return response.send(breweries)
}

module.exports = {
  getAllBreweries,
}
