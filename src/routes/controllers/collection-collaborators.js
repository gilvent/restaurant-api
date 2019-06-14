const { models } = require('../../db/models');
const { body, param } = require('express-validator/check');

let getCollaborators = async (request,response) => {
    const collaboration = await models.CollectionCollaborator.findAll({
        where: {
            collectionId: request.params.collectionId
        },
        include: {
            model: models.User, 
            as: 'collaborator',
            attributes: { exclude: ['password'] }
        },
    });
    response.status(200).send({
        data: {
            username: request.params.username,
            collectionId : request.params.collectionId,
            collaborators: collaboration.map(x => x.collaborator).filter(user => user != null),
            noAccount: collaboration.filter(y => y.collaborator==null).map(x => x.userEmail)
        }
    });
}

const addValidators = [
    body('email')
        .exists().withMessage('Missing email field in body')
        .isEmail().withMessage('Specified field is not an email')
];
let addCollaborator = async (request,response) => {
    let collaborator = await models.CollectionCollaborator.findOne({
        where: {
            collectionId: request.params.collectionId,
            userEmail: request.body.email
        }
    });
    if(!collaborator){
        let newCollaborator = await models.CollectionCollaborator.create({
            collectionId: request.params.collectionId,
            userEmail: request.body.email
        });
        response.status(200).send({
            data: newCollaborator
        });
    }else{
        response.status(200).send({
            data: collaborator
        });
    }


}

const deleteValidators = [
    param('collaboratorUsername')
    .exists().withMessage('Missing collaboratorUsername in path')
];
let deleteCollaborator = async (request,response) => {
    let affectedRow = await models.CollectionCollaborator.destroy({
        where: {
            collectionId: request.params.collectionId,
        },
        include: [
            {
                model: models.User,
                as: 'collaborator',
                where: {
                    username: request.params.collaboratorUsername
                }
            }
        ]
    });
    response.status(200).send({
        data: {
            deleted_collaborator: affectedRow
        }
    });
}

module.exports = {
    getCollaborators,
    addCollaborator, addValidators,
    deleteCollaborator, deleteValidators
}