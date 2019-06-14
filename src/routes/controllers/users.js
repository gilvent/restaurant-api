const { models } = require('../../db/models');
const jwtService = require('../../services/jwt-service');
const bcryptService = require('../../services/bcrypt-service');
const { body } = require('express-validator/check');

const getUserByUsername = async (request,response) => {
    let user = await models.User.findOne({
        where: {
            username: request.params.username
        },
        attributes: { exclude: ['password'] }
    });

    response.status(200).send({
        data: user
    })
}

const createUserValidators = [
    body('email')
        .exists().withMessage('Missing email field in body')
        .isEmail().withMessage('Specified field is not an email'),
    body('username')
        .exists().withMessage('Missing username field in body'),
    body('password')
        .exists().withMessage('Missing password field in body')
];

const createUser = async (request,response) => {
    let user = await models.User.findOne({
        where: {
            email: request.body.email
        }
    });
    if(user){
        return response.status(200).send({
            error: {
                name: "Invalid Email",
                message: "Email is used already"
            }
        });
    }
    
    let userByName = await models.User.findOne({
        where: {
            username: request.body.username
        }
    });
    if(userByName){
        return response.status(200).send({
            error: {
                name: "Invalid Username",
                message: "Username is used already"
            }
        });
    }
    bcryptService.hash(request.body.password).then(async hash => {
        let newUser = await models.User.create({
            email: request.body.email,
            username: request.body.username,
            password: hash
        });
        let token = jwtService.sign({
            email: newUser.email,
            username: newUser.username,
            password: newUser.password
        });
        return response.status(200).send({
            data: {
                email: newUser.email,
                username: newUser.username,
                token
            }
        });
    });
    
    
    
}


module.exports = {
    getUserByUsername,

    createUser,
    createUserValidators
}