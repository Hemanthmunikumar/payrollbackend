'use strict';
var apiController = require('../controllers/server.controller.js');
var employapiController = require('../controllers/employ.controller.js');
module.exports = function (app) {
    app.get('/test', apiController.testAPI);
    app.get('/data', apiController.fetchDBDataAPI);
    app.get('/employees', employapiController.fetchEmployDataAPI);
    
}