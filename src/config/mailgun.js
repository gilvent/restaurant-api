let nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');
const dotenv = require('dotenv');
dotenv.config();

const mailgunOptions = {
    auth: {
      api_key: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN
    }
}
  
module.exports = {
    MailgunTransport : nodemailer.createTransport(mg(mailgunOptions))
} 