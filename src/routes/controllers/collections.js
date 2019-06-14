const { models } = require('../../db/models');
const { body } = require('express-validator/check');


let getCollections = async (request, response) => {
    const collectionUser = await models.User.findOne({
        where: {
            username: request.params.username
        }
    });
    const collections = await models.Collection.findAll({
        where: {
            userEmail: collectionUser.email
        },
        include: [
            {
                model: models.User,
                as: 'updater',
                attributes: { exclude: 'password' }
            },
            {
                model: models.CollectionCollaborator,
                as: 'collaborators',
                include: {
                    model: models.User,
                    as: 'collaborator'
                }
            },
            {
                model: models.CollectionDetail,
                as: 'details'
            }
        ]
    });

    response.status(200).send({
        data: {
            username: request.params.username,
            collections
        }
    });
}

let getCollectionById = async (request,response) => {
    const collection = await models.Collection.findOne({
        where: {
            collectionId: request.params.collectionId,
        },
        include: {
            model: models.User,
            as: 'user',
            attributes: { exclude: 'password' },
            where : {
                username: request.params.username
            }
        }
    });

    response.status(200).send({
        data: collection
    })
}

const createValidator = [
    body('name')
        .exists().withMessage('Missing name field in body')
];
let createCollection = async (request,response) => {
    let newCollection = await models.Collection.create({
        userEmail: request.user.email,
        collectionName: request.body.name,
        updatedBy: null,
        updateTime: null
    });

    response.status(200).send({
        data: {
            username: request.params.username,
            newCollection: newCollection
        }
    });
}

let editCollection = async (request,response) => {
    const collectionUser = await models.User.findOne({
        where: {
            username: request.params.username
        }
    });

    let updatedCollection = await models.Collection.update(
        {
            collectionName: request.body.name,
            updatedBy: request.user.email,
            updateTime: Date.now()
        },
        {
            where: {
                collectionId: request.params.collectionId,
                userEmail: collectionUser.email
            },
            returning: true
        }
    );
    
    response.status(200).send({
        data: {
            affectedRow: updatedCollection[0],
            username: request.params.username,
            updatedCollection: updatedCollection[1]
        }
    });
}

let deleteCollection = async (request, response) => {
    if(request.user.username == request.params.username){
        let affectedRow = await models.Collection.destroy({
            where: {
                collectionId: request.params.collectionId
            }
        });
        response.status(200).send({
            data: {
                deletedCollection: affectedRow
            }
        });
    }
    else {
        response.status(403).send({
            error: {
                cause: 'Forbidden Request',
                message: 'User is not the owner of collection'
            }
        })
    }
    
}

module.exports = {
    getCollections, getCollectionById,
    createCollection, createValidator,
    editCollection,
    deleteCollection
}