'use strict';
module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define('Collection', {
    collectionId: {
      primaryKey: true,
      type: DataTypes.STRING,
      autoIncrement: true,
      field: 'collection_id'
    },
    userEmail: {
      type: DataTypes.STRING,
      field: 'user_email',
      references: {
        model: 'User',
        key: 'email'
      }
    },
    collectionName: {
      type: DataTypes.STRING,
      field: 'collection_name'
    },
    updatedBy: {
      type: DataTypes.STRING,
      field: 'updated_by',
      references: {
        model: 'User',
        key: 'email'
      }
    },
    updateTime: {
      type: DataTypes.DATE,
      field: 'update_time'
    }
  }, 
  {
    tableName: 'collections',
    timestamps: false
  });
  Collection.associate = function(models) {
        Collection.belongsTo(models.User, {foreignKey: 'userEmail', as: 'user'});
        Collection.belongsTo(models.User, {foreignKey: 'updatedBy', as: 'updater'});
        Collection.hasMany(models.CollectionCollaborator, {foreignKey:'collectionId', as: 'collaborators'});
        Collection.hasMany(models.CollectionDetail, {foreignKey: 'collectionId', as: 'details'})
  };
  return Collection;
};