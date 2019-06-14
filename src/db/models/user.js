'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      primaryKey: true,
      type: DataTypes.STRING,
      field: 'email'
    },
    username: {
      type: DataTypes.STRING,
      field: 'username'
    },
    password: {
      type: DataTypes.STRING,
      field: 'password'
    }
  }, 
  {
    tableName: 'users',
    timestamps: false,
  });
  User.associate = function(models) {
      User.hasMany(models.Collection, {foreignKey: 'userEmail', as: 'collections'});
      User.hasMany(models.CollectionCollaborator, {foreignKey: 'userEmail', as: 'collectionCollaborators'});
  };
  return User;
};