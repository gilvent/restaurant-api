const restaurantData = require('../seed-data/restaurant');
const getRestaurantSchedules = require('../seed-data/restaurant-schedule');
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('restaurants', restaurantData, {});
    const restaurants = await queryInterface.sequelize.query(
      'SELECT id from restaurants', { type: queryInterface.sequelize.QueryTypes.SELECT}
    );
    return await queryInterface.bulkInsert('restaurant_schedules', getRestaurantSchedules(restaurants), {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('restaurants', null, {});
  }
};
