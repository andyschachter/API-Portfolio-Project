const breweries = require('../breweries')

const getAllBreweries = (request, response) => response.render('index', { breweries })

const getBreweryById = (request, response) => {
  const brewery = breweries.find((brewery) => brewery.breweryId === parseInt(request.params.id))

  return response.render('brewery', { brewery })
}

const showDocumentation = (request, response) => response.render('documentation')

module.exports = {
  getAllBreweries,
  getBreweryById,
  showDocumentation
}
