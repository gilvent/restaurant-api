const { models } = require('../../db/models');
const jwtService = require('../../services/jwt-service');
const bcryptService = require('../../services/bcrypt-service');
const { body } = require('express-validator/check');

const signInValidators = [
    body('email')
        .exists().withMessage('Missing email field in body')
        .isEmail().withMessage('Specified field is not an email'),
    body('password')
        .exists().withMessage('Missing password field in body')
];

const signIn = async (request, response) => {
    let user = await models.User.findOne(
        { where: { email: request.body.email } }   
    );
    if(user){
        bcryptService.compare(request.body.password,user.password).then(res => {
            if(res){
                let token = jwtService.sign({
                    email: user.email,
                    username: user.username,
                    password: user.password
                });
                response.status(200).send({
                    data: {
                        email: user.email,
                        username: user.username,
                        token
                    }
                })
            }
            else {
                response.status(200).send({
                    error: {
                        cause: "Invalid password",
                        message: "Wrong password"
                    }
                });
            }
        })

    }
    else {
        response.status(200).send({
            error: {
                cause: "Invalid email",
                message: "Email is not registered"
            }
        });
    }
}

const verifyToken = (request,response) => {
    response.status(200).send({
        data: {
            username: request.user.username,
            email: request.user.email
        }
    });
}

module.exports = {
    signIn,
    signInValidators,

    verifyToken
}

