<< << << < HEAD
//Daniel Segovia fsw-105 week2 If Statement Olympics 
// function greaterthan(num1, num2) {
//Daniel Segovia fsw-105 week2 If Statement Olympics
function greaterthan(num1, num2) {
    if (num1 > num2) {
        console.log("is greater than");
    }
}
var result = greaterthan(5, 3);
// -----------------------------------------------------------------------------
var catString = "cat";
var dogString = "dog";

function length(num) {
    if (catString === num) console.log(catString + " is the same length");
    else {
        console.log(catString + " is not the same length");
    }
}
var result = length(3);
// // -----------------------------------------------------------------------------
if (catString === dogString) {
    console.log("Tthe same");
} else {
    console.log("not the same");
}
//-----------------------------------------------------------------------------
var person = {
    name: "Bobby",
    age: 12
};
if (person.age > 18) {
    console.log(person.name + " is allowed to go to the movie");
} else {
    console.log(person.name + " is not allowed to go to the movie");
}
//-----------------------------------------------------------------------------
var person = {
    name: "Bobby",
    age: 12
};
if (person.name[0] === "B") {
    console.log(person.name + " is allowed to go to the movie");
} else {
    console.log(person.name + " is not allowed to go to the movie");
}
// -----------------------------------------------------------------------------
var person = {
    name: "Bobby",
    age: 12
};
if (person.name[0] === "B" && person.age > 18) {
    console.log(person.name + " is allowed to go to the movie");
} else {
    console.log(person.name + " is not allowed to go to the movie");
} >>>
>>>
> 5 cba75897a3220a655f1c1fa8ed68cf3e1de920c