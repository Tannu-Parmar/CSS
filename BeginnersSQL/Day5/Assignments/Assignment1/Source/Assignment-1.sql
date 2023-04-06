-- Active: 1680610751997@@radixusers3.com@3306@tamanna_parmar4

CREATE TABLE
    Employee (
        EMPLOYEE_ID INT PRIMARY KEY AUTO_INCREMENT,
        FIRST_NAME VARCHAR(50),
        LAST_NAME VARCHAR(50),
        SALARY BIGINT,
        JOINING_DATE DATETIME,
        DEPARTMENT VARCHAR(25),
        MANAGER_ID INT
    );


INSERT INTO `Employee`
VALUES (
        1,
        'John',
        'Abraham',
        1000000,
        '2013-01-01 12.00.00',
        'Banking',
        NULL
    ), (
        2,
        'Michael',
        'Clarke',
        800000,
        '2013-01-01 12.00.00',
        'Insurance',
        1
    ), (
        3,
        'Roy',
        'Thomas',
        700000,
        '2013-02-01 12.00.00',
        'Banking',
        1
    ), (
        4,
        'Tom',
        'Jose',
        600000,
        '2013-02-01 12.00.00',
        'Insurance',
        2
    ), (
        5,
        'Jerry',
        'Pinto',
        650000,
        '2013-02-01 12.00.00',
        'Insurance',
        3
    ), (
        6,
        'Philip',
        'Mathew',
        750000,
        '2013-01-01 12.00.00',
        'Services',
        3
    ), (
        7,
        'TestName1',
        '123',
        650000,
        '2013-01-01 12.00.00',
        'Services',
        2
    ), (
        8,
        'TestName2',
        'Lname%',
        600000,
        '2013-02-01',
        'Insurance',
        2
    );

CREATE TABLE
Incentives (
    EMPLOYEE_REF_ID INT,
    INCENTIVE_DATE DATETIME,
    INCENTIVE_AMOUNT BIGINT,
    Foreign Key (EMPLOYEE_REF_ID) REFERENCES Employee(EMPLOYEE_ID)
);

INSERT INTO `Incentives`
VALUES (
    1, 
    '2013-02-01 12.00.00', 
    5000
), (
    2, 
    '2013-02-01 12.00.00', 
    3000
), (
    3, 
    '2013-02-01 12.00.00', 
    4000
), (
    3, 
    '2013-02-01 12.00.00', 
    4000
), (
    4, 
    '2013-01-01 12.00.00', 
    4500
), (
    2, 
    '2013-01-01 12.00.00', 
    3500
);


-- 1. Create a Store Procedure Select Banking as 'Bank Dept', Insurance as 'Insurance Dept' and Services as 'Services Dept' from employee table 
CREATE PROCEDURE SELECTDEPT() BEGIN 
	SELECT
	    *,
	    CASE
	        WHEN `Department` = "Banking" THEN "Bank Dept"
	        WHEN `Department` = "Insurance" THEN "Insurance Dept"
	        WHEN `Department` = "Services" THEN "Services Dept"
	        ELSE `Department`
	    END as `Department`
	from `Employee`;
	END ; 

CALL SELECTDEPT();


-- 2. Select Employee details from employee table if data exists in incentive table ? 
CREATE PROCEDURE P1()
BEGIN
    SELECT * FROM Employee WHERE EXISTS(SELECT * FROM `Incentives` WHERE `EMPLOYEE_ID` = `EMPLOYEE_REF_ID`);
END;

CALL P1();


-- 3. Find Salary of the employee whose salary is more than Roy Salary 
CREATE PROCEDURE P2()
BEGIN
    SELECT * from Employee WHERE `SALARY` > (SELECT `SALARY` FROM Employee WHERE `FIRST_NAME` = 'Roy');
END;

CALL P2();


-- 4. Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount 
CREATE PROCEDURE P3()
BEGIN
    CREATE View p3 AS SELECT e.`FIRST_NAME`,e.`LAST_NAME`,e.`SALARY`,e.`JOINING_DATE`,i.`INCENTIVE_DATE`,i.`INCENTIVE_AMOUNT` FROM
    `Employee` e JOIN `Incentives` i ON e.`EMPLOYEE_ID` = i.`EMPLOYEE_REF_ID`;
END;

CALL `P3`();
SELECT * from p3;


--  5. Create a view to select Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000
CREATE PROCEDURE P4()
BEGIN
    CREATE View p4 AS SELECT e.`FIRST_NAME`,i.`INCENTIVE_AMOUNT` FROM
    `Employee` e JOIN `Incentives` i ON e.`EMPLOYEE_ID` = i.`EMPLOYEE_REF_ID` 
    WHERE `INCENTIVE_AMOUNT` > 3000
    ;
END;

CALL `P4`();
SELECT * from p4