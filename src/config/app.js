const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  AppSecret: process.env.APP_SECRET,
  FrontEndURL: process.env.FRONT_END_URL
};