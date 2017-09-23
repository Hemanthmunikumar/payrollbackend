var tableModel = require('../models/server.model.js'),
connection = require('../../config/env/env.js');
connection = require('../services/server.service.js').connection;

exports.fetchEmployDataAPI = function (req, res) {
var query1 = "select * from employee";
connection.query(query1, function (err, data) {
if (err) {
    console.log(err, 'Error while getting employee');
    res.send(err);
} else {
    res.send(data);
}
});
};
exports.InsertEmployDataAPI = function (req, res) {  
    if(req.body.aboutUs==undefined){req.body.aboutUs='';}  
    
    var name = req.body.name, price = req.body.price, imageUrl = req.body.imageUrl;
    var query = 'INSERT INTO employee(`Name`,`FatherName`,`MobileNo`, `Email`, ' +
                 '`Department`,`Address`,`DateofBirth`,`DateofJoin`, `DateofReleave`, ' +
                 '`Experience`,`Designation`,`IDProofs`,`AboutUs`, `isActive`) ' +
                // ' `isDeleted`,`createdDate`,`createdBy`,`editedDate`,`editedBy`) '+
                 ' VALUES ( "'+req.body.name+'","'+req.body.fatherName+'","'+req.body.mobileNo+
                 '","'+req.body.email+'","'+req.body.department+'","'+req.body.address+'","'+new Date(req.body.dateofBirth).toISOString().replace(/T/, ' ').replace(/\..+/, '')+
                 '","'+new Date(req.body.dateofJoin).toISOString().replace(/T/, ' ').replace(/\..+/, '')+'","'+new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')+'","'+req.body.experience+'","'+req.body.designation+
                 '","'+req.body.idProofs+'","'+req.body.aboutUs+'",'+req.body.isActive+
                // ','+req.body.isDeleted+ ','+req.body.password+','+req.body.password+','+req.body.password+','+req.body.password+
                 
                 
                 ')';
   //queryData = queryData + 0 + ',"' + inputData.createdDate + '","' + inputData.createdBy + '","' + inputData.editedDate + '","' + inputData.editedBy + '"';
   // query = query + queryData + ') ';

    connection.query(query, function (err, data) {
    if (err) {
        console.log(err, 'Error while insert employee.');
        res.send(err);
    } else {
        res.send(data);
    }
    });
    };
