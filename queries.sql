/*create database payroll*/

use payroll;

CREATE TABLE employee_seq
(
  empId INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);
CREATE TABLE employee
(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  empId VARCHAR(7) NOT NULL DEFAULT '0',
  name VARCHAR(50),
  password VARCHAR(50),
  fatherName VARCHAR(50),
  mobileNo VARCHAR(50),
  email VARCHAR(70),
  department INT,
  address VARCHAR(255),
  dateofBirth DATETIME ,
  dateofJoin DATETIME DEFAULT CURRENT_TIMESTAMP,
  dateofReleave DATETIME,
  experience VARCHAR(50),
  designation INT,
  idProofs VARCHAR(255),
  aboutUs VARCHAR(255),
  isActive boolean DEFAULT false,
  isDeleted  boolean DEFAULT false,
  createdDate DATETIME DEFAULT CURRENT_TIMESTAMP,
  cretedBy VARCHAR(50) ,
  modifiedDate DATETIME ON UPDATE CURRENT_TIMESTAMP ,
  modifiedBy VARCHAR(50)
);

DELIMITER $$
CREATE TRIGGER tg_employee_insert
BEFORE INSERT ON employee
FOR EACH ROW
BEGIN
  INSERT INTO employee_seq VALUES (NULL);
  SET NEW.empId = CONCAT('EMP', LPAD(LAST_INSERT_ID(), 4, '0'));
END$$
DELIMITER ;

/*INSERT INTO employee (name,mobileNo,password) 
VALUES ('Admin','9999999999','123');

UPDATE employee SET password='123' where id=1
drop table employee
select * from employee */


CREATE TABLE departments
(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,  
  name VARCHAR(50),
  isActive boolean DEFAULT true,  
  createdDate DATETIME DEFAULT CURRENT_TIMESTAMP,
  cretedBy VARCHAR(50) ,
  modifiedDate DATETIME ON UPDATE CURRENT_TIMESTAMP ,
  modifiedBy VARCHAR(50)
);
CREATE TABLE designation
(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,  
  name VARCHAR(50),
  isActive boolean DEFAULT true,  
  createdDate DATETIME DEFAULT CURRENT_TIMESTAMP,
  cretedBy VARCHAR(50) ,
  modifiedDate DATETIME ON UPDATE CURRENT_TIMESTAMP ,
  modifiedBy VARCHAR(50)
);
/*INSERT INTO designation (name) 
VALUES ('Sales Executive');
drop table designation
select * from designation */

/*INSERT INTO departments (name) 
VALUES ('Sales');
drop table designation
select * from designation */


