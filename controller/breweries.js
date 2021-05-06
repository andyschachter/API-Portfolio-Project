const models = require('../models')

const getAllBreweries = async (request, response) => {
  const breweries = await models.breweries.findAll()

  return response.send(breweries)
}

module.exports = {
  getAllBreweries,
}
