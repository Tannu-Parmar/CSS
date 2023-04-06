-- Active: 1680610751997@@radixusers3.com@3306@tamanna_parmar

-- #Alter Table Practice Exercise

-- 1. Write a SQL statement to add a foreign key constraint named fk_job_id on job_id column of job_history table referencing to the primary key job_id of jobs table.
ALTER TABLE 
ADD
Foreign Key (job_id) REFERENCES job(job_id);


-- 2. Write a SQL statement to drop the existing foreign key fk_job_id from job_history table on job_id column which is referencing to the job_id of jobs table.
ALTER TABLE job_history DROP CONSTRAINT fk_Job_id;


-- 3. Write a SQL statement to add a new column named location to the job_history table.
ALTER TABLE job_history ADD COLUMN location varchar(35);