const express = require('express');
var cors = require('cors')
const expressValidator = require('express-validator');
const env = require('dotenv');
const app = express();

env.config();

const {router,requestLogger} = require('./src/routes');

const PORT = process.env.PORT || 5000;

app.use(cors()); // enable all CORS requests
app.use(express.json()); 
app.use(expressValidator());
app.use(requestLogger);
app.use(router);



app.listen(PORT, () => {
    console.log(`Restaurant API listening on port ${PORT}!`)
});
