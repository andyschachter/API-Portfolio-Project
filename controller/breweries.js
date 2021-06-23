const models = require('../models')

const renderAllBreweries = async (request, response) => {
  try {
    const breweries = await models.Breweries.findAll()

    response.render('index', { breweries })
  } catch (error) {
    return response.status(500).send('Unable to retrieve home page')
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
    return response.status(500).send('Unable to retrieve brewery page')
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

const addNewBrewery = async (request, response) => {
  try {
    const {
      name, location, logo, website
    } = request.body

    if (!name || !location || !logo || !website) {
      return response.status(400)
        .send('The following fields are required: name, location, logo, website')
    }

    const newBrewery = {
      name, location, logo, website
    }

    const brewery = await models.Breweries.create(newBrewery)

    return response.status(201).send(brewery)
  } catch (error) {
    return response.status(500).send('Unable to add new brewery, please try again')
  }
}

module.exports = {
  renderAllBreweries,
  renderBreweryById,
  showDocumentation,
  getBreweryBySlug,
  getBreweries,
  addNewBrewery
}
