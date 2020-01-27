var employees = []

function Employee(name, jobTitle, salary, status) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    this.printEmployeeForm = function(worker) {
        console.log("Employee " + worker.name + " works as a " + worker.jobTitle + " earning " + worker.salary + " and is a " + worker.status + ".")
    }
    this.changeStatus = function(newStatus) {
        this.status = newStatus
    }
}
var employeeOne = new Employee("Dan Doe", "Sales Person", 35 + "k", "Full Time")
var employeeTwo = new Employee("Debbie Cool", "Cashier", 25 + "k", "Full Time")
var employeeThree = new Employee("Mark Parker", "", 40 + "k", "Full Time")

function myFunction() {
    employees.push("Dan Doe", "Debbie Cool", "Mark Parker");
}
employeeOne.changeStatus("Contract")
employeeOne.printEmployeeForm(employeeOne)