'use strict';

const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/sequelize.js')[env];


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const models = {
  User: sequelize.import('./user'),
  Restaurant: sequelize.import('./restaurant'),
  RestaurantSchedule: sequelize.import('./restaurant-schedule'),
  Collection: sequelize.import('./collection'),
  CollectionDetail: sequelize.import('./collection-detail'),
  CollectionCollaborator: sequelize.import('./collection-collaborator'),
  Weekday: sequelize.import('./weekday')
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

module.exports = {models,sequelize, Sequelize};

