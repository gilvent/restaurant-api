'use strict';
module.exports = {
    up: (queryInterface,Sequelize) => {
        return queryInterface.createTable('collections', {
            collection_id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER
            },
            user_email: {
                type: Sequelize.STRING,
                references: {
                    model: 'users',
                    key: 'email'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                allowNull: false
            },
            collection_name: {
                type: Sequelize.STRING
            },
            updated_by: {
                type: Sequelize.STRING,
            },
            update_time: {
                type: Sequelize.DATE,
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('collections');
    }
}