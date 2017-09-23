var connection = require('../../config/env/env.js');
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
    
    var query = 'INSERT INTO employee(`Name`,`FatherName`,`mobileNo`, `Email`, ' +
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

    exports.loginEmployDataAPI = function (req, res) {  
        if(req.body.password==undefined){req.body.password='';}         
        
        var query ='select * from employee where password="'+req.body.password +'" and (name="'+req.body.name
                    +'" or mobileNo="'+req.body.name+'")';
    
        connection.query(query, function (err, data) {
        if (err) {
            console.log(err, 'Error while login employee.');
            res.send(err);
        } else {
        console.log(data);
            res.send(data);
        }
        });
        };


        exports.fetchEmployeedatailsDataAPI = function (req, res) {  
            var query ='select * from employee where empId="'+req.body.empId +'" ';        
            connection.query(query, function (err, data) {
            if (err) {
                console.log(err, 'Error while employee details.');
                res.send(err);
            } else {
                res.send(data);
            }
            });
            };
