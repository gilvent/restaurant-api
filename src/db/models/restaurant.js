'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      field: 'name'
    },
    scheduleInfo: {
      type: DataTypes.STRING,
      field: 'schedule_info'
    }
  }, 
  {
    tableName: 'restaurants',
    timestamps: false
  });
  Restaurant.associate = function(models) {
      Restaurant.hasMany(models.CollectionDetail, { foreignKey: 'restaurantId', as: 'collectionDetails'});
      Restaurant.hasMany(models.RestaurantSchedule, { foreignKey: 'restaurantId', as: 'schedules'});
      
  };
  return Restaurant;
};