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
      name: 'Austin Street Brewery',
      location: 'Portland',
      logo: 'https://images.squarespace-cdn.com/content/v1/527fd6cbe4b009d7ee764d3b/1593356578527-66B5J9OVAEVK8FF4CYYI/ke17ZwdGBToddI8pDm48kFgh7CavrwAFvHNkUyG_87R7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmy34cPxBkNOmgIR9ZTJ7f5bD9n8p_5I4gNCmgqllxhzwNjZepSUeNXr0ve1XF9jav/Austin_Street_Primary_Logo_PMS_926+%281%29.png?format=300w',
      website: 'https://www.austinstreetbrewery.com/'
    }, {
      name: 'Goodfire Brewing Company',
      location: 'Portland',
      logo: 'https://static1.squarespace.com/static/5b8308988ab72229fc258fde/t/5de67b9536c6c83d60071468/1624154295291/?format=1500w',
      website: 'https://www.goodfirebrewing.com/'
    }, {
      name: 'Battery Steele Brewing',
      location: 'Portland',
      logo: 'https://craftpeak-cooler-images.imgix.net/craft-collective/battery_steel-1.jpg?auto=compress%2Cformat&ixlib=php-1.2.1',
      website: 'https://www.batterysteele.com/'
    }, {
      name: 'Foundation Brewing Company',
      location: 'Portland',
      logo: 'https://d2pxm94gkd1wuq.cloudfront.net/BreweryLogos/Standard/7450.foundation-brewing-company.jpg',
      website: 'https://foundationbrew.com/'
    }, {
      name: 'Allagash Brewing Company',
      location: 'Portland',
      logo: 'https://www.allagash.com/wp-content/uploads/allagash-brewing-company-1802.png',
      website: 'https://www.allagash.com/?ao_confirm'
    }, {
      name: 'Lone Pine Brewing Company',
      location: 'Portland',
      logo: 'https://d2sochvv0rudri.cloudfront.net/brewery_logos/14017/lone-pine-brewing-company-1c0312a7.png',
      website: 'https://lonepinebrewery.com/'
    }, {
      name: 'Maine Beer Company',
      location: 'Freeport',
      logo: 'https://mainebrewersguild.org/wp-content/uploads/2019/02/MaineBeerCo-Logo-2.jpg',
      website: 'https://www.mainebeercompany.com/'
    }, {
      name: 'Rising Tide Brewing Company',
      location: 'Portland',
      logo: 'https://craftpeak-cooler-images.imgix.net/rising-tide-brewing/logo.png?auto=compress%2Cformat&ixlib=php-1.2.1&s=11797fd30e3be115a59f1b89ceae0b81',
      website: 'https://risingtidebrewing.com/'
    }
    ])

    return queryInterface.bulkInsert('beers', [{
      name: 'The Substance Ale',
      style: 'IPA',
      abv: '6.6%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/CE3A1042.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'Lux',
      style: 'Rye Pale Ale',
      abv: '5.1%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/Lux-square.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'Baby Genius',
      style: 'Blonde Ale',
      abv: '4%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/BABYGENIUS.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'Dangol',
      style: 'Lime Lager',
      abv: '5%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/dangol_square.png?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'Industry vs. Inferiority',
      style: 'IPA',
      abv: '6.2%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/CE3A5114-2.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1 
    }, {
      name: 'Lagerbier',
      style: 'Kellerbier Lager',
      abv: '5.3%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/CE3A7422.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'Lucent',
      style: 'Helles Lager',
      abv: '4.9%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/LUCENT.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'Swish',
      style: 'Double IPA',
      abv: '8%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/CE3A9866.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'Nothing Gold',
      style: 'Double IPA',
      abv: '8.2%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/CE3A5735.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'Here\'s To Feeling Good All The Time',
      style: 'Double IPA',
      abv: '7.8%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/HERESTOFEELINGGOODALLTHETIME.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'Umbra',
      style: 'Oatmeal Stout',
      abv: '7.5%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/UmbraBISS_.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'Reciprocal',
      style: 'Double Dry-Hopped IPA',
      abv: '7.3%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/CE3A9388.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'Engram',
      style: 'Wheat Pale Ale',
      abv: '5.5%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/Engram-intro-1-of-1BISS_AgeGate.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'The Nuclear Whim With The Fuse Of A Mile',
      style: 'Double Dry-Hopped IPA',
      abv: '7.7%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/Nuclear-WhimBISS_.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'Precept',
      style: 'Pilsner',
      abv: '5.6%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/CE3A9106.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'Seed',
      style: 'Fruited Wild Ale',
      abv: '5.8%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/Our-Beer-1-.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'Big Small World',
      style: 'Pale Ale',
      abv: '5.5%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/BigSmallWorld_5_15_19BISS_-1.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'Worth a Visit, Worth a Lifetime',
      style: 'Triple IPA',
      abv: '10%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/CE3A8332.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'Assume Positive Intent',
      style: 'Double Dry-Hopped Pale Ale',
      abv: '6%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/CE3A9161.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'Give What You Have',
      style: 'Double Dry-Hopped IPA',
      abv: '7%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/GIVEWHATYOUHAVE.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'Zoo Hypothesis',
      style: 'Double IPA',
      abv: '7.7%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/CE3A1530.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'Kickflip',
      style: 'Cream Ale',
      abv: '5.5%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/KICKFLIP.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'Outgrowth',
      style: 'Pilsner',
      abv: '5.6%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/Outgrowth.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'Oi!',
      style: 'Nitro Pub Ale',
      abv: '4.5%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/CE3A0820-2.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'Angels With Filthy Souls',
      style: 'Barrel-Aged Porter',
      abv: '11.5%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/AWFS-2020-FINAL-3-of-23.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'Freezer Cleaner',
      style: 'Mixed Fermentation Ale',
      abv: '6.3%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/CE3A9796.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'Secret Beach',
      style: 'Saison',
      abv: '6.4%',
      logo: 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/CE3A0297-2.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&w=600&wpsize=tile_strict',
      breweryId: 1
    }, {
      name: 'Patina Pale',
      style: 'American Pale Ale',
      abv: '5.3%',
      logo: 'https://images.squarespace-cdn.com/content/v1/527fd6cbe4b009d7ee764d3b/1545062721637-AXCMVPTWMWJXM3P1CXPQ/ke17ZwdGBToddI8pDm48kP6qTStmwptp3GmPpMxOgAQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dhEYhqT1uoP1mK3QOalpb0re8W1VYL4DKOpoqzGuZ7lPG6v6ULRah83RgHXAWD5lbQ/Beer+Buttons-01.jpg?format=500w',
      breweryId: 2
    }, {
      name: 'Rally',
      style: 'Session IPA',
      abv: '3.8%',
      logo: 'https://images.squarespace-cdn.com/content/v1/527fd6cbe4b009d7ee764d3b/1545062750147-3T2UX4RLLPVH1X8XQAGR/ke17ZwdGBToddI8pDm48kP6qTStmwptp3GmPpMxOgAQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dhEYhqT1uoP1mK3QOalpb0re8W1VYL4DKOpoqzGuZ7lPG6v6ULRah83RgHXAWD5lbQ/Beer+Buttons-02.jpg?format=500w',
      breweryId: 2
    }, {
      name: 'Florens',
      style: 'American IPA',
      abv: '6.9%',
      logo: 'https://images.squarespace-cdn.com/content/v1/527fd6cbe4b009d7ee764d3b/1545062769432-9TFCW6T08FA48IGDRRDE/ke17ZwdGBToddI8pDm48kP6qTStmwptp3GmPpMxOgAQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dhEYhqT1uoP1mK3QOalpb0re8W1VYL4DKOpoqzGuZ7lPG6v6ULRah83RgHXAWD5lbQ/Beer+Buttons-03.jpg?format=500w',
      breweryId: 2
    }, {
      name: 'Six Grain',
      style: 'Milk Stout',
      abv: '6.4%',
      logo: 'https://images.squarespace-cdn.com/content/v1/527fd6cbe4b009d7ee764d3b/1545060507265-5WK50YBNT36GAK4KN4BO/ke17ZwdGBToddI8pDm48kP6qTStmwptp3GmPpMxOgAQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dhEYhqT1uoP1mK3QOalpb0re8W1VYL4DKOpoqzGuZ7lPG6v6ULRah83RgHXAWD5lbQ/Beer+Buttons_Sample-06.jpg?format=500w',
      breweryId: 2
    }, {
      name: 'Senescent',
      style: 'Wild Ale',
      abv: '8.4%',
      logo: 'https://images.squarespace-cdn.com/content/v1/527fd6cbe4b009d7ee764d3b/1545060569856-QTQXSGCCVC72RXGP5PNG/ke17ZwdGBToddI8pDm48kP6qTStmwptp3GmPpMxOgAQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dhEYhqT1uoP1mK3QOalpb0re8W1VYL4DKOpoqzGuZ7lPG6v6ULRah83RgHXAWD5lbQ/Beer+Buttons_Sample-09.jpg?format=500w',
      breweryId: 2
    }, {
      name: 'Kolsch',
      style: 'Kolsch',
      abv: '5%',
      logo: 'https://images.squarespace-cdn.com/content/v1/527fd6cbe4b009d7ee764d3b/1545060593516-L4EUE3JLP415TKA68NR4/ke17ZwdGBToddI8pDm48kP6qTStmwptp3GmPpMxOgAQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dhEYhqT1uoP1mK3QOalpb0re8W1VYL4DKOpoqzGuZ7lPG6v6ULRah83RgHXAWD5lbQ/Beer+Buttons_Sample-10.jpg?format=500w',
      breweryId: 2
    }, {
      name: 'Obsolete Vernacular',
      style: 'Sour Blonde Ale',
      abv: '6%',
      logo: 'https://images.squarespace-cdn.com/content/v1/527fd6cbe4b009d7ee764d3b/1545063043197-5NGEKLYX4PZ668QO5DIS/ke17ZwdGBToddI8pDm48kP6qTStmwptp3GmPpMxOgAQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dhEYhqT1uoP1mK3QOalpb0re8W1VYL4DKOpoqzGuZ7lPG6v6ULRah83RgHXAWD5lbQ/Beer+Buttons-11.jpg?format=500w',
      breweryId: 2
    }, {
      name: 'Offset',
      style: 'Double IPA',
      abv: '9%',
      logo: 'https://images.squarespace-cdn.com/content/v1/527fd6cbe4b009d7ee764d3b/1545060613343-FUTEPK792QKF91QTLPFA/ke17ZwdGBToddI8pDm48kP6qTStmwptp3GmPpMxOgAQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dhEYhqT1uoP1mK3QOalpb0re8W1VYL4DKOpoqzGuZ7lPG6v6ULRah83RgHXAWD5lbQ/Beer+Buttons_Sample-11.jpg?format=500w',
      breweryId: 2
    }, {
      name: '[LM]',
      style: 'Blonde Ale',
      abv: '5%',
      logo: 'https://images.squarespace-cdn.com/content/v1/527fd6cbe4b009d7ee764d3b/1545063092089-5S4K2G37DKWC3HF04VEI/ke17ZwdGBToddI8pDm48kP6qTStmwptp3GmPpMxOgAQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dhEYhqT1uoP1mK3QOalpb0re8W1VYL4DKOpoqzGuZ7lPG6v6ULRah83RgHXAWD5lbQ/Beer+Buttons-20.jpg?format=500w',
      breweryId: 2
    }, {
      name: 'Anodyne',
      style: 'IPA',
      abv: '6%',
      logo: 'https://images.squarespace-cdn.com/content/v1/527fd6cbe4b009d7ee764d3b/1545063074768-H2CW9M3PN3ZDEOJNRR0A/ke17ZwdGBToddI8pDm48kP6qTStmwptp3GmPpMxOgAQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dhEYhqT1uoP1mK3QOalpb0re8W1VYL4DKOpoqzGuZ7lPG6v6ULRah83RgHXAWD5lbQ/Beer+Buttons-12.jpg?format=500w',
      breweryId: 2
    }, {
      name: 'Short Story Long',
      style: 'Imperial Stout',
      abv: '9%',
      logo: 'https://images.squarespace-cdn.com/content/v1/527fd6cbe4b009d7ee764d3b/1576180996849-I70U12VQUHU3828JNX0Q/ke17ZwdGBToddI8pDm48kI39eQyQJd009nPlUGbbBPYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dvqyae4vnXeFMnHe1mu824G8wEu5MH935b-PXtRlQW95CjLISwBs8eEdxAxTptZAUg/ShortStoryLongButton-54.png?format=500w',
      breweryId: 2
    }, {
      name: 'Kon-Tiki',
      style: 'IPA',
      abv: '7.3%',
      logo: 'https://images.squarespace-cdn.com/content/v1/527fd6cbe4b009d7ee764d3b/1545063412368-G803ILMZ77ZQMG16AITD/ke17ZwdGBToddI8pDm48kP6qTStmwptp3GmPpMxOgAQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dhEYhqT1uoP1mK3QOalpb0re8W1VYL4DKOpoqzGuZ7lPG6v6ULRah83RgHXAWD5lbQ/Kon-22-22.jpg?format=500w',
      breweryId: 2
    }, {
      name: 'Walcott',
      style: 'Smoked Brown Ale',
      abv: '5.7%',
      logo: 'https://images.squarespace-cdn.com/content/v1/527fd6cbe4b009d7ee764d3b/1553175182463-SD3RMIFDNTAOKXAL0EMZ/ke17ZwdGBToddI8pDm48kP6qTStmwptp3GmPpMxOgAQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dhEYhqT1uoP1mK3QOalpb0re8W1VYL4DKOpoqzGuZ7lPG6v6ULRah83RgHXAWD5lbQ/Beer+Buttons2-37.jpg?format=500w',
      breweryId: 2
    }, {
      name: 'Neverender',
      style: 'Double IPA',
      abv: '8%',
      logo: 'https://images.squarespace-cdn.com/content/v1/527fd6cbe4b009d7ee764d3b/1553175092289-FAF1J1B2JGC3KQBQ7NEK/ke17ZwdGBToddI8pDm48kP6qTStmwptp3GmPpMxOgAQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dhEYhqT1uoP1mK3QOalpb0re8W1VYL4DKOpoqzGuZ7lPG6v6ULRah83RgHXAWD5lbQ/Beer+Buttons2-40.jpg?format=500w',
      breweryId: 2
    }, {
      name: 'Pactolian Pils',
      style: 'German Pilsner',
      abv: '5%',
      logo: 'https://images.squarespace-cdn.com/content/v1/527fd6cbe4b009d7ee764d3b/1564599546789-DFIAHL6LGZU9AEHFV5HU/ke17ZwdGBToddI8pDm48kN_ZR4UgCAMMEwDTftyxBbBZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVG_FAIGopwZsQc8fLeB7FMD4agMr6YFOlafbVQXUus25DqWIIaSPh2v08GbKqpiV54/Artboard+1+copy+47.png?format=500w',
      breweryId: 2
    }, {
      name: 'Bombtrack',
      style: 'Double IPA',
      abv: '8.5%',
      logo: 'https://images.squarespace-cdn.com/content/v1/527fd6cbe4b009d7ee764d3b/1564599561757-Z2ZHAEQG6M82OUS45O8H/ke17ZwdGBToddI8pDm48kN_ZR4UgCAMMEwDTftyxBbBZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVG_FAIGopwZsQc8fLeB7FMD4agMr6YFOlafbVQXUus25DqWIIaSPh2v08GbKqpiV54/Artboard+1+copy+48.png?format=500w',
      breweryId: 2
    }, {
      name: 'Oktoberfest',
      style: 'Marzen Lager',
      abv: '5.5%',
      logo: 'https://images.squarespace-cdn.com/content/v1/527fd6cbe4b009d7ee764d3b/1569336809581-ONV0X8W1OX0OO7584QMQ/ke17ZwdGBToddI8pDm48kNmMAGTq2t21n_lJCtvMBPhZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHLYj1brD0wT57AHfvBoVjio7NuJFuRdDtQ7crcIdiOn1tO8nJtk629tZGIWiyY3XQ/Artboard+1+copy+52.png?format=500w',
      breweryId: 2
    }, {
      name: 'Marquee Moon',
      style: 'Pale Ale',
      abv: '4.9%',
      logo: 'https://images.squarespace-cdn.com/content/v1/527fd6cbe4b009d7ee764d3b/1570039567167-PRQO3QOBQKBG3QIWW4GX/ke17ZwdGBToddI8pDm48kNmMAGTq2t21n_lJCtvMBPhZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHLYj1brD0wT57AHfvBoVjio7NuJFuRdDtQ7crcIdiOn1tO8nJtk629tZGIWiyY3XQ/Artboard+1+copy+53.png?format=500w',
      breweryId: 2
    }, {
      name: 'Alcyone',
      style: 'Dunkel',
      abv: '5.6%',
      logo: 'https://images.squarespace-cdn.com/content/v1/527fd6cbe4b009d7ee764d3b/1582035332494-VNLS41YE0CNGRIRCY417/ke17ZwdGBToddI8pDm48kGY6S2orJOcxzesoKqQTUoAUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dkiR4kdMGskNLpSqFUWPtZZjlfxrxyPIBzzsEiCDeUjsOpYghpI-Ha_TwZsqqmJXng/Alcyone-54.jpg?format=500w',
      breweryId: 2
    }, {
      name: 'Glitter n Grit',
      style: 'Gose',
      abv: '5.6%',
      logo: 'https://images.squarespace-cdn.com/content/v1/527fd6cbe4b009d7ee764d3b/1559229406291-J300TMET0UU9D8QM7QZE/ke17ZwdGBToddI8pDm48kP6qTStmwptp3GmPpMxOgAQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dtjpQSU09t4zQlFNYlw7_DuV_Ocfa21VW-l2sAJy8gaYCjLISwBs8eEdxAxTptZAUg/GngButton-44.png?format=500w',
      breweryId: 2
    }, {
      name: 'After The Glitter Fades',
      style: 'Tart Blonde Ale',
      abv: '5.6%',
      logo: 'https://images.squarespace-cdn.com/content/v1/527fd6cbe4b009d7ee764d3b/1596215365159-5G8EEKIKT8IKQCB4A3OY/ke17ZwdGBToddI8pDm48kI39eQyQJd009nPlUGbbBPYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2duYr4JLNFYgUQ4AK3hvcRhnsQGZYA95xypARrkshj8gpJvwGh1qtNWvMhYKnvaKhbA/Beer+Buttons-60.jpg?format=500w',
      breweryId: 2
    }, {
      name: 'Prime',
      style: 'IPA',
      abv: '6.5%',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b8308988ab72229fc258fde/1536253520848-0AI078ZCV8B7133XY54X/ke17ZwdGBToddI8pDm48kOrjyB6jA94y6uwWYmC4Z2t7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0prfa1Z6IeUrCPboCAmmHZmG_WXnLu9ZYGpSGe2LRw8sj4ebSZOJG87DXFcnqsJzXw/_DSC2983_Goodfire_Prime_ice_jpeg.jpg?format=500w',
      breweryId: 3
    }, {
      name: 'Waves',
      style: 'IPA',
      abv: '7.2%',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b8308988ab72229fc258fde/1539305643597-7L488UBO3F6OK46LR9H8/ke17ZwdGBToddI8pDm48kLR2rgEg1jPu1GtjV4K1vZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0scl71iiVnMuLeEyTFSXT3qwhEKW1IfUKL5GUNLdDa9MjuPXcXiDenG_NSvE-2lGCg/_DSC4959_Goodfire_Waves_studio_solo_jpeg.jpg?format=500w',
      breweryId: 3
    }, {
      name: 'Tiny Wrist Circles',
      style: 'Saison',
      abv: '4.5%',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b8308988ab72229fc258fde/1578443526881-0QO5JPAK00PT2EVI3H6X/ke17ZwdGBToddI8pDm48kAo5k4Ej8a8GDLuQshfm59t7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmEczKEiHaQrO44vfJ0kKvIPg0av5Ou8AXgUtlpYvvVMv-oRHAzmKE3MBTEzcUDnYr/DSC_8713-01_Goodfire_TWC_concrete_jpeg.jpg?format=500w',
      breweryId: 3
    }, {
      name: 'Crystals',
      style: 'Double IPA',
      abv: '7.8%',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b8308988ab72229fc258fde/1536254153586-N7SQSA6296C29DSDS7A5/ke17ZwdGBToddI8pDm48kLR2rgEg1jPu1GtjV4K1vZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0scl71iiVnMuLeEyTFSXT3qwhEKW1IfUKL5GUNLdDa9MjuPXcXiDenG_NSvE-2lGCg/_DSC0704_Goodfire_Crystals_red_jpeg.jpg?format=500w',
      breweryId: 3
    }, {
      name: 'Tri Combs',
      style: 'Double IPA',
      abv: '8%',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b8308988ab72229fc258fde/1536254140437-98Y7PIJCBQUNRQHDQB1J/ke17ZwdGBToddI8pDm48kNSx77UjPiQfPSkm4e-Ju5l7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVKgXsLbLcud-34850igIReItCPe_OxWDqJMWHlARVgqCD6yKTHyerIvj1j5VZjt2w/DSC_8692-02_Goodfire_TriCombs_blue_jpeg.jpg?format=500w',
      breweryId: 3
    }, {
      name: 'Can\'t Stay Long',
      style: 'German Pilsner',
      abv: '4.8%',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b8308988ab72229fc258fde/1536253821607-6DJ9KT4Z9DUJ52XDUGQP/ke17ZwdGBToddI8pDm48kLR2rgEg1jPu1GtjV4K1vZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0scl71iiVnMuLeEyTFSXT3qwhEKW1IfUKL5GUNLdDa9MjuPXcXiDenG_NSvE-2lGCg/_DSC1734_Goodfire_CantStay_green_jpeg.jpg',
      breweryId: 3
    }, {
      name: 'Hydro',
      style: 'Double IPA',
      abv: '7.8%',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b8308988ab72229fc258fde/1536253493160-E6AZKIATSWEX3SKV3A62/ke17ZwdGBToddI8pDm48kOrjyB6jA94y6uwWYmC4Z2t7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0prfa1Z6IeUrCPboCAmmHZmG_WXnLu9ZYGpSGe2LRw8sj4ebSZOJG87DXFcnqsJzXw/_DSC3864_Goodfire_Hydro_NEW_studio_jpeg.jpg?format=500w',
      breweryId: 3
    }, {
      name: 'META',
      style: 'Double IPA',
      abv: '8.3%',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b8308988ab72229fc258fde/1578443471327-OB0S3L3RJ6XQIP556NSA/ke17ZwdGBToddI8pDm48kLR2rgEg1jPu1GtjV4K1vZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0scl71iiVnMuLeEyTFSXT3qwhEKW1IfUKL5GUNLdDa9MjuPXcXiDenG_NSvE-2lGCg/_DSC1864_Goodfire_Meta_can_jpeg2.jpg?format=500w',
      breweryId: 3
    }, {
      name: 'VHS',
      style: 'Imperial Stout',
      abv: '9%',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b8308988ab72229fc258fde/1551114029030-HF9PAYVA9G7E79GHQJL0/ke17ZwdGBToddI8pDm48kGAQrHeIz4KXOhGQncBXOzR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iy8Rj2bPXFyaluz0PeKicOtjYs0pcra9uG_xnufxOVHkmufDxfNwk-SuiujDgofgw/_DSC8523_Goodfire_VHS_canshot_jpeg.jpg?format=750w',
      breweryId: 3
    }, {
      name: 'Terps',
      style: 'Double IPA',
      abv: '8%',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b8308988ab72229fc258fde/1551113969854-GH88YY8V41URIKIO5QJF/ke17ZwdGBToddI8pDm48kCaIROwBjQ0vjlNs2zAOla17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hx0TKp4jCW7sB_BGURRbuVle5Qv4Gmvps8n0JwdIhrdohH5N89KG2jXv2W5to_yQA/_DSC7734_Goodfire_Terps_studio_jpeg+%282%29.jpg?format=750w',
      breweryId: 3
    }, {
      name: 'Ack Ack Ack',
      style: 'Pale Ale',
      abv: '6%',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b8308988ab72229fc258fde/1561735847497-9VAXNHAGXEZEKA8EDMT1/ke17ZwdGBToddI8pDm48kOMslecPo4mS_HQpDYhfKnV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UR_-tmnBQkssHQZdGiWsSFVLa8S7UY5CrYOmYSwTUgRLSDhLwpWb4_zZkUq1SF3Y6Q/_DSC0797_Goodfire_AckAckAck_can_jpeg+%281%29.jpg?format=500w',
      breweryId: 3
    }, {
      name: 'Their There They\'re',
      style: 'Pilsner',
      abv: '4.2%',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b8308988ab72229fc258fde/1561735808029-6O1FJYMHK0MBMT55W26D/ke17ZwdGBToddI8pDm48kE1XQFKXT1lV0_X3SXWs8Xd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbRFsh4R5AAb4II7c133G8mAp4v7I4MId1jg25_RKJno2uQucLJYLR-H8VAgXTmj2g/_DSC0783_Goodfire_ThThTh_cementcracks_jpeg+%281%29.jpg?format=500w',
      breweryId: 3
    }, {
      name: 'Moon Jellies',
      style: 'Imperial Sour Ale',
      abv: '7%',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b8308988ab72229fc258fde/1565964501724-6YM2CAOK5O0VXPPDX73P/ke17ZwdGBToddI8pDm48kMJiwTiwDJ3YNB3YknVTx5d7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0ouw-8l5B_J38LMU7OZFvYdxLdC91qMjssoROJFav96SEHgsR63-KTu4s0aMcbIKqA/_DSC3570_Goodfire_MoonJellies_can_color_jpeg.jpg?format=500w',
      breweryId: 3
    }, {
      name: 'Flockout',
      style: 'Pale Lager',
      abv: '4.5%',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b8308988ab72229fc258fde/1576767987948-M5W9TXHBO65R0J8QIIKM/ke17ZwdGBToddI8pDm48kOrjyB6jA94y6uwWYmC4Z2t7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0prfa1Z6IeUrCPboCAmmHZmG_WXnLu9ZYGpSGe2LRw8sj4ebSZOJG87DXFcnqsJzXw/_DSC6830_Goodfire_Flockout_can_jpeg.jpg?format=500w',
      breweryId: 3
    }, {
      name: 'Ultra Waves',
      style: 'Double IPA',
      abv: '8.5%',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b8308988ab72229fc258fde/1576768360058-U057LT44WSSAHV45FBC3/ke17ZwdGBToddI8pDm48kFzsPPL41gQreKm8UcqyaJd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQSRNIxJYl5pBmzpke5bkrooVvBZ9zlEl18Y2FX6bg730NBnIAefnahSEPfJBpXmhw/_DSC7563_Goodfire_UltraWaves_can_jpeg.jpg?format=750w',
      breweryId: 3
    }, {
      name: 'Super Prime',
      style: 'Double IPA',
      abv: '8%',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b8308988ab72229fc258fde/1578443010261-41TGW7X1QME1P3T4C30Q/ke17ZwdGBToddI8pDm48kKQn1bA1qZ-jKhuO1xG1atd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0sofvP-RiTb638-KOMjny0tmo3Bc0uwZXs0FssfRR30sHshOIBJ4MG7H_2fX27e2kg/_DSC7692_Goodfire_SuperPrime_can_lightpainting_jpeg+%281%29.jpg?format=750w',
      breweryId: 3
    }, {
      name: 'Ascent',
      style: 'IPA',
      abv: '6.7%',
      logo: 'https://static.wixstatic.com/media/7680ea_1a676ce3d2844a3281e8f2b28db3391f~mv2.png/v1/fill/w_264,h_264,al_c,q_85,usm_0.66_1.00_0.01/12Ascent.webp',
      breweryId: 4
    }, {
      name: 'Avalon',
      style: 'Triple Dry-Hopped Double IPA',
      abv: '7.5%',
      logo: 'https://static.wixstatic.com/media/7680ea_302c0d0512584b45961d1ad793c515e6~mv2.png/v1/fill/w_264,h_264,al_c,q_85,usm_0.66_1.00_0.01/Avalon%20Can.webp',
      breweryId: 4
    }, {
      name: 'Flume',
      style: 'Double IPA',
      abv: '8%',
      logo: 'https://static.wixstatic.com/media/7680ea_a33d9c8bc05043e18e314770baf5efcc~mv2.png/v1/fill/w_264,h_264,al_c,q_85,usm_0.66_1.00_0.01/Flume%20Can.webp',
      breweryId: 4
    }, {
      name: 'Firn',
      style: 'Pale Ale',
      abv: '5.8%',
      logo: 'https://static.wixstatic.com/media/7680ea_58543488bd234cd8ae678489d125fcab~mv2_d_4000_4000_s_4_2.jpg/v1/fill/w_264,h_264,al_c,q_80,usm_0.66_1.00_0.01/Firn%20Can.webp',
      breweryId: 4
    }, {
      name: 'Kineo',
      style: 'Triple Dry-Hopped IPA',
      abv: '6.5%',
      logo: 'https://static.wixstatic.com/media/7680ea_d700c79962e948109ddcde282909585d~mv2.png/v1/fill/w_264,h_264,al_c,q_85,usm_0.66_1.00_0.01/Kineo%20Can.webp',
      breweryId: 4
    }, {
      name: 'Vagabond Dreamer',
      style: 'IPA',
      abv: '7.2%',
      logo: 'https://static.wixstatic.com/media/7680ea_a26e78d580a3492e89a0359b8d76cef4~mv2_d_4000_4000_s_4_2.jpg/v1/fill/w_264,h_264,al_c,q_80,usm_0.66_1.00_0.01/Vagabond%20Dreamer%20Can.webp',
      breweryId: 4
    }, {
      name: 'Marsh Mello Vibes',
      style: 'S\'more Stout',
      abv: '8%',
      logo: 'https://static.wixstatic.com/media/7680ea_1f116d9607234233be973b54afa61327~mv2.png/v1/fill/w_264,h_264,al_c,q_85,usm_0.66_1.00_0.01/Vibes%20Can.webp',
      breweryId: 4
    }, {
      name: 'Endless Ride',
      style: 'Rotating Kettle Sour',
      abv: '3.9%',
      logo: 'https://static.wixstatic.com/media/7680ea_34f627debecb4334bbf072780e92f59b~mv2_d_4000_4000_s_4_2.jpg/v1/fill/w_264,h_264,al_c,q_80,usm_0.66_1.00_0.01/Endless%20Ride%20Can.webp',
      breweryId: 4
    }, {
      name: 'Golden Path',
      style: 'Unfiltered Pilsner',
      abv: '5%',
      logo: 'https://static.wixstatic.com/media/7680ea_731e53afd21a4a1287985aff0c2e95a3~mv2_d_4000_4000_s_4_2.jpg/v1/fill/w_264,h_264,al_c,q_80,usm_0.66_1.00_0.01/GP%20can.webp',
      breweryId: 4
    }, {
      name: 'In The Clouds',
      style: 'Double IPA',
      abv: '8%',
      logo: 'https://static.wixstatic.com/media/7680ea_685a26c7bb8b421ca421cf4856503825~mv2.png/v1/fill/w_264,h_264,al_c,q_85,usm_0.66_1.00_0.01/In%20The%20Clouds.webp',
      breweryId: 4
    }, {
      name: 'Roving Jewel',
      style: 'Oat IPA',
      abv: '7.6%',
      logo: 'https://static.wixstatic.com/media/7680ea_89c17a8f85954940baabf9863fecc8f9~mv2.png/v1/fill/w_264,h_264,al_c,q_85,usm_0.66_1.00_0.01/Roving%20Jewel%20Can.webp',
      breweryId: 4
    }, {
      name: 'Afterglow',
      style: 'IPA',
      abv: '7%',
      logo: 'https://foundationbrew.com/2018/wp-content/uploads/2017/08/Afterglow-can-render-NEW.png',
      breweryId: 5
    }, {
      name: 'Burnside',
      style: 'Brown Ale',
      abv: '5.1%',
      logo: 'https://foundationbrew.com/2018/wp-content/uploads/2017/08/Burnside2.png',
      breweryId: 5
    }, {
      name: 'Epiphany',
      style: 'Maine IPA',
      abv: '8%',
      logo: 'https://foundationbrew.com/2018/wp-content/uploads/2017/04/CanEpiphany.png',
      breweryId: 5
    }, {
      name: 'Riverton Flyer',
      style: 'Pilsner',
      abv: '5.1%',
      logo: 'https://foundationbrew.com/2018/wp-content/uploads/2017/12/Riverton-Can-Render.png',
      breweryId: 5
    }, {
      name: 'Forge',
      style: 'Russian Imperial Stout',
      abv: '10%',
      logo: 'https://foundationbrew.com/2018/wp-content/uploads/2017/12/Forge-update2020-render.png',
      breweryId: 5
    }, {
      name: 'Cosmic Bloom',
      style: 'Pale Ale',
      abv: '5.5%',
      logo: 'https://foundationbrew.com/2018/wp-content/uploads/2017/12/Cosmic-Bloom-Can-Render.png',
      breweryId: 5
    }, {
      name: 'Bocce Pils',
      style: 'Pilsner',
      abv: '4.5%',
      logo: 'https://foundationbrew.com/2018/wp-content/uploads/2021/06/Bocce-Pils-can-render.png',
      breweryId: 5
    }, {
      name: 'Flightless Wonder',
      style: 'IPA',
      abv: '6.1%',
      logo: 'https://foundationbrew.com/2018/wp-content/uploads/2020/08/flightless-wonder-render-front.png',
      breweryId: 5
    }, {
      name: 'Tropical Jam',
      style: 'Kettle Sour',
      abv: '4.5%',
      logo: 'https://foundationbrew.com/2018/wp-content/uploads/2018/10/Tropical-Jam-Can-Render-New.png',
      breweryId: 5
    }, {
      name: 'Venture',
      style: 'Double IPA',
      abv: '8%',
      logo: 'https://foundationbrew.com/2018/wp-content/uploads/2017/12/venture-can-render.png',
      breweryId: 5
    }, {
      name: 'White',
      style: 'Witbier',
      abv: '5.2%',
      logo: 'https://www.allagash.com/wp-content/uploads/White-2.19.20.png',
      breweryId: 6
    }, {
      name: 'River Trip',
      style: 'Belgian Session Ale',
      abv: '4.8%',
      logo: 'https://www.allagash.com/wp-content/uploads/River-Trip.png',
      breweryId: 6
    }, {
      name: 'North Sky',
      style: 'Stout',
      abv: '7.5%',
      logo: 'https://www.allagash.com/wp-content/uploads/north-sky-web-11.13.20.png',
      breweryId: 6
    }, {
      name: 'Fine Acre',
      style: 'Golden Ale',
      abv: '5.5%',
      logo: 'https://www.allagash.com/wp-content/uploads/fine-acre-pour.png',
      breweryId: 6
    }, {
      name: 'Tripel',
      style: 'Belgian Tripel Ale',
      abv: '9%',
      logo: 'https://www.allagash.com/wp-content/uploads/Tripel-web-11.13.20.png',
      breweryId: 6
    }, {
      name: 'Curieux',
      style: 'Bourbon Barrel Tripel',
      abv: '10.2%',
      logo: 'https://www.allagash.com/wp-content/uploads/Curieux-web-11.13.20.png',
      breweryId: 6
    }, {
      name: 'Barrel & Bean',
      style: 'Coffee Bourbon Barrel Tripel',
      abv: '9.6%',
      logo: 'https://www.allagash.com/wp-content/uploads/BnB-web-11.13.20.png',
      breweryId: 6
    }, {
      name: 'Sixteen Counties',
      style: 'Golden Ale',
      abv: '6.5%',
      logo: 'https://www.allagash.com/wp-content/uploads/Sixteen-Counties-16oz-CAN.png',
      breweryId: 6
    }, {
      name: 'Coolship Resurgam',
      style: 'Wild Ale',
      abv: '6.4%',
      logo: 'https://www.allagash.com/wp-content/uploads/Coolship_Resurgam.png',
      breweryId: 6
    }, {
      name: 'Coolship Red',
      style: 'Raspberry Wild Ale',
      abv: '5.6%',
      logo: 'https://www.allagash.com/wp-content/uploads/Coolship_Red.png',
      breweryId: 6
    }, {
      name: 'Portland Pale Ale',
      style: 'American Pale Ale',
      abv: '5.2%',
      logo: 'https://lonepinebrewery.com/wp-content/uploads/2020/03/3.10-Root-Wild-Pale-Sarah-51.jpg',
      breweryId: 7
    }, {
      name: 'Brightside',
      style: 'American IPA',
      abv: '7.1%',
      logo: 'https://lonepinebrewery.com/wp-content/uploads/2020/03/3.23-BSide-Camping-101.jpg',
      breweryId: 7
    }, {
      name: 'Tessellation',
      style: 'Double IPA',
      abv: '8.1%',
      logo: 'https://lonepinebrewery.com/wp-content/uploads/2013/06/tesssmall4.jpg',
      breweryId: 7
    }, {
      name: 'Oh-J',
      style: 'Double IPA',
      abv: '8.1%',
      logo: 'https://lonepinebrewery.com/wp-content/uploads/2020/04/ohj.jpg',
      breweryId: 7
    }, {
      name: 'Raspberry Sparkler',
      style: 'Sour Ale',
      abv: '4.8%',
      logo: 'https://lonepinebrewery.com/wp-content/uploads/2020/03/12.-30-Sparkler-Slushy-2.jpg',
      breweryId: 7
    }, {
      name: 'T-Shirt Cannon',
      style: 'IPA',
      abv: '7.7%',
      logo: 'https://lonepinebrewery.com/wp-content/uploads/2020/03/MG_5308.jpg',
      breweryId: 7
    }, {
      name: 'Diamond Unicorn',
      style: 'Double IPA',
      abv: '7.8%',
      logo: 'https://lonepinebrewery.com/wp-content/uploads/2020/03/diamond-1-1.jpg',
      breweryId: 7
    }, {
      name: 'Quantom Cuddle Kitten',
      style: 'Double IPA',
      abv: '7.8%',
      logo: 'https://lonepinebrewery.com/wp-content/uploads/2020/03/qck-1.jpg',
      breweryId: 7
    }, {
      name: 'Chaos Emeralds',
      style: 'Double IPA',
      abv: '8%',
      logo: 'https://lonepinebrewery.com/wp-content/uploads/2020/03/490Beer-14.jpg',
      breweryId: 7
    }, {
      name: 'Maple Sunday',
      style: 'Breakfast Brown Ale',
      abv: '5.1%',
      logo: 'https://lonepinebrewery.com/wp-content/uploads/2020/03/PANCAKES-5-of-24.jpg',
      breweryId: 7
    }, {
      name: 'Walk Off',
      style: 'Session IPA',
      abv: '4.2%',
      logo: 'https://lonepinebrewery.com/wp-content/uploads/2020/04/walkoff2.png',
      breweryId: 7
    }, {
      name: 'Peeper',
      style: 'Pale Ale',
      abv: '5.5%',
      logo: 'https://images.squarespace-cdn.com/content/v1/58779d0203596ef4263164bb/1575840083793-CYNAACN2YND6DDXEJHMY/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/Peeper+Combo.png?format=500w',
      breweryId: 8
    }, {
      name: 'Zoe',
      style: 'Amber Ale',
      abv: '7.2%',
      logo: 'https://images.squarespace-cdn.com/content/v1/58779d0203596ef4263164bb/1575840526082-76RJRPL7S8C811R14ZH9/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/Zoe+Combo.png?format=500w',
      breweryId: 8
    }, {
      name: 'Mean Old Tom',
      style: 'Stout',
      abv: '6.5%',
      logo: 'https://images.squarespace-cdn.com/content/v1/58779d0203596ef4263164bb/1575840690853-WUPUH7EXUBAF58N289Z6/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/Mean+Old+Tom+Combo.png?format=500w',
      breweryId: 8
    }, {
      name: 'Lunch',
      style: 'IPA',
      abv: '7%',
      logo: 'https://images.squarespace-cdn.com/content/v1/58779d0203596ef4263164bb/1575840287518-HLOVABN6K0QFQDL7FY7G/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/Lunch+Combo.png?format=500w',
      breweryId: 8
    }, {
      name: 'MO',
      style: 'Pale Ale',
      abv: '6%',
      logo: 'https://images.squarespace-cdn.com/content/v1/58779d0203596ef4263164bb/1575840403283-L2JOSXUNPMYDIOO7Q61J/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/MO+Combo.png?format=500w',
      breweryId: 8
    }, {
      name: 'Another One',
      style: 'IPA',
      abv: '7%',
      logo: 'https://images.squarespace-cdn.com/content/v1/58779d0203596ef4263164bb/1575840459689-ZW448KFA6EN01OD9VC8T/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/Another+One+Combo.png?format=500w',
      breweryId: 8
    }, {
      name: 'a tiny beautiful something',
      style: 'Pale Ale',
      abv: '5.5%',
      logo: 'https://images.squarespace-cdn.com/content/v1/58779d0203596ef4263164bb/1575840593673-J4TTVT4MMAP8AP4B7JG6/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/Tiny+Combo.png?format=500w',
      breweryId: 8
    }, {
      name: 'Woods & Waters',
      style: 'IPA',
      abv: '6.2%',
      logo: 'https://images.squarespace-cdn.com/content/v1/58779d0203596ef4263164bb/1575840755344-QUV3QFJ1TJE2ISR8B9AF/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/Woods+Combo.png?format=500w',
      breweryId: 8
    }, {
      name: 'Dinner',
      style: 'Double IPA',
      abv: '8.2%',
      logo: 'https://images.squarespace-cdn.com/content/v1/58779d0203596ef4263164bb/1575841347762-U0N8EYGQ6199372VNIWW/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/Dinner+Combo.png?format=500w',
      breweryId: 8
    }, {
      name: 'Wolfe\'s Neck',
      style: 'IPA',
      abv: '6.5%',
      logo: 'https://images.squarespace-cdn.com/content/v1/58779d0203596ef4263164bb/1575844614002-GSJJKP9I5JOZNXBKRFXZ/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/Wolfe%27s+Neck+Combo.png?format=500w',
      breweryId: 8
    }, {
      name: 'King Titus',
      style: 'Porter',
      abv: '7.5%',
      logo: 'https://images.squarespace-cdn.com/content/v1/58779d0203596ef4263164bb/1575841090454-RIJEYEIS8Y0YP5KUJNOF/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/King+Titus+Combo.png?format=500w',
      breweryId: 8
    }, {
      name: 'Ishmael',
      style: 'Copper Ale',
      abv: '4.9%',
      logo: 'https://craftpeak-cooler-images.imgix.net/rising-tide-brewing/3D-Can-Website_Ishmael.png?auto=compress%2Cformat&fit=scale&h=1389&ixlib=php-1.2.1&w=600&wpsize=tile',
      breweryId: 9
    }, {
      name: 'Daymark',
      style: 'American Pale Ale',
      abv: '5.5%',
      logo: 'https://craftpeak-cooler-images.imgix.net/rising-tide-brewing/3D-Can-Website_Daymark.png?auto=compress%2Cformat&fit=scale&h=1389&ixlib=php-1.2.1&w=600&wpsize=tile',
      breweryId: 9
    }, {
      name: 'Zephyr',
      style: 'IPA',
      abv: '6.5%',
      logo: 'https://craftpeak-cooler-images.imgix.net/rising-tide-brewing/3D-Can-Website_Zephyr.png?auto=compress%2Cformat&fit=scale&h=1389&ixlib=php-1.2.1&w=600&wpsize=tile',
      breweryId: 9
    }, {
      name: 'Back Cove',
      style: 'Pilsner',
      abv: '5.2%',
      logo: 'https://craftpeak-cooler-images.imgix.net/rising-tide-brewing/3D-Can-Website_Back-Cove.png?auto=compress%2Cformat&fit=scale&h=1389&ixlib=php-1.2.1&w=600&wpsize=tile',
      breweryId: 9
    }, {
      name: 'Maine Island Trail Ale',
      style: 'American Session Ale',
      abv: '4.3%',
      logo: 'https://craftpeak-cooler-images.imgix.net/rising-tide-brewing/3D-Can-Website_MITA.png?auto=compress%2Cformat&fit=scale&h=1389&ixlib=php-1.2.1&w=600&wpsize=tile',
      breweryId: 9
    }, {
      name: 'Spinnaker',
      style: 'Hefeweizen',
      abv: '4.5%',
      logo: 'https://craftpeak-cooler-images.imgix.net/rising-tide-brewing/3D-Can-Website_Spinnaker.png?auto=compress%2Cformat&fit=scale&h=1389&ixlib=php-1.2.1&w=600&wpsize=tile',
      breweryId: 9
    }, {
      name: 'Jewell Island',
      style: 'IPA',
      abv: '7.8%',
      logo: 'https://craftpeak-cooler-images.imgix.net/rising-tide-brewing/3D-Can-Website_Jewell-Island.png?auto=compress%2Cformat&fit=scale&h=1389&ixlib=php-1.2.1&w=600&wpsize=tile',
      breweryId: 9
    }, {
      name: 'Pisces',
      style: 'Gose',
      abv: '3.6%',
      logo: 'https://craftpeak-cooler-images.imgix.net/rising-tide-brewing/3D-Can-Website_Pisces.png?auto=compress%2Cformat&fit=scale&h=1389&ixlib=php-1.2.1&w=600&wpsize=tile',
      breweryId: 9
    }, {
      name: 'Nikita',
      style: 'Russian Imperial Stout',
      abv: '9.6%',
      logo: 'https://craftpeak-cooler-images.imgix.net/rising-tide-brewing/3D-Can-Website_Nikita.png?auto=compress%2Cformat&fit=scale&h=1389&ixlib=php-1.2.1&w=600&wpsize=tile',
      breweryId: 9
    }, {
      name: 'Fort Gorges',
      style: 'IPA',
      abv: '6.1%',
      logo: 'https://craftpeak-cooler-images.imgix.net/rising-tide-brewing/3D-Can-Website_Fort-Gorges.png?auto=compress%2Cformat&fit=scale&h=1389&ixlib=php-1.2.1&w=600&wpsize=tile',
      breweryId: 9
    }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.bulkDelete('beers')

    return queryInterface.bulkDelete('breweries')
  }
}
