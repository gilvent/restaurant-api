'use strict';
module.exports = {
    up: (queryInterface,Sequelize) => {
        return queryInterface.createTable('collection_collaborators', {
            collection_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'collections',
                    key: 'collection_id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            user_email: {
                type: Sequelize.STRING,
                allowNull: false
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('collection_collaborators');
    }
}