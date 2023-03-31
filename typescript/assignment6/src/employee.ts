export class Employee implements Employee {
    id: number;
    name: string;
    date: Date;
    gender: string;
    salary: number;
    grade: string;
  
    constructor(id: number, name: string, date: Date, gender: string, salary: number, grade: string) {
      this.id = id;
      this.name = name;
      this.date = date;
      this.gender = gender;
      this.salary = salary;
      this.grade = grade;
    }
  }
  