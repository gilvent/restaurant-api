'use strict';
module.exports = (sequelize, DataTypes) => {
  const Weekdays = sequelize.define('Weekday', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'weekdays',
    timestamps: false
  });
  Weekdays.associate = function(models) {
    // associations can be defined here
  };
  return Weekdays;
};