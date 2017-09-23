var tableModel = require('../models/server.model.js'),
connection = require('../../config/env/env.js');
connection = require('../services/server.service.js').connection;

exports.fetchdesignationDataAPI = function (req, res) {
var query1 = "select * from designation";
connection.query(query1, function (err, data) {
if (err) {
    console.log(err, 'Error while getting designations.');
    res.send(err);
} else {
    res.send(data);
}
});
};

exports.fetchdepartmentsDataAPI = function (req, res) {
    var query1 = "select * from departments";
    connection.query(query1, function (err, data) {
    if (err) {
        console.log(err, 'Error while getting departments.');
        res.send(err);
    } else {
        res.send(data);
    }
    });
    };