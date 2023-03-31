interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  fullname: string;
  address: string;
  flatnumber: string;
  city: string;
  state: string;
  pf: number;
  salary: number;
}
let employees: Employee[] = [
  {
    id: 1,
    firstName: "Tannu",
    lastName: "Parmar",
    address: "Isanpur Ahmedabad",
    fullname: "",
    flatnumber: "",
    city: "",
    state: "",
    pf: 0,
    salary: 50000,
  },
  {
    id: 2,
    firstName: "Divya",
    lastName: "Maru",
    address: "Ghodasar Ahmedabad",
    fullname: "",
    flatnumber: "",
    city: "",
    state: "",
    pf: 0,
    salary: 50000,
  },
  {
    id: 3,
    firstName: "Khushi",
    lastName: "Patel",
    address: "Gota Ahmedabad",
    fullname: "",
    flatnumber: "",
    city: "",
    state: "",
    pf: 0,
    salary: 50000,
  },
  {
    id: 4,
    firstName: "Tithi",
    lastName: "Vyas",
    address: "Ghodasar, Ahmedabad",
    fullname: "",
    flatnumber: "",
    city: "",
    state: "",
    pf: 0,
    salary: 50000,
  },
  {
    id: 1,
    firstName: "Shruti",
    lastName: "Deshmukh",
    address: "Pune Mumbai",
    fullname: "",
    flatnumber: "",
    city: "",
    state: "",
    pf: 0,
    salary: 50000,
  },
];
let employees2: any[] = [
  {
    id: 1,
    firstName: "Khushali",
    lastName: "Khamar",
    address: "Chandrlock Ahmedabad",
    fullname: "",
    flatnumber: "",
    city: "",
    state: "",
    pf: 0,
    salary: 100000,
  },
  {
    id: 2,
    firstName: "Poojan",
    lastName: "Patel",
    address: "Ghodasar Ahmedabad",
    fullname: "",
    flatnumber: "",
    city: "",
    state: "",
    pf: 0,
    salary: 200000,
  },
];

employees = [...employees, ...employees2];

function displayEmployees() {
  let table = document.querySelector("#employee-table tbody") as HTMLTableElement;
  table.innerHTML = "";

  employees.forEach((e, i) => {
    let fullname = e.firstName + " " + e.lastName;
    let addr = e.address.split(",");
    let row = table.insertRow();
    e.fullname = fullname;
    e.flatnumber = addr[0];
    e.city = addr[1];
    e.state = addr[2];

    row.insertCell().innerHTML = i.toString();
    row.insertCell().innerHTML = e.id.toString();
    row.insertCell().innerHTML = fullname;
    row.insertCell().innerHTML = addr[0];
    row.insertCell().innerHTML = addr[1];
    row.insertCell().innerHTML = addr[2];
    row.insertCell().innerHTML = (e.salary * 0.12).toString() + "$";
    row.insertCell().innerHTML = e.salary.toString() + "$";
  });
}

function searchByIndex() {
  let indexInput = document.getElementById("index-input") as HTMLInputElement;
  let index = parseInt(indexInput.value);
  let employee = employees[index];
  alert(`Employee at index ${index}: ${JSON.stringify(employee)}`);
}

function searchById() {
  let idInput = document.getElementById("id-input") as HTMLInputElement;
  let id = parseInt(idInput.value);
  let employee = employees.find((e) => e.id === id);
  alert(`Employee with ID ${id}: ${JSON.stringify(employee)}`);
}

function addEmployee() {
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
    fullname: "",
    flatnumber: "",
    city: "",
    state: "",
    pf: 0,
    salary: parseInt(salaryInput.value),
  };
  employees.push(newEmployee);
  displayEmployees();
}

function deleteemp() {
  let deleteIndexInput = document.getElementById("delete-index-input") as HTMLInputElement;
  let deleteIndex = parseInt(deleteIndexInput.value);
  let deletedEmployee = employees.splice(deleteIndex, 1)[0];
  alert(`Employee deleted: ${JSON.stringify(deletedEmployee)}`);
  displayEmployees();
}

displayEmployees();