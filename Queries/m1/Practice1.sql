use Module1;

CREATE TABLE
    Module1.countries (
        country_id INT AUTO_INCREMENT,
        country_name VARCHAR(25),
        region_id INT NOT NULL,
        CONSTRAINT check_country check(
            country_name in('Italy', 'India', 'China')
        ),
        CONSTRAINT composite_key PRIMARY KEY(country_id, region_id)
    );

CREATE Table
    Module1.job_history (
        employee_id INT PRIMARY KEY,
        start_date DATETIME DEFAULT NOW(),
        end_date VARCHAR(50),
        job_id INT NOT NULL,
        department_id INT NOT NULL,
        CONSTRAINT date_format CHECK(end_date LIKE '__/__/____')
    );

CREATE Table
    Module1.jobs(
        job_id INT PRIMARY KEY AUTO_INCREMENT,
        job_title VARCHAR(50) DEFAULT '',
        min_salary BIGINT DEFAULT 8000,
        max_salary BIGINT DEFAULT NULL
    );

CREATE TABLE
    Module1.departments(
        department_id INT PRIMARY KEY,
        department_name varchar(25)
    );

CREATE TABLE
    Module1.employees(
        employee_id INT PRIMARY KEY,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        email VARCHAR(50),
        phone_number BIGINT,
        hire_date DATETIME DEFAULT NOW(),
        job_id INT,
        salary BIGINT,
        commission BIGINT,
        manager_id INT,
        department_id INT,
        Foreign Key (department_id) REFERENCES departments(department_id),
        Foreign Key (job_id) REFERENCES jobs(job_id),
        Foreign Key (manager_id) REFERENCES employees(employee_id)
    );