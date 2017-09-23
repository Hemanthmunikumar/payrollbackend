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
    var query = 'INSERT INTO employee(`Name`,`Password`,`FatherName`,`MobileNo`, `Email`, ' +
                 '`Department`,`Address`,`DateofBirth`,`DateofJoin`, `DateofReleave`, ' +
                 '`Experience`,`Designation`,`IDProofs`,`AboutUs`, `isActive`, ' +
                // ' `isDeleted`,`createdDate`,`createdBy`,`editedDate`,`editedBy`) '+
                 ' VALUES ( '+req.body.name+','+req.body.password+','+req.body.fatherName+','+req.body.mobileNo+
                 ','+req.body.email+','+req.body.department+','+req.body.address+','+req.body.dateofBirth+
                 ','+req.body.dateofJoin+','+req.body.dateofReleave+','+req.body.experience+','+req.body.designation+
                 ','+req.body.idProofs+','+req.body.aboutUs+','+req.body.isActive+
                // ','+req.body.isDeleted+ ','+req.body.password+','+req.body.password+','+req.body.password+','+req.body.password+
                 
                 
                 ')';
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
