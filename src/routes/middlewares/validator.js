const { validationResult } = require('express-validator/check');
const { models } = require('../../db/models');

let requestValidator = (request,response,next) => {
    const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
        return {
            cause: `Invalid ${param}`,
            message: `${msg}`
        };
    };
    const result = validationResult(request).formatWith(errorFormatter);
    if(!result.isEmpty()){
        response.status(400).send({
            error: result.array({onlyFirstError: true})
        });
    }
    else {
        next();
    }
}

let userExists = async (request,response,next) => {
    let user = await models.User.findOne({
        where: {
            username: request.params.username
        }
    });

    if(!user){
        return response.status(404).send({
            error: {
                cause: "Not Found",
                message: "No user with specified username"
            }
        })
    }else {
        next();
    }
}

let collectionExists = async (request,response,next) => {
    let collection = await models.Collection.findOne({
        where: {
            collection_id: request.params.collectionId
        }
    });

    if(!collection){
        return response.status(404).send({
            error: {
                cause: "Not Found",
                message: "No collection with specified collection id"
            }
        })
    }else {
        next();
    }
}


module.exports = {
    requestValidator,
    userExists,
    collectionExists
};