'use strict';

var express = require('express'),
        bodyparser = require('body-parser'),
        querystring = require('querystring'),
        morgan = require('morgan'),
        cors = require('cors'),
        port = 3000,
        app = express(),
        dbConnection = '',
        jwt = require('jsonwebtoken');

//app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyparser.json());
app.use(morgan('dev'));
app.use(cors());
//gives the static pages access
app.use(express.static(__dirname + '/public'));

//middleware
app.use(function(req,res,next){
    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT'){
        jwt.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(error, decode){
            req.user = decode;
            next();
        });
    }
    else{
        req.user = undefined;
        next();
    }
});
//requiring the routes
require('./app/services/server.service.js');
require('./app/routes/server.routes.js')(app);

app.listen(port, function () {
    console.log('Server on port', port);
});

module.exports.app = app;