var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];
let counter = 0;
for (let i = 0; i < officeItems.length; i++) {
    if (officeItems[i].includes("computer")) {
        counter++;
    }
}
console.log("We found " + counter + " computers");

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
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender)
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough." + peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " to see Mad Max Fury Road.");
    else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender)
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road. Don't let the " + peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " in.");

}
var number = 0;
for (var i = 0; i < 100; i++) {
    if (number % 2 === 0) {
        console.log(number + " is even number <br>");
        number = number + 1;
    } else {
        console.log(number + " is odd number <br>");
        number = number + 1;
    }
}