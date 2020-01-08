// If statement olympics
if (5 > 3) {
    console.log("is greater than")
}

if (catString.length === 3) {
    console.log("is the length")
}

if (catString === dogString) {
    console.log("the same")
} else {
    console.log("not the same")
}

var person = {
        name: "Bobby",
        age: 12

for (let i = 0; i < person.length; i++)
if (person.age > 18) {
        console.log("is old enough to go to the movie")
} else {
        console.log("is not old enough to go to the movie")
}

var person = {
        name: "Bobby",
        age: 12
}
if (person.name[0] === 'B') {
        console.log(person.name + " is allowed to go to the movie")
} else {
        console.log(person.name + " is not allowed to go to the movie")
}

var person = {
        name: "Bobby",
        age: 12
}
if (person.name[0] === "B" && person.age > 18) {
        console.log(person.name + " is allowed to go to the movie")
} else {
        console.log(person.name + " is not allowed to go to the movie")
}
