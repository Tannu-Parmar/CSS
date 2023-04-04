-- 1. Write create table syntax for employee table

CREATE TABLE
    Employee (
        EMPLOYEE_ID INT PRIMARY KEY,
        FIRST_NAME VARCHAR(50),
        LAST_NAME VARCHAR(50),
        SALARY BIGINT,
        JOINING_DATE DATETIME,
        DEPARTMENT VARCHAR(50)
    );

insert into Employee
values (
        1,
        "John",
        "Abraham",
        1000000,
        '2013-01-01 12:00:00',
        "Banking"
    ), (
        2,
        "Michael",
        "Clarke",
        800000,
        '2013-01-01 12:00:00',
        "Insurance"
    ), (
        3,
        "Roy",
        "Thomas",
        700000,
        '2013-02-01 12:00:00',
        "Banking"
    ), (
        4,
        "Tom",
        "Jose",
        600000,
        '2013-02-01 12:00:00',
        "Insurance"
    ), (
        5,
        "Jerry",
        "Pinto",
        650000,
        '2013-02-01 12:00:00',
        "Insurance"
    ), (
        6,
        "Philip",
        "Mathew",
        750000,
        '2013-01-01 12:00:00',
        "Services"
    ), (
        7,
        "TestName1",
        "123",
        650000,
        '2013-01-01 12:00:00',
        "Services"
    ), (
        8,
        "TestName2",
        "Lname%",
        600000,
        '2013-02-01 12:00:00',
        "Insurance"
    );

-- 2. Get all employee details from the employee table

select * from `Employee`;

-- 3. Get First_Name, Last_Name from employee table

SELECT `FIRST_NAME`,`LAST_NAME` FROM `Employee`;

-- 4. Get First_Name from employee table using alias name “Employee Name”

SELECT `FIRST_NAME` as 'EMPLOYEE NAME' FROM `Employee`;

-- 5. Get employee details from employee table whose employee name is “John”

SELECT * FROM `Employee` WHERE `FIRST_NAME` = 'John';

-- 6. Get employee details from employee table whose employee name are “John” and “Roy”

SELECT * FROM `Employee` WHERE `FIRST_NAME` IN('John','Roy');

-- 7. Get employee details from employee table whose employee name are not “John” and “Roy”

SELECT * FROM `Employee` WHERE `FIRST_NAME` NOT IN('John','Roy');

-- 8. Get employee details from employee table whose first name starts with 'J'

SELECT * from `Employee` WHERE `FIRST_NAME` LIKE('J%');

-- 9. Get employee details from employee table whose first name contains 'o'

SELECT * FROM `Employee` WHERE `FIRST_NAME` LIKE('%o%');

--  10. Get employee details from employee table whose Salary between 500000 and 800000

SELECT * FROM `Employee` WHERE `SALARY` BETWEEN 500000 AND 800000;

-- 11. Get unique DEPARTMENT from employee table

SELECT `DEPARTMENT` FROM `Employee` GROUP BY `DEPARTMENT`;

-- 12. Select TOP 2 salary from employee table

SELECT * FROM `Employee` ORDER BY `SALARY` DESC LIMIT 2;

--  13. Store the output of below query in common table expression, and then find out the average of their salary

SELECT Month('2017/08/25') AS Month;

WITH AVERAGE_SALARY AS (
        SELECT SALARY
        FROM `Employee`
    )
SELECT AVG(`SALARY`)
FROM AVERAGE_SALARY;

-- 14. Get employee details from employee table whose Salary between 500000 and 800000

SELECT * FROM `Employee` WHERE `SALARY` BETWEEN 500000 AND 800000;

-- 15. Get names of employees from employee table who has '%' in Last_Name.

SELECT * FROM `Employee` WHERE `LAST_NAME` LIKE ('%\%%');

-- 16. Give 10% incentive to each employee, find out the employee whose incentive amount is more than 1lac, using derived table

SELECT *
FROM (
        SELECT
            *, (SALARY * 0.10) as Incentive
        FROM
            `Employee`
    ) as Incentive
WHERE Incentive > 100000;