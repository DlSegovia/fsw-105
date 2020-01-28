// Daniel Segovia fsw-105 week6 assignment
const array = []

function Employee(name, jobTitle, salary, status) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    this.printEmployeeForm = function() {
        console.log("Employee " + this.name + " works as a " + this.jobTitle + " earning salary of " + this.salary + " a month and works as a " + this.status + " employee.")
    }
    this.changeStatus = function(newStatus) {
        this.status = newStatus
    }
}
var employeeOne = new Employee("Dan Doe", "Sales Person", 3500 + "k", "Full Time")
var employeeTwo = new Employee("Debbie Cool", "Cashier", 2500 + "k", "Full Time")
var employeeThree = new Employee("Mark Parker", "Manager", 4000 + "k", "Full Time")

array.push(employeeOne, employeeTwo, employeeThree);
employeeOne.changeStatus("Contract")

employeeOne.printEmployeeForm()
employeeTwo.printEmployeeForm()
employeeThree.printEmployeeForm()