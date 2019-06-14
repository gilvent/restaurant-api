const jwtService = require('../../services/jwt-service');
const { models } = require('../../db/models');

let verifyToken = (request, response, next) => {
    let token = request.headers['x-access-token'] || request.headers['authorization'];

    if(!token){
        response.status(400).send({
            error: {
                cause:'Invalid Request',
                message: 'Missing Authorization Header'
            }
        });
    }
    else if(!token.startsWith('Bearer ')){
        response.status(400).send({
            error: {
                cause:'Invalid Request',
                message: 'Missing Bearer in Authorization Header'
            }
        });
    }
    else {
        token = token.split(' ')[1];
        let decodedToken = jwtService.verify(token);

        if(decodedToken.error){
            return response.status(401).send({
                error: {
                    cause:'Unauthorized Request',
                    message: decodedToken.error
                }
            });
        }
        else {
            models.User.findOne({where: {email: decodedToken.email}}).then(
                (user)=> {
                    if(user){
                        request.user = user;
                        next();
                    }
                    else if(!user){
                        return response.status(401).send({
                            error: {
                                cause:'Unauthorized Request',
                                message: "No user associated with the token"
                            }
                        });
                    }
                }
            );
        }

    }
}

module.exports = {
    verifyToken
}