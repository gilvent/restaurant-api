const express = require('express');
const router = express.Router();

const restaurantsController = require('./controllers/restaurants'); 
const authController = require('./controllers/auth');
const usersController = require('./controllers/users')
const collectionsController = require('./controllers/collections');
const collaboratorsController = require('./controllers/collection-collaborators');
const detailsController = require('./controllers/collection-details');
const weekdaysController = require('./controllers/weekdays');
const emailController = require('./controllers/email');

const { 
    jwtAuth,
    requestLogger,
    requestValidator,
    collectionExists,
    userExists,
    collaboratorAuthorization 
} = require('./middlewares');


router.get('/api',(request,response)=>{
    response.send({ api_version: "v1", message: "Restaurant API Running" })
});

// Global Middleware
router.param('username',userExists);
router.param('collectionId',collectionExists);
router.all('/api/users/:username/*', jwtAuth.verifyToken);

// Auth
router.post('/api/auth/signin', authController.signInValidators, requestValidator, authController.signIn);
router.post('/api/auth/verify',jwtAuth.verifyToken,authController.verifyToken);

// Email 
router.post('/api/email/invite-collaboration',jwtAuth.verifyToken, emailController.inviteCollabValidator,requestValidator ,emailController.inviteCollaboration);

// Users Routes
router.post('/api/users', usersController.createUserValidators,requestValidator,usersController.createUser);
router.get('/api/users/:username',usersController.getUserByUsername);

// Collections Routes
router.get('/api/users/:username/collections', collectionsController.getCollections);
router.get('/api/users/:username/collections/:collectionId', collectionsController.getCollectionById);
router.post('/api/users/:username/collections', collectionsController.createValidator,requestValidator,collectionsController.createCollection);
router.put('/api/users/:username/collections/:collectionId', collaboratorAuthorization,collectionsController.editCollection);
router.delete('/api/users/:username/collections/:collectionId', collectionsController.deleteCollection);

// Collection Collaborators Routes
router.get('/api/users/:username/collections/:collectionId/collaborators', 
        collaboratorsController.getCollaborators);
router.post('/api/users/:username/collections/:collectionId/collaborators', 
        collaboratorsController.addValidators, requestValidator, collaboratorsController.addCollaborator);
router.delete('/api/users/:username/collections/:collectionId/collaborators/:collaboratorUsername', 
        collaboratorsController.deleteValidators, requestValidator, collaboratorsController.deleteCollaborator);

// Collection Details Routes
router.get('/api/users/:username/collections/:collectionId/details', 
        collaboratorAuthorization, detailsController.getDetails);
router.post('/api/users/:username/collections/:collectionId/details', 
        collaboratorAuthorization, detailsController.addValidators, requestValidator, detailsController.addDetail);
router.delete('/api/users/:username/collections/:collectionId/details/:restaurantId', 
        collaboratorAuthorization, detailsController.deleteValidators, requestValidator, detailsController.deleteDetail);


// Restaurants Routes
router.get('/api/restaurants', restaurantsController.getRestaurants);

// Weekdays Routes
router.get('/api/weekdays', weekdaysController.getWeekdays);


module.exports = {
    router,
    requestLogger
};