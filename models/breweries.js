const Breweries = (connection, Sequelize) => {
  return connection.define('breweries', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.TEXT, allowNull: false },
    location: { type: Sequelize.TEXT, allowNull: false },
    logo: { type: Sequelize.TEXT, allowNull: false },
    website: { type: Sequelize.TEXT, allowNull: false },
  }, { paranoid: true })
}

module.exports = Breweries
