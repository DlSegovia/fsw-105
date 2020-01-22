// // 1. Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work (so the pet's name isn't "John", but instead "spot" is returned). You only need to delete var and insert let and const.
// // John is the pet owner, and his name should be stored differently than the other names.

let name1 = "John"
let age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name1)
    return petObjects
}
runForLoop(["cat", "dog"])

// 2. Re-write this .map() using an arrow function:

// Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.Shorter syntactical form () => {} vs. function () {}
const arr = ["bright orange", "ripe", "rotten"]

const result = arr.map(function(carrot) {

    return { type: "carrot", name: carrot }
})

console.log(result)

// 3. Re - write this.filter() using an arrow
// function:
const people = [{
    name: "Princess Peach",
    friendly: false
}, {
    name: "Luigi",
    friendly: true
}, {
    name: "Mario",
    friendly: true
}, {
    name: "Bowser",
    friendly: false
}]

const filterForFriendly = people.filter(person => person.friendly === true)

console.log(filterForFriendly)

// 4. Re-write the following functions to be arrow functions:

function doMathSum(a, b) {
    return a + b
}
let doMathAdd = [10, 6]
const newNum = doMathAdd.reduce((a, b) => a + b)
console.log(newNum)

var produceProduct = function(a, b) {
    return a * b
}
let doMathPro = [10, 6]
const newPro = doMathPro.reduce((a, b) => a * b)
console.log(newPro)

// 5. Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
// Hi Kat Strark, how does it feel to be 40?
var howOld = {
    name: `Jane`,
    lastName: `Doe`,
    age: 100,
};
console.log('hi ' + howOld.name + ' ' + howOld.lastName + ', how does it feel to be ' + howOld.age + '?')

function printString(firstName = 'Jane', lastName = 'Doe', age = 100) {
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;
}
console.log(printString('Kat', 'Strark', 40));
// 6. Use template literals to build the string from #5
var pet = {
    name: `Jane`,
    lastName: `Doe`,
    age: 100,
};
console.log('hi ' + pet.name + ' ' + pet.lastName + ', how does it feel to be ' + pet.age + '?')

// 7.  Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.
const animals = [{
        type: "dog",
        name: "theodore",
        age: 2
    },
    {
        type: "cat",
        name: "whiskers",
        age: 2
    },
    {
        type: "pig",
        name: "piglette",
        age: 2
    },
    {
        type: "dog",
        name: "sparky",
        age: 2
    }
];
const filterForDogs = animals.filter(animal => animal.age <= 18)
console.log(filterForDogs)
    // 8. Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:
var loc = {
    name: `Janice`,
    location: `Hawaii`,
    age: 100,
};
console.log(` Hi ` + loc.name + `!\n\n`,
    `Welcome to ` + loc.location + `.\n\n`,
    `I hope you enjoy your stay. Please ask the president of ` + loc.location + ` if you need anything.`)