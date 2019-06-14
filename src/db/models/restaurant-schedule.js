'use strict';
module.exports = (sequelize, DataTypes) => {
  const RestaurantSchedule = sequelize.define('RestaurantSchedule', {
    restaurantId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'restaurant_id',
      references: {
        model: 'Restaurant',
        key: 'id'
      },
    },
    weekdaysRange: {
      type: DataTypes.RANGE(DataTypes.INTEGER),
      primaryKey: true,
      field: 'weekdays_range',
    },
    openTime: {
      type: DataTypes.TIME,
      field: 'open_time'
    },
    closeTime: {
      type: DataTypes.TIME,
      field: 'close_time'
    }
  }, 
  {
    tableName: 'restaurant_schedules',
    timestamps: false
  });
  RestaurantSchedule.associate = function(models) {
      RestaurantSchedule.belongsTo(models.Restaurant, { foreignKey: 'restaurantId', as: 'restaurant'});
  };
  return RestaurantSchedule;
};