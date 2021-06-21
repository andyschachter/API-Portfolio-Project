/* eslint-disable max-len */
'use strict'

module.exports = {
  up: async (queryInterface) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.bulkInsert('breweries', [{
      name: 'Bissell Brothers',
      location: 'Portland',
      logo: 'https://mainebrewersguild.org/wp-content/uploads/2019/01/BBB-White-on-Black.png',
      website: 'http://www.bissellbrothers.com'
    }, {
      name: 'Bissell Brothers',
      location: 'Portland',
      logo: 'https://mainebrewersguild.org/wp-content/uploads/2019/01/BBB-White-on-Black.png',
      website: 'http://www.bissellbrothers.com'
    },
    ])

    return queryInterface.bulkInsert('beers', [{
      name: 'The Substance Ale',
      style: 'IPA',
      abv: '6.6%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/CE3A1042.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1,
    },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
