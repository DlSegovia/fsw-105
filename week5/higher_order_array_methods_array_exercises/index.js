// ----------Use the built-in array method .filter() to solve all of these problems:---------------
//  1. Given an array of numbers, return a new array that has only the numbers that are 5 or grater.

const arr = [3, 6, 8, 2]

const result = arr.filter(function(num) {
    if (num > 5) {
        return num
    }
})

console.log(result)

//  2. Given an array of numbers, return a new array that only includes the even numbers.

const numList = [3, 6, 8, 2]

const evensOnly = arr.filter(function(numList) {
    if (numList % 2 === 0) {
        return numList
    }
})

console.log(evensOnly)

//  3. Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

const str = ["dog", "wolf", "by", "family", "eaten", "camping"]
const fiveCharactersOrFewerOnly = str.filter(function(name) {
    if (name.length <= 5) {
        return name
    }
})
console.log(fiveCharactersOrFewerOnly)

// 4. Give an array of people objects, return a new array that has filltered out all those who don't belong to the club.

const club = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]
const peopleWhoBelongToTheIlluminati = club.filter(function(dontBelong) {
    if (dontBelong.member === true) {
        return dontBelong
    }
})

// 5. Make a filter list of all the people who are old enough to see The Matrix (younger than 18)

const ages = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]
const canSeeTheMatrix = ages.filter(function(ofAge) {
    if (ofAge.age <= 18) {
        return ofAge
    }
})

console.log(canSeeTheMatrix)

// ---------------Use the built-in .map() method on arrays to solve all of these problems:---------------------
// 1. Make an array of numbers that are doubles of the first array

const singalNum = [2, 5, 100]

const doubnum = singalNum.map(num => num * 2)
console.log(doubnum)

// 2. Take an array of numbers and make them strings
const arrNum = [2, 5, 100]

strNum = arrNum.map(function(e) { return e.toString() });
console.log(strNum);

// 3. Capitalize each of an array of names
// var first = (["john", "JACOB", "jinGleHeimer", "schmidt"]);
// // var last = string.slice(2)

// newCaps = string.map(function(uppercased)

//         // const arrToUp = first.map(function(e) { return e.split(0, 1) });

//         console.log(arrToUp)

// var uppercasedHello = string.toUpperCase();

// var first2 = uppercasedHello.slice(0, 2)
// var last = string.slice(2)
// console.log(arrToUp)