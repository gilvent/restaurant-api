const { models } = require('../../db/models');

/**
 * Summary. Middleware to authorize collaborators.
 * 
 * Description. Must be used after jwt-auth in middleware chain. 
 * Authorization will pass if user is owner or collaborator of the resource.
 * 
 */
let collaboratorAuthorization = async (request,response,next) => {
    
    let collection = await models.Collection.findOne({
        where: {
            collection_id: request.params.collectionId
        },
        include: 'collaborators'
    });

    if(request.user.email == collection.userEmail){
        next();
    }
    else {
        let isCollaborator = collection.collaborators.find(
            collaborator => collaborator.userEmail == request.user.email);
        if(isCollaborator){
            next();
        }
        else {
            return response.status(403).send({
                error: {
                    cause: "Forbidden Action",
                    message: "User is not a collaborator to this collection"
                }
            });
        }
        
    }

}

module.exports = collaboratorAuthorization;