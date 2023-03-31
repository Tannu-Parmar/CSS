import "./style.css";
import "./script";
import { JobVacancyManager } from "./system/JobVacancyManager";

const jobVacancyManager = new JobVacancyManager();

jobVacancyManager.createVacancy({
  title: "Software Engineer",
  description: "Develop software applications",
  location: "New York",
  salary: 100000,
  datePosted: new Date(),
});

jobVacancyManager.createApplicant({
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "555-555-5555",
  appliedDate: new Date(),
  status: "applied",
});

jobVacancyManager.scheduleInterview(1, {
  date: new Date(),
  location: "New York",
  interviewer: "Jane Smith",
});

jobVacancyManager.recordInterviewResult(1, "pass");

const applicants = jobVacancyManager.getApplicants();
console.log(applicants);
console.log(jobVacancyManager);
