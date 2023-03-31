import { sortName, sortGender, sortBySalary, fillterByGrades, fillterByCity, salary10To15 } from "./operations";

interface Emp {
  id: number;
  name: string;
  date: Date;
  gender: string;
  city: string;
  salary: number;
  grade: string;
}

let data: Emp[] = [
  { id: 2, name: "b", date: new Date(2023, 12, 2), city: "rajkot", gender: "female", salary: 10000, grade: "a+" },
  { id: 1, name: "a", date: new Date(2023, 12, 2), city: "vapi", gender: "male", salary: 12000, grade: "b+" },
  { id: 3, name: "c", date: new Date(2023, 12, 2), city: "vadodara", gender: "male", salary: 15000, grade: "b+" },
  { id: 4, name: "d", date: new Date(2023, 12, 2), city: "vapi", gender: "female", salary: 20000, grade: "ac+" },
];
sortName(data);
sortGender(data);
sortBySalary(data);
fillterByGrades(data, "b+");
fillterByCity(data, "vapi");
salary10To15(data);
