'use strict';
module.exports = (sequelize, DataTypes) => {
  const CollectionCollaborator = sequelize.define('CollectionCollaborator', {
    collectionId: {
      type: DataTypes.STRING,
      primaryKey: true,
      field: 'collection_id',
      references: {
        model: 'Collection',
        key: 'collectionId'
      }
    },
    userEmail: {
      type: DataTypes.STRING,
      primaryKey: true,
      field: 'user_email',
    },
  }, 
  {
    tableName: 'collection_collaborators',
    timestamps: false
  });
  CollectionCollaborator.associate = function(models) {
      CollectionCollaborator.belongsTo(models.Collection, {foreignKey: 'collectionId', as: 'collection'});
      CollectionCollaborator.belongsTo(models.User, {foreignKey: 'userEmail', as: 'collaborator'});
     
  };
  return CollectionCollaborator;
};