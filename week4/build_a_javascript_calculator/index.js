// 

const readLine = require("readLine-sync");

let firstNumber = readLine.questionInt("first Number: ");
let secondNumber = readLine.questionInt("Second Number: ");
let operator = readLine.question("Operator: ");
//  ------------------------function that adds two numbers and returns the result------------------------
function add(num1, num2) {
    return num1 + num2;
}
if (operator === "+") {
    console.log("The Result is: " + add(firstNumber, secondNumber));
}
// ------------------------function that multiplies two numbers and returns the result------------------------
function mul(num1, num2) {
    return num1 * num2;
}
if (operator === "*") {
    console.log("the result is: " + mul(firstNumber, secondNumber));
}
// ------------------------function that divides two numbers and returns the result------------------------
function div(num1, num2) {
    return num1 / num2;
}
if (operator === "/") {
    console.log("The Result is: " + div(firstNumber, secondNumber));
}
//------------------------function that subtracts two numbers and returns the result------------------------
function sub(num1, num2) {
    return num1 - num2;
}
if (operator === "-")
    console.log("The Result is: " + sub(firstNumber, secondNumber));

// ------------------------Please enter your first number (store that number)------------------------
// ------------------------Please enter your second number (store that number)------------------------
// ------------------------Operation to perform: add, sub, mul, div (then store the operation)------------------------
// ------------------------You will call one of your 4 functions to perform the correct operation--------------
// ------------------------You will then print to the console: The result is: [the result]------------------------