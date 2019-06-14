'use strict';
module.exports = {
    up: (queryInterface,Sequelize) => {
        return queryInterface.createTable('users', {
            email: {
                primaryKey: true,
                type: Sequelize.STRING
            },
            username: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users');
    }
};