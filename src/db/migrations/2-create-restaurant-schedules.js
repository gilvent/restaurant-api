'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('restaurant_schedules', {
      restaurant_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'restaurants',
            key: 'id'
        }
      },
      weekdays_range: {
        type: Sequelize.RANGE(Sequelize.INTEGER)
      },
      open_time: {
        type: Sequelize.TIME
      },
      close_time: {
        type: Sequelize.TIME
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('restaurant_schedules');
  }
};