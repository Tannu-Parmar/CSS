-- Active: 1680610751997@@radixusers3.com@3306@tamanna_parmar1
-- 1. Write a query that displays the first name and the length of the first name for all employees whose name starts with the letters 'A', 'J' or 'M'. Give each column an appropriate label. Sort the results by the employees' first names. 
        SELECT `FIRST_NAME`, LENGTH(`FIRST_NAME`) as 'LENGTH'
        from `Employee`
        WHERE
            `FIRST_NAME` LIKE 'A%'
            OR `FIRST_NAME` LIKE 'J%'
            OR `FIRST_NAME` LIKE 'M%'
        ORDER BY(`FIRST_NAME`);


        -- 2. Write a query to display the first name and salary for all employees. Format the salary to be 10 characters long, left-padded with the $ symbol. Label the column SALARY. 
        SELECT `FIRST_NAME`, LPAD(`SALARY`, 10, '$') as 'SALARY' FROM `Employee`;


        -- 3. Write a query to display the employees with their code, first name, last name and hire date who hired either on seventh day of any month or seventh month in any year.
        SELECT
            `EMPLOYEE_ID`,
            `FIRST_NAME`,
            `LAST_NAME`,
            `JOINING_DATE`
        from `Employee`
        WHERE
            MONTH(`JOINING_DATE`) = 2
            AND DAY(`JOINING_DATE`) = 1;


        -- 4. Write a query to display the length of first name for employees where last name contain character 'c' after 2nd position.
        SELECT
            `EMPLOYEE_ID`,
            `FIRST_NAME`,
            `LAST_NAME`,
            LENGTH(`LAST_NAME`) as 'LENGTH'
        from `Employee`
        WHERE `FIRST_NAME` LIKE '__%c%';


        --  5. Write a query to extract the last 4 character of phone numbers. 
        ALTER TABLE `Employee` ADD COLUMN Phone_number varchar(50);
        UPDATE `Employee` SET Phone_number = "1234567889" WHERE EMPLOYEE_ID = 8;
        SELECT SUBSTR(`Phone_number`,7,4) AS NUMBER FROM `Employee`;



       -- 6. Write a query to update the portion of the phone_number in the employees table, within the phone number the substring '124' will be replaced by '999'.
        UPDATE `Employee` SET `Phone_number` = REPLACE(`Phone_number`,'124','999');UPDATE `Employee` SET `Phone_number` = REPLACE(`Phone_number`,'124','999');


        -- 7. Write a query to calculate the age in year. 
        SELECT *,
            CONCAT(
                YEAR(now()) - YEAR(`JOINING_DATE`),
                "Y",
                " ",
                MONTH(now()) - MONTH(`JOINING_DATE`),
                "M",
                " ",
                DAY(now()) - DAY(`JOINING_DATE`),
                "D"
            ) as 'AGE'
        FROM `Employee`;


        --  8. Write a query to get the distinct Mondays from hire_date in employees tables. 
        SELECT *, DAYNAME(`JOINING_DATE`) as 'DAY'
        from `Employee`
        WHERE DAYNAME(`JOINING_DATE`) = 'Monday';


        -- 9. Write a query to get the first name and hire date from employees table where hire date between '1987-06-01' and '1987-07-30'
        SELECT
            `FIRST_NAME`,
            `JOINING_DATE`
        FROM `Employee`
        WHERE DATE(`JOINING_DATE`) BETWEEN '2013-01-01' AND '2013-01-29';


        --  10. Write a query to display the current date in the following format. 11. Sample output : 12:00 AM Sep 5, 2014
            SELECT *,
            CONCAT(
                SUBSTR(TIME(`JOINING_DATE`), 1, 5),
                " ",
                'AM',
                " ",
                SUBSTRING(
                    MONTHNAME(`JOINING_DATE`),
                    1,
                    3
                ),
                " ",
                DAY(`JOINING_DATE`),
                ",",
                " ",
                YEAR(`JOINING_DATE`)
            ) as 'DATE'
            FROM `Employee`;


        -- 12. Write a query to get the firstname, lastname who joined in the month of June.
        SELECT
            `FIRST_NAME`,
            `LAST_NAME`
        FROM `Employee`
        WHERE MONTHNAME(`JOINING_DATE`) = 'January';


        -- 13. Write a query to get employee ID, last name, and date of first salary of the employees.
        SELECT
            `EMPLOYEE_ID`,
            `LAST_NAME`,
             DATE_ADD(
                `JOINING_DATE`,
                INTERVAL 1 MONTH
            ) as 'First Salary Date'
        from `Employee`;


        -- 14. Write a query to get first name, hire date and experience of the employees.
        SELECT
            `FIRST_NAME`,
            `JOINING_DATE` as 'Hire Date',
            CONCAT(
                SUBSTRING(DATEDIFF(NOW(), `JOINING_DATE`) / 365,1,4),
                " ",
                "Years"
            ) as 'Experience'
        FROM `Employee`;


        -- 15. Write a query to get first name of employees who joined in 1987. 
        SELECT `FIRST_NAME` FROM `Employee`
        WHERE YEAR(`JOINING_DATE`) = '2013';


        -- 16. Write a query to rank employees based on their salary for a month
        SELECT *,
            DENSE_RANK() OVER (
                PARTITION BY `JOINING_DATE`
                ORDER BY
                    `SALARY` DESC
            ) `SALARY`
        from `Employee`;


        -- 17. Select 4th Highest salary from employee table using ranking function
        SELECT *, IF(
        DENSE_RANK() OVER (ORDER BY `SALARY`) = 4,
        4,
        0
        ) as 'Ranking'
        FROM `Employee`
        ORDER BY Ranking DESC
        LIMIT 1;