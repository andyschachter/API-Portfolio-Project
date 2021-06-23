const breweriesMock = require('../breweries')
const models = require('../models')

const getAllBreweries = async (request, response) => {
  try {
    const breweries = await models.Breweries.findAll()

    response.render('index', { breweries })
  } catch (error) {
    return response.status(500).send('Unable to retrieve brewery list')
  }
}

const getBreweryById = async (request, response) => {
  // const brewery = breweriesMock.find((brewery) => brewery.breweryId === parseInt(request.params.id))
  try {
    const { id } = request.params

    const brewery = await models.Breweries.findOne({
      where: { id },
      include: [{ model: models.Beers }]
    })

    return response.render('brewery', { brewery })
  } catch (error) {
    return response.status(500).send('Unable to retrieve brewery')
  }
}

const showDocumentation = (request, response) => response.render('documentation')

module.exports = {
  getAllBreweries,
  getBreweryById,
  showDocumentation
}
