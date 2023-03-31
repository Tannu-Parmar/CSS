interface User {
  id: number;
  name: string;
  city: string;
  doj: Date;
}

let data: User[] = [
  { id: 1, name: "asd", city: "rajkot", doj: new Date(2018, 2, 13) },
  { id: 2, name: "asd1", city: "jamnagar", doj: new Date(2019, 2, 14) },
  { id: 3, name: "asd2", city: "surat", doj: new Date(2020, 2, 15) },
  { id: 4, name: "asd3", city: "surat", doj: new Date(2021, 2, 15) },
  { id: 5, name: "asd4", city: "mumbai", doj: new Date(2022, 2, 15) },
];

function displayEmp(data: Array<User>, tableDiv: string): void {
  let div = document.getElementById(tableDiv) as HTMLElement;
  div.innerHTML = "";
  let table = document.createElement("table");
  let row = "<tr><th>id</th><th>name</th><th>City</th><th>Date</th></tr>";

  data.forEach((e) => {
    row += `<tr><td>${e.id}</td><td>${e.name}</td><td>${e.city}</td><td>${e.doj.toISOString().slice(0, 10)}</td></tr>`;
  });

  table.innerHTML = row;

  div.append(table);
}

function searchEmp(): void {
  let inputEmp = document.getElementById("empId") as HTMLInputElement;
  let id = parseInt(inputEmp.value);
  let emp = data.find((e) => e.id === id);
  let test: any = [emp];
  displayEmp(test, "searchEmpTable");
}

function searchEmpAfter() {
  let emp = data.filter((e) => e.doj.getFullYear() > 2020);
  let test: any = [];
  emp.forEach((e) => {
    test.push(e);
  });
  // console.log(test);
  displayEmp(emp, "afterTable");
}

function searchEmpJoinCity() {
  let emp = data.filter((e) => e.doj.getFullYear() > 2020 && e.city === "mumbai");
  let test: any = [];
  emp.forEach((e) => {
    test.push(e);
  });
  displayEmp(emp, "afterTableJoinCity");
}

displayEmp(data, "app");
