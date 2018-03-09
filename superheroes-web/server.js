/* globals __dirname */

// built-in modules
const path = require('path');

// npm modules
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// app modules
const data = require('./data');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

app.set('view engine', 'pug');

// http://localhost:3001/superheroes

// require('./routes/superhero.routes') -> app
require('./routes').init(app, data);


app.listen(3001);