'use strict';
var apiController = require('../controllers/server.controller.js');
var employapiController = require('../controllers/employ.controller.js');
var commonapiController = require('../controllers/common.controller.js');
module.exports = function (app) {
    app.get('/test', apiController.testAPI);
    app.get('/data', apiController.fetchDBDataAPI);
    //employee
    app.get('/employees', employapiController.fetchEmployDataAPI);
    app.post('/addemployee', employapiController.InsertEmployDataAPI);
    app.get('/employeedetails', employapiController.fetchEmployeedatailsDataAPI);
    app.post('/loginemployee', employapiController.loginEmployDataAPI);
    
    //departments
    app.get('/departments', commonapiController.fetchdepartmentsDataAPI);
     //designation
     app.get('/designations', commonapiController.fetchdesignationDataAPI);
}