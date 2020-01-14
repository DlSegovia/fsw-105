// Daniel Segovia class fsw-105 week3 Loops and Arrays
// ----------------------------------------------- this is the computer inventory
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];
let counter = 0;
for (let i = 0; i < officeItems.length; i++) {
    if (officeItems[i].includes("computer")) {
        counter++;
    }
}
console.log("We found " + counter + " computers");
// ----------------------------------------------- this is the movie goers names, age, and gender
var peopleWhoWantToSeeMadMaxFuryRoad = [{
    name: "Mike",
    age: 12,
    gender: "male"
}, {
    name: "Madeline",
    age: 80,
    gender: "female"
}, {
    name: "Cheryl",
    age: 22,
    gender: "female"
}, {
    name: "Sam",
    age: 30,
    gender: "male"
}, {
    name: "Suzy",
    age: 4,
    gender: "female"
}];

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) { //The first if statement checks for age/and gender for females
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female")
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. She's good to see Mad Max Fury Road.");
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female")
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road. Do not let her in.");
    }
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) { //The second if statement checks for age/and gender for males
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male")
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. He's good to see Mad Max Fury Road.");
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male")
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road. Do not let him in.");
    }
}
var number = 0;
for (var i = 0; i < 100; i++) {
    if (number % 2 === 0) {
        console.log(number + " is even number");
        number = number + 1;
    } else {
        console.log(number + " is odd number");
        number = number + 1;
    }
}
// ----------------------------------------------- this is the extra credit for on/off light switch
var arrayOfArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for (var i = 0; i < arrayOfArrays.length; i++) { // how many times will this loop run = 3
    var countSwitch = 0
    for (var j = 0; j < arrayOfArrays[i].length; j++) { // how many times will this loop run = 9
        countSwitch = countSwitch + arrayOfArrays[i][j]

    }

    if (countSwitch % 2 === 0) {
        console.log(arrayOfArrays[i] + " Light's are off");

    } else {
        console.log(arrayOfArrays[i] + " Light's are on");

    }