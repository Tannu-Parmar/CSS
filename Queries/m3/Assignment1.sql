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
VALUES (1, '2013-02-01 12.00.00', 5000), (2, '2013-02-01 12.00.00', 3000), (3, '2013-02-01 12.00.00', 4000), (3, '2013-02-01 12.00.00', 4000), (4, '2013-01-01 12.00.00', 4500), (2, '2013-01-01 12.00.00', 3500);

-- 1. Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table

SELECT
    *,
    ABS(
        DATEDIFF(
            i.`INCENTIVE_DATE`,
            e.`JOINING_DATE`
        )
    ) as 'DATE_DIFFERENCE'
FROM `Employee` e
    RIGHT JOIN `Incentives` i ON e.`EMPLOYEE_ID` = i.`EMPLOYEE_REF_ID`;

-- 2. Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000

SELECT
    e.`FIRST_NAME`,
    i.`INCENTIVE_AMOUNT`
FROM `Employee` e
    JOIN `Incentives` i ON e.`EMPLOYEE_ID` = i.`EMPLOYEE_REF_ID`
WHERE
    i.`INCENTIVE_AMOUNT` > 3000;

-- 3. Select first_name, incentive amount from employee and incentives table for all employees even if they didn't get incentives.

SELECT
    e.`FIRST_NAME`,
    i.`INCENTIVE_AMOUNT`
FROM `Employee` e
    LEFT JOIN `Incentives` i ON e.`EMPLOYEE_ID` = i.`EMPLOYEE_REF_ID`;

-- 4. Select EmployeeName, ManagerName from the employee table.

SELECT
    e2.`FIRST_NAME`,
    e1.`FIRST_NAME`
FROM `Employee` e1
    JOIN `Employee` e2 ON e1.`EMPLOYEE_ID` = e2.`MANAGER_ID`;

-- 5. Select first_name, incentive amount from employee and incentives table for all employees even if they didn't get incentives and set incentive amount as 0 for those employees who didn't get incentives.

SELECT
    e.`FIRST_NAME`,
    IF(
        i.`INCENTIVE_AMOUNT` IS NULL,
        0,
        i.`INCENTIVE_AMOUNT`
    )
FROM `Employee` e
    LEFT JOIN `Incentives` i ON e.`EMPLOYEE_ID` = i.`EMPLOYEE_REF_ID`;

-- 6. Get department,total salary with respect to a department from employee table.

select
    `DEPARTMENT`,
    SUM(`SALARY`) as 'Total_Salary'
FROM `Employee`
GROUP BY `DEPARTMENT`;

-- 7. Get department,total salary with respect to a department from employee table order by total salary descending

select
    `DEPARTMENT`,
    SUM(`SALARY`) as 'Total_Salary'
FROM `Employee`
GROUP BY `DEPARTMENT`
ORDER BY Total_Salary DESC;

-- 8. Get department wise maximum salary from employee table order by salary ascending

select
    `DEPARTMENT`,
    MAX(`SALARY`) as 'Maximum_Salary'
FROM `Employee`
GROUP BY `DEPARTMENT`
ORDER BY Maximum_Salary;

-- 9. Get department wise minimum salary from employee table order by salary ascending

select
    `DEPARTMENT`,
    MIN(`SALARY`) as 'Maximum_Salary'
FROM `Employee`
GROUP BY `DEPARTMENT`
ORDER BY Maximum_Salary;

-- 10. Select department,total salary with respect to a department from employee table where total salary greater than 800000 order by Total_Salary descending

select
    `DEPARTMENT`,
    SUM(`SALARY`) AS 'TOTAL_SALARY'
FROM `Employee`
GROUP BY `DEPARTMENT`
HAVING TOTAL_SALARY > 800000
ORDER BY TOTAL_SALARY DESC;

-- SELECT * FROM (

--     SELECT *, DENSE_RANK() OVER (

--             ORDER BY

--                 `SALARY`

--         ) as R

-- FROM `Employee`

-- ) as R WHERE R = 4