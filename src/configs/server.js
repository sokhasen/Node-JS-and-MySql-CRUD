const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
/**
* Instance express app
*/
const app = express();

/**
* config port number
*/
app.set('port', process.env.PORT || 3000);

/**
* config middleware
*/
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); 
app.use(cors({ origin: true}));

module.exports = app;