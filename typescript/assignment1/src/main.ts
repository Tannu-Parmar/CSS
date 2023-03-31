interface Employee{
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  salary: number;
}

let employees: Employee[] = [
{
  id: 1,
  firstName: "Tannu",
  lastName: "Parmar",
  address: "Isanpur Ahmedabad",
  salary: 100000,
},
{
  id: 2,
  firstName: "Divya",
  lastName: "Maru",
  address: "Ghodasar Ahmedabad",
  salary: 80000,
},
{
  id: 3,
  firstName: "Khushi",
  lastName: "Patel",
  address: "Gota Ahmedabad",
  salary: 70000,
},
{
  id: 4,
  firstName: "Tithi",
  lastName: "Vyas",
  address: "Ghodasar, Ahmedabad",
  salary: 60000,
},
{
  id: 1,
  firstName: "Shruti",
  lastName: "Deshmukh",
  address: "Pune Mumbai",
  salary: 50000,
},
];

function displayEmployees(){
  let table = document.querySelector("#emp-table tbody") as HTMLTableElement;
  table.innerHTML = "";

  employees.forEach((e, i) => {
    let row = table.insertRow();
    row.insertCell().innerHTML = i.toString();
    row.insertCell().innerHTML = e.id.toString(); 
    row.insertCell().innerHTML = e.firstName;
    row.insertCell().innerHTML = e.lastName;
    row.insertCell().innerHTML = e.address;
    row.insertCell().innerHTML = e.salary.toString();  
  });
}

function searchByIndex(){
  let indexInput = document.getElementById("index-input") as HTMLInputElement;
  let index = parseInt(indexInput.value);
  let employee = employees[index];
  alert(`Employee at index ${index}: ${JSON.stringify(employee)}`);
}

function searchById(){
  let idInput:any = document.getElementById("id-input") as HTMLInputElement;
  let eid:any = parseInt(idInput.value);
  let employee = employees.find(e => e.id === eid);
  alert(`Employee with ID ${eid}: ${JSON.stringify(employee)}`);
}

function addEmployee(){
  let idInput = document.getElementById("new-id-input") as HTMLInputElement;
  let firstNameInput = document.getElementById("new-first-name-input") as HTMLInputElement;
  let lastNameInput = document.getElementById("new-last-name-input") as HTMLInputElement;
  let addressInput = document.getElementById("new-address-input") as HTMLInputElement;
  let salaryInput = document.getElementById("new-salary-input") as HTMLInputElement;

  let newEmployee: Employee = {
    id: parseInt(idInput.value),
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    address: addressInput.value,
    salary: parseInt(salaryInput.value),
  };
  employees.push(newEmployee);
  displayEmployees();
}

function deleteemp(){
  let deleteIndexInput = document.getElementById("delete-index-index") as HTMLInputElement;
  let deleteIndex = parseInt(deleteIndexInput.value);
  let deleteemp = employees.splice(deleteIndex, 1)[0];
  alert(`Employee deleted: ${JSON.stringify(deleteemp)}`);
  displayEmployees();
}


