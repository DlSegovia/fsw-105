// Daniel Segovia fsw-105 week6 assignment
const arrayEmp = [];

function Employee(name, jobTitle, salary, status = "Full Time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
}

Employee.prototype.printDetails = function() {
    console.log("Name: " + this.name);
    console.log("JobTitle: " + this.jobTitle);
    console.log("Salary: " + this.salary);
    console.log("Status: " + this.status);
}


var employeeOne = new Employee("Dan Doe", "Sales Person", 35 + "k", "Full Time");
var employeeTwo = new Employee("Debbie Cool", "Cashier", 25 + "k", "Full Time");
var employeeThree = new Employee("Mark Parker", "Manager", 40 + "k", "Full Time");

function addNew(empl) {
    arrayEmp.push(empl)
}
addNew(employeeOne);
addNew(employeeTwo);
addNew(employeeThree);

console.log(arrayEmp);