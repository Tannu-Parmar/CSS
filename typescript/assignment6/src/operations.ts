export function sortName(emp: any) {
    let test = emp.sort((a: any, b: any) => a.name.localeCompare(b.name));
    console.log("sortByName", test);
  }
  
  export function sortGender(emp: any) {
    let test = emp.sort((a: any, b: any) => a.gender.localeCompare(b.gender));
    console.log("sortByGender", test);
  }
  
  export function sortBySalary(emp: any) {
    let test = emp.sort((a: any, b: any) => a.salary - b.salary);
    console.log("sortBySalary", test);
  }
  
  export function fillterByGrades(emp: any, grade: string) {
    let test = emp.filter((d: any) => d.grade === grade);
    console.log(test);
  }
  export function fillterByCity(emp: any, city: string) {
    let test = emp.filter((d: any) => d.city === city);
    console.log(test);
  }
  export function salary10To15(emp: any) {
    let test = emp.filter((d: any) => d.salary <= 15000 && d.salary >= 10000);
    console.log(test);
  }
  