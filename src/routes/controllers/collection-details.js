const { models } = require('../../db/models');
const { body, param } = require('express-validator/check');

let getDetails = async (request,response) => {
    const collectionDetails = await models.CollectionDetail.findAll({
        where: {
            collectionId: request.params.collectionId
        },
        include: 'restaurant'
    });
    response.status(200).send({
        data: {
            collectionId: request.params.collectionId,
            restaurants: collectionDetails.map(x => x.restaurant)
        }
    });
}

const addValidators = [
    body('restaurantId')
        .exists().withMessage('Missing restaurantId field in body')
];
let addDetail = async (request,response) => {
    let newDetail = await models.CollectionDetail.create({
        collectionId: request.params.collectionId,
        restaurantId: request.body.restaurantId
    });
    response.status(200).send({
        data: newDetail
    });
}

const deleteValidators = [
    param('restaurantId')
    .exists().withMessage('Missing restaurantId in path')
];
let deleteDetail = async (request,response) => {
    let affectedRow = await models.CollectionDetail.destroy({
        where: {
            collectionId: request.params.collectionId,
            restaurantId: request.params.restaurantId
        }
    });
    response.status(200).send({
        data: {
            removedDetail: affectedRow
        }
    });
}

module.exports = {
    getDetails,
    addDetail, addValidators,
    deleteDetail, deleteValidators
}