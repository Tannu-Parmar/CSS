ALTER TABLE job_history
ADD
    CONSTRAINT fk_job_id Foreign Key (job_id) REFERENCES jobs(job_id);

ALTER TABLE job_history DROP CONSTRAINT fk_Job_id;

ALTER TABLE job_history ADD COLUMN location varchar(35);