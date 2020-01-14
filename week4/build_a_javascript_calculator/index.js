// Daniel Segovia class fsw-105 week4 Build a JavaScript Calculator in Node and readline-sync
const readLine = require("readLine-sync");

// ------------------------Please enter your first number (store that number)------------------------
let firstNumber = readLine.questionInt("What's your first Number: ");
// ------------------------Please enter your second number (store that number)------------------------
let secondNumber = readLine.questionInt("What's your Second Number: ");
// ------------------------Operation to perform: add, sub, mul, div (then store the operation)------------------------
let operator = readLine.question("Operator: ");
// ------------------------You will call one of your 4 functions to perform the correct operation--------------
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
// ------------------------You will then print to the console: The result is: [the result]------------------------