const models = require('../models')

const getBeers = async (request, response) => {
  const beers = await models.Beers.findAll()

  return response.send(beers)
}

const getBeerByNameOrId = async (request, response) => {
  const { identifier } = request.params

  const beer = await models.Beers.findAll({
    where: {
      [models.Sequelize.Op.or]: [
        { id: identifier },
        { name: { [models.Sequelize.Op.like]: `%${identifier}%` } },
      ]
    },
    include: [{ model: models.Breweries }]
  })

  return beer
    ? response.send(beer)
    : response.sendStatus(404)
}

module.exports = { getBeers, getBeerByNameOrId }