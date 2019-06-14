
'use strict';
module.exports = {
    up: (queryInterface,Sequelize) => {
        return queryInterface.createTable('collection_details', {
            collection_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'collections',
                    key: 'collection_id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            restaurant_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'restaurants',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            }
        }).then(()=>queryInterface.addConstraint('collection_details', ['collection_id', 'restaurant_id'], {
            type: 'primary key',
            name: 'collection_details_pkey'
          }));
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('collection_details');
    }
}