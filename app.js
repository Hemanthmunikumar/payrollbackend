'use strict';

var express = require('express'),
        bodyparser = require('body-parser'),
        morgan = require('morgan'),
        cors = require('cors'),
        port = 3000,
        app = express(),
        dbConnection = '';


app.use(bodyparser.json());
app.use(morgan('dev'));
app.use(cors());
//gives the static pages access
app.use(express.static(__dirname + '/public'));
//requiring the routes
require('./app/services/server.service.js');
require('./app/routes/server.routes.js')(app);

app.listen(port, function () {
    console.log('Server on port', port);
});

module.exports.app = app;