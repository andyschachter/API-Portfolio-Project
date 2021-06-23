const models = require('../models')

const getBeers = async (request, response) => {
  const beers = await models.Beers.findAll({
    attributes: ['id', 'name', 'style', 'abv', 'logo', 'breweryId'],
  })

  return response.send(beers)
}

const getBeerByNameOrId = async (request, response) => {
  const { identifier } = request.params

  const beer = await models.Beers.findAll({
    attributes: ['id', 'name', 'style', 'abv', 'logo', 'breweryId'],
    where: {
      [models.Sequelize.Op.or]: [
        { id: identifier },
        { name: { [models.Sequelize.Op.like]: `%${identifier}%` } },
      ]
    },
    include: [{
      model: models.Breweries,
      attributes: ['id', 'name', 'location', 'logo', 'website'],
    }]
  })

  return beer
    ? response.send(beer)
    : response.sendStatus(404)
}

const getBeerByStyle = async (request, response) => {
  const { style } = request.params

  const beer = await models.Beers.findAll({
    attributes: ['id', 'name', 'style', 'abv', 'logo', 'breweryId'],
    where:
        { style: { [models.Sequelize.Op.like]: `%${style}%` } },
    include: [{
      model: models.Breweries,
      attributes: ['id', 'name', 'location', 'logo', 'website'],
    }]
  })

  return beer
    ? response.send(beer)
    : response.sendStatus(404)
}

module.exports = { getBeers, getBeerByNameOrId, getBeerByStyle }
