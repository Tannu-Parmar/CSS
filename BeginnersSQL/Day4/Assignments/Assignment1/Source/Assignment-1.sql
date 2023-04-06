-- Active: 1680610751997@@radixusers3.com@3306@tamanna_parmar3
CREATE TABLE
    Employee (
        EMPLOYEE_ID INT PRIMARY KEY AUTO_INCREMENT,
        FIRST_NAME VARCHAR(50),
        LAST_NAME VARCHAR(50),
        SALARY BIGINT,
        JOINING_DATE DATETIME,
        DEPARTMENT VARCHAR(25),
        MANAGER_ID INT,
        City VARCHAR(100)
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


-- 1. Create a view Select Banking as 'Bank Dept', Insurance as 'Insurance Dept' and Services as 'Services Dept' from employee table 
CREATE VIEW VIEW1 AS 
	SELECT
	    `FIRST_NAME`,
	    `LAST_NAME`,
	    CASE
	        WHEN `DEPARTMENT` = 'Banking' THEN 'Bank Dept'
	        WHEN `DEPARTMENT` = 'Insurance' THEN 'Insurance Dept'
	        WHEN `DEPARTMENT` = 'Services' THEN 'Services Dept'
	        ELSE `DEPARTMENT`
	    END as 'DEPARTMENT'
	from `Employee`; 

SELECT * from `VIEW1`;


-- 2. Select employee details from employee table if data exists in incentive table ? 
SELECT *
FROM `Employee` e
WHERE EXISTS (
        SELECT *
        FROM `Incentives` i
        WHERE
            e.`EMPLOYEE_ID` = i.`EMPLOYEE_REF_ID`
);


-- 3. Find Salary of the employee whose salary is more than Roy Salary 
SELECT *
FROM `Employee`
WHERE `SALARY` > (
        SELECT `SALARY`
        FROM `Employee`
        WHERE
            `FIRST_NAME` = 'Roy'
);


-- 4. Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount 
CREATE VIEW VIEW2 AS 
	SELECT
	    e.`FIRST_NAME`,
	    e.`LAST_NAME`,
	    e.`SALARY`,
	    e.`JOINING_DATE`,
	    i.`INCENTIVE_DATE`,
	    i.`INCENTIVE_AMOUNT`
	FROM `Employee` e
	    JOIN `Incentives` i ON e.`EMPLOYEE_ID` = i.
`EMPLOYEE_REF_ID`; 

SELECT * FROM `VIEW2`;


-- 5. Create a view to select Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000
CREATE VIEW VIEW3 AS 
	SELECT
	    e.`FIRST_NAME`,
	    SUM(i.`INCENTIVE_AMOUNT`)
	FROM `Employee` e
	    JOIN `Incentives` i ON e.`EMPLOYEE_ID` = i.`EMPLOYEE_REF_ID`
	GROUP BY e.
`FIRST_NAME`; 

SELECT * FROM VIEW3 ;


-- 6. Create a View to Find the names (first_name, last_name), job, department number, and department name of the employees who work in LondonCreate a view to get the department name and number of employees in the department. 
CREATE VIEW VIEW4 AS 
	SELECT
	    CONCAT(`FIRST_NAME`, " ", `LAST_NAME`) AS 'Name',
	    CASE
	        WHEN `DEPARTMENT` = 'Banking' THEN 1
	        WHEN `DEPARTMENT` = 'Insurance' THEN 2
	        WHEN `DEPARTMENT` = 'Services' THEN 3
	        ELSE 0
	    END as 'Department Number',
	    `DEPARTMENT` as 'Department Name'
	FROM
`Employee`; 

SELECT * FROM `VIEW4`;


--  7. Create a View to get the department name and number of employees in the department. 
CREATE VIEW VIEW5 AS 
	SELECT
	    `DEPARTMENT` as 'Department Name',
	    COUNT(`FIRST_NAME`) as 'No of Employees'
	FROM `Employee`
	GROUP BY
`DEPARTMENT`; 

SELECT * FROM `VIEW5`;



