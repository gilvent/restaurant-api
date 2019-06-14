'use strict';
module.exports = (sequelize, DataTypes) => {
  const CollectionDetail = sequelize.define('CollectionDetail', {
    collectionId: {
      type: DataTypes.STRING,
      primaryKey: true,
      field: 'collection_id',
      references: {
        model: 'Collection',
        key: 'collectionId'
      }
    },
    restaurantId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'restaurant_id',
      references: {
        model: 'Restaurant',
        key: 'id'
      }
    },
  }, 
  {
    tableName: 'collection_details',
    timestamps: false
  });
  CollectionDetail.associate = function(models) {
      CollectionDetail.belongsTo(models.Collection, {foreignKey: 'collectionId', as: 'collection'});
      CollectionDetail.belongsTo(models.Restaurant, {foreignKey: 'restaurantId', as: 'restaurant'});
  };
  return CollectionDetail;
};