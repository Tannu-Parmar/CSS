CREATE TABLE
    Employees(
        employee_id INT PRIMARY KEY,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        email VARCHAR(100),
        phone_number VARCHAR(20),
        fire_date DATE,
        job_title VARCHAR(50),
        commission_rate DECIMAL(5, 2)
    );

CREATE TABLE
    Inventory (
        car_id INT PRIMARY KEY,
        model varchar(50),
        year INT,
        color VARCHAR(20),
        price DECIMAL(10, 2),
        quantity INT
    );

CREATE TABLE
    Sales (
        sales_id INT PRIMARY KEY,
        employee_id INT,
        car_id INT,
        sale_date DATE,
        sale_price DECIMAL(10, 2),
        Foreign Key (employee_id) REFERENCES Employees(employee_id),
        Foreign Key (car_id) REFERENCES Inventory(car_id)
    )