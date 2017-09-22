var tableModel = require('../models/server.model.js'),
connection = require('../../config/env/env.js');
connection = require('../services/server.service.js').connection;

exports.fetchEmployDataAPI = function (req, res) {
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
exports.InsertEmployDataAPI = function (req, res) {    
    var name = req.body.name, price = req.body.price, imageUrl = req.body.imageUrl;
    var query = 'INSERT INTO employee(`accountId`,`description`,`cashAmountType`,`cashAmount`, `minCashAmount`, ' +
                ' `isDeleted`,`createdDate`,`createdBy`,`editedDate`,`editedBy`) '+
                 ' VALUES ( '+req.body.name+','+req.body.price+')';
   //queryData = queryData + 0 + ',"' + inputData.createdDate + '","' + inputData.createdBy + '","' + inputData.editedDate + '","' + inputData.editedBy + '"';
   // query = query + queryData + ') ';

    connection.query(query, function (err, data) {
    if (err) {
        console.log(err, 'Error in creating table');
        res.send(err);
    } else {
        res.send(data);
    }
    });
    };
