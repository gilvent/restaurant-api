const { body } = require('express-validator/check');

const {MailgunTransport} = require('../../config/mailgun');
const { FrontEndURL } = require('../../config/app');

const inviteCollabValidator = [
    body('targetEmail')
        .exists().withMessage('Missing targetEmail field in body'),
    body('collectionName')
        .exists().withMessage('Missing collectionName field in body'),
    body('collectionId')
        .exists().withMessage('Missing collectionId field in body')
];
const inviteCollaboration = (request, response) => {
    MailgunTransport.sendMail({
        from: request.user.email,
        to: request.body.targetEmail,
        subject: 'Invitation to Collaborate',
        template: {
            name: 'src/email-template/collaboration-invitation.hbs',
            engine: 'handlebars',
            context: {
                username: request.user.username,
                email: request.user.email,
                collectionName : request.body.collectionName,
                collectionUrl : `${FrontEndURL}/${request.user.username}/collection/${request.body.collectionId}` 
            }
        }

      }, (err, info) => {
        if (err) {
            response.status(500).send({error: 'Error when sending email', message: err})
        }
        else {
            response.status(200).send({data: info})
        }
    })
}

module.exports = {
    inviteCollaboration,
    inviteCollabValidator
}