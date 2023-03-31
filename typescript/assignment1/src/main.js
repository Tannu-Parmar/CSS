var employees = [
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
function displayEmployees() {
    var table = document.querySelector("#emp-table tbody");
    table.innerHTML = "";
    employees.forEach(function (e, i) {
        var row = table.insertRow();
        row.insertCell().innerHTML = i.toString();
        row.insertCell().innerHTML = e.id.toString();
        row.insertCell().innerHTML = e.firstName;
        row.insertCell().innerHTML = e.lastName;
        row.insertCell().innerHTML = e.address;
        row.insertCell().innerHTML = e.salary.toString();
    });
}
function searchByIndex() {
    var indexInput = document.getElementById("index-input");
    var index = parseInt(indexInput.value);
    var employee = employees[index];
    alert("Employee at index ".concat(index, ": ").concat(JSON.stringify(employee)));
}
function searchById() {
    var idInput = document.getElementById("id-input");
    var eid = parseInt(idInput.value);
    var employee = employees.find(function (e) { return e.id === eid; });
    alert("Employee with ID ".concat(eid, ": ").concat(JSON.stringify(employee)));
}
function addEmployee() {
    var idInput = document.getElementById("new-id-input");
    var firstNameInput = document.getElementById("new-first-name-input");
    var lastNameInput = document.getElementById("new-last-name-input");
    var addressInput = document.getElementById("new-address-input");
    var salaryInput = document.getElementById("new-salary-input");
    var newEmployee = {
        id: parseInt(idInput.value),
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        address: addressInput.value,
        salary: parseInt(salaryInput.value),
    };
    employees.push(newEmployee);
    displayEmployees();
}
function deleteemp() {
    var deleteIndexInput = document.getElementById("delete-index-index");
    var deleteIndex = parseInt(deleteIndexInput.value);
    var deleteemp = employees.splice(deleteIndex, 1)[0];
    alert("Employee deleted: ".concat(JSON.stringify(deleteemp)));
    displayEmployees();
}
