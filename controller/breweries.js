const models = require('../models')

const renderAllBreweries = async (request, response) => {
  try {
    const breweries = await models.Breweries.findAll()

    response.render('index', { breweries })
  } catch (error) {
    return response.status(500).send('Unable to retrieve brewery list')
  }
}

const renderBreweryById = async (request, response) => {
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

const getBreweries = async (request, response) => {
  const breweries = await models.Breweries.findAll({
    include: [{ model: models.Beers }]
  })

  return response.send(breweries)
}

const getBreweryBySlug = async (request, response) => {
  const { slug } = request.params

  const brewery = await models.Breweries.findAll({
    where: {
      name: { [models.Sequelize.Op.like]: `%${slug}%` }
    },
    include: [{ model: models.Beers }]
  })

  return brewery
    ? response.send(brewery)
    : response.sendStatus(404)
}

module.exports = {
  renderAllBreweries,
  renderBreweryById,
  showDocumentation,
  getBreweryBySlug,
  getBreweries
}
