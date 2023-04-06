-- Active: 1680610751997@@radixusers3.com@3306@tamanna_parmar


-- 1. Write a SQL statement to create a table named countries including columns country_id, country_name and region_id and make sure that no countries except Italy, India and China will be entered in the table. and combination of columns country_id and region_id will be unique.
CREATE TABLE
    countries(
        country_id INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
        country_name VARCHAR(50),
        region_id int UNIQUE,
        CONSTRAINT `chk_name` check(
            country_name in ("India", "Italy", "China")
        )
    );



-- 2. Write a SQL statement to create a table named job_history including columns employee_id, start_date, end_date, job_id and department_id and make sure that the value against column end_date will be entered at the time of insertion to the format like '--/--/----'.
CREATE TABLE
    job_history(
        employee_id INT NOT NULL,
        start_date DATE NOT NULL,
        end_date DATE NOT NULL,
        job_id VARCHAR(10),
        department_id INT NOT NULL,
        CONSTRAINT `pk-job-h` PRIMARY KEY(employee_id),
        CONSTRAINT `chk-date-fm` CHECK(end_date LIKE '__/__/____')
    );



-- 3. Write a SQL statement to create a table named jobs including columns job_id, job_title, min_salary and max_salary, and make sure that, the default value for job_title is blank and min_salary is 8000 and max_salary is NULL will be entered automatically at the time of insertion if no value assigned for the specified columns.
CREATE TABLE
    job(
        job_id VARCHAR(255) PRIMARY KEY,
        job_title VARCHAR(255) NOT NULL,
        min_salary INT DEFAULT 8000,
        max_salary INT DEFAULT NULL
    );



-- 4. Write a SQL statement to create a table employees including columns employee_id, first_name, last_name, email, phone_number hire_date, job_id, salary, commission, manager_id and department_id and make sure that, the employee_id column does not contain any duplicate value at the time of insertion, and the foreign key column department_id, reference by the column department_id of departments table, can contain only those values which are exists in the departments table and another foreign key column job_id, referenced by the column job_id of jobs table, can contain only those values which are exists in the jobs table.
CREATE TABLE
    employees(
        employee_id INT PRIMARY KEY,
        first_name VARCHAR(255),
        last_name VARCHAR(255),
        email VARCHAR(50) UNIQUE,
        phone_number INT NOT NULL,
        hire_date DATE NOT NULL,
        job_id VARCHAR(10) NOT NULL,
        salary INT NOT NULL,
        commission INT,
        manager_id INT,
        department_id INT NOT NULL,
        FOREIGN KEY(department_id) REFERENCES department(department_id),
        FOREIGN KEY(job_id) REFERENCES job(job_id)
    );



CREATE TABLE department(
        department_id INT PRIMARY KEY,
        department_no INT NOT NULL,
        department_name VARCHAR(100) NOT NULL,
        department_location VARCHAR(100) NOT NULL
    );