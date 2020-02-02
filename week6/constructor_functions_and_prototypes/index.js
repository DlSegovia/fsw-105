// Daniel Segovia fsw-105 week6 assignment
const arrayEmp = [];

function Employee(name, jobTitle, salary, status = "Full Time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function() {
        console.log("Employee " + this.name + " works as a " + this.jobTitle + " earning salary of " + this.salary + " a month and works as a " + this.status + " employee.");
    }
    this.changeStatus = function(newStatus) {
        this.status = newStatus
    }
}
var employeeOne = new Employee("Dan Doe", "Sales Person", 35 + "k", "Full Time");
var employeeTwo = new Employee("Debbie Cool", "Cashier", 25 + "k", "Full Time");
var employeeThree = new Employee("Mark Parker", "Manager", 40 + "k", "Full Time");

// array.push(employeeOne, employeeTwo, employeeThree);
// employeeOne.changeStatus("Contract")

function addNew(empl) {
    arrayEmp.push(empl)
}
addNew(employeeOne);
addNew(employeeTwo);
addNew(employeeThree);
// employeeOne.printEmployeeForm()
// employeeTwo.printEmployeeForm()
// employeeThree.printEmployeeForm()
console.log(arrayEmp);