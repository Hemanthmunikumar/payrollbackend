var connection = require('../../config/env/env.js');
connection = require('../services/server.service.js').connection;
var jwt = require('jsonwebtoken');
exports.fetchEmployDataAPI = function (req, res) {
    if (req.user) {
        var query1 = "select * from employee";
        connection.query(query1, function (err, data) {
            if (err) {
                console.log(err, 'Error while getting employee');
                res.send(err);
            } else {
                res.send(data);
            }
        });
    }
    else {
        res.status = 404;
        res.send({ message: "Unauthrized user. please login...." });
    }
};
exports.InsertEmployDataAPI = function (req, res) {
    if (req.body.aboutUs == undefined) { req.body.aboutUs = ''; }

    var query = 'INSERT INTO employee(`Name`,`FatherName`,`mobileNo`, `Email`, ' +
        '`Department`,`Address`,`DateofBirth`,`DateofJoin`, `DateofReleave`, ' +
        '`Experience`,`Designation`,`IDProofs`,`AboutUs`, `isActive`) ' +
        // ' `isDeleted`,`createdDate`,`createdBy`,`editedDate`,`editedBy`) '+
        ' VALUES ( "' + req.body.name + '","' + req.body.fatherName + '","' + req.body.mobileNo +
        '","' + req.body.email + '","' + req.body.department + '","' + req.body.address + '","' + new Date(req.body.dateofBirth).toISOString().replace(/T/, ' ').replace(/\..+/, '') +
        '","' + new Date(req.body.dateofJoin).toISOString().replace(/T/, ' ').replace(/\..+/, '') + '","' + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + '","' + req.body.experience + '","' + req.body.designation +
        '","' + req.body.idProofs + '","' + req.body.aboutUs + '",' + req.body.isActive +
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
    console.log(req.body.password);
    if (req.body.password == undefined) { req.body.password = ''; }

    var query = 'select * from employee where password="' + req.body.password + '" and (name="' + req.body.name
        + '" or mobileNo="' + req.body.name + '")';

    connection.query(query, function (err, data) {
        if (err) {
            console.log(err, 'Error while login employee.');
            res.send(err);
        } else {
            var response ={};
            if(data.length == 0){
                response.status = false;
                response.data = {}
            }
            else{
                response.status = true;
                                // res.json({token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id}, 'RESTFULAPIs')});
                response.data = {token: jwt.sign({ email: data[0].email, fullName: data[0].name, _id: data[0].id}, 'RESTFULAPIs')};
                
            }
            
            debugger;
            res.send(response);
        }
    });
};


exports.fetchEmployeedatailsDataAPI = function (req, res) {
    var query = 'select * from employee where empId="' + req.params.empid + '" ';
    //var query ='select * from employee';        
    connection.query(query, function (err, data) {
        if (err) {
            console.log(err, 'Error while employee details.');
            res.send(err);
        } else {
            res.send(data[0]);
        }
    });
};
