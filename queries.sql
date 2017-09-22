/*create database payroll*/
use payroll;

CREATE TABLE employee_seq
(
  EmpId INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);
CREATE TABLE employee
(
  Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  EmpId VARCHAR(7) NOT NULL DEFAULT '0',
  Name VARCHAR(50),
  Password VARCHAR(50),
  FatherName VARCHAR(50),
  MobileNo VARCHAR(50),
  Email VARCHAR(70),
  Department INT,
  Address VARCHAR(255),
  DateofBirth DATETIME ,
  DateofJoin DATETIME DEFAULT CURRENT_TIMESTAMP,
  DateofReleave DATETIME,
  Experience VARCHAR(50),
  Designation INT,
  IDProofs VARCHAR(255),
  AboutUs VARCHAR(255),
  isActive bit DEFAULT 0,
  CreatedDate DATETIME DEFAULT CURRENT_TIMESTAMP,
  CretedBy VARCHAR(50) ,
  ModifiedDate DATETIME ON UPDATE CURRENT_TIMESTAMP ,
  ModifiedBy VARCHAR(50)
);

DELIMITER $$
CREATE TRIGGER tg_employee_insert
BEFORE INSERT ON employee
FOR EACH ROW
BEGIN
  INSERT INTO employee_seq VALUES (NULL);
  SET NEW.EmpId = CONCAT('EMP', LPAD(LAST_INSERT_ID(), 4, '0'));
END$$
DELIMITER ;

/*INSERT INTO employee (name,MobileNo,Password) 
VALUES ('Admin','9999999999','123');

UPDATE employee SET password='123' where id=1
drop table employee
select * from employee */
