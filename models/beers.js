const Beers = (connection, Sequelize, Breweries) => {
  return connection.define('beers', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.TEXT, allowNull: false },
    style: { type: Sequelize.TEXT, allowNull: false },
    abv: { type: Sequelize.STRING, allowNull: false },
    logo: { type: Sequelize.TEXT, allowNull: false },
    breweryId: { type: Sequelize.INTEGER, references: { model: Breweries, key: 'id' } },
  }, { paranoid: true })
}

module.exports = Beers
