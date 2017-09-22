var tableModel = require('../models/server.model.js'),
        connection = require('../../config/env/env.js');
connection = require('../services/server.service.js').connection;

exports.testAPI = function (req, res) {
    res.send('Hello Test API data..!');
};

exports.testDbDataAPI = function (req, res) {

    var query = "select * from " + tableModel.tableName;
    var query = "CREATE TABLE " + tableModel.tableName + "(" + tableModel.id + " int primary key, " + tableModel.name + " varchar(255), " + tableModel.age + " int, " + tableModel.address + " text)";
    connection.query(query, function (err, data) {
        if (err) {
            console.log(err, 'Error in creating table');
            res.send(err);
        } else {
            console.log('Created Table Successfully!!!');
            res.send(data);
        }
    });
    res.send('Hello Test API data..!');
};

exports.fetchDBDataAPI = function (req, res) {

    var query1 = "select * from employee";
    connection.query(query1, function (err, data) {
        if (err) {
            console.log(err, 'Error in creating table');
            res.send(err);
        } else {
            res.send(data);
        }
    });
};