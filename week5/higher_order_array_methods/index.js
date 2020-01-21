// Higher Oerder Functions
// A Higher Order Function/Method is a function that:
//      1. Takes a function as a parameter
//              and/or
//      2. Returns a function
// 
// Higher Order array methods follow that first criteria as they require a function as a parameter.
// They do not return a function.
// callback is a function passer into another function.

// function doMath(num1, num2, callback) {
//     return callback(num1, num2)
// }

// function sum(num1, num2) {
//     return num1 + num2
// }

// function subtract(num1, num2) {
//     return num1 - num2
// }

// console.log(doMath(5, 10, sum))
//     // ----------------------------------------------------------------------------------
//     // Higher order array methods
//     // .map()
//     // returns: A new array the same size as the input array
//     // purpose: allows you to take an array of data and create a new array of data from it.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// const result = arr.map(function(num) { // arr[i]
//     return num + 10
// })

// // const result = arr.map(num => num + 10)

const users = [
    { name: "joe" },
    { name: "steve" },
    { name: "lisa" }
]

const result = users.map(function(user) {
    return user.name
})

console.log(result)
    //     // ----------------------------------------------------------------------------------
    //     // # .filter()
    //     //     Returns: A new array with only the filtered out items from the original array
    //     //     Purpose: Reducing a data set into a sub-data set.
    //     //         Ex: Initial array has all movies ( action, fantasy, horror )
    //     //             You could use filter to return an array with only the action movies.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = arr.filter(function(num) {
//     if (num % 2 === 0) {
//         return num
//     }
// })

// const result = arr.filter(num => num % 2 === 0)

// console.log(result)

// const movies = [
//     { name: "movie1", genre: "horror" },
//     { name: "movie2", genre: "action" },
//     { name: "movie3", genre: "action" },
//     { name: "movie4", genre: "fantasy" }
// ]

// // const actionMovies = movies.filter(function(movie) {
// //         if (movie.genre === "action") {
// //             return movie
// //         }
// //     })
// //     // shorthand for the above
// const actionMovies = movies.filter(movie => movie.genre === "action")

// console.log(actionMovies)
//     // ----------------------------------------------------------------------------------
//     // # .forEach
//     //     Returns: Undefined 
//     //     Purpose: Used in place of a for-loop
//     //         Caveat: For-loops allow you to customize where the loop starts, stops, and increments by.
//     //                 forEach will always loop the entire length of the array.

// // # .find()
// //     Returns: The first item it finds in the array that matches your criteria
// //     Purpose: Finding an item in an array

// // # .findIndex()
// //     Returns: The index number of the first item it finds in the array that matches your criteria
// //     Purpose: Finding the index number of an item in an array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// const users = [
//     { name: "joe" },
//     { name: "julie" },
//     { name: "rick" }
// ]

// // .forEach
// const newArr = []

// arr.forEach(function(num) {
//     if (num % 2 === 0) {
//         newArr.push(num)
//     }
// })
// arr.forEach(num => num % 2 === 0 && newArr.push(num))

// console.log(newArr)


// // .find()
// const result = user.find(function(user) {
//     if (user.name === "julie") {
//         return user
//     }
// })

// console.log(result)


// // .findIndex()
// const userIndex = users.findIndex(function(user) {
//     if (user.name === "rick") {
//         return true
//     }
// })

// console.log(userIndex)


// // # .some()
// //     Returns: Returns true if at least one item in the array matches your criteria, false otherwise
// //     Purpose: To see if something exists in an array


// // # .every()
// //     Returns: Returns true if EVERY item in the array matches your criteria, false otherwise.
// //     Purpose: TO see if Everything in an array matches your criteria
// const names = ["Jack", "John", "Jill", "Joseph", "Jackie", "Steve"]

// // .some()
// const result = names.some(function(name) {
//     if (name[0] === "s") {
//         return true
//     }
// })

// console.log(result)

// // .every()   const result = names.every(name => name[0] === "J")
// const result = names.every(function(name) {
//     if (name[0] === "J") {
//         return true
//     }
// })

// console.log(result)

// // # .sort()
// //     Returns: The array sorted but sort also mutates the original array, so capturing the returned value is not necessary.
// //     Purpose: To sort an unsorted array of items.

// // .sort()  arr.sort((a, b) => a - b)
// const arr = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5]

// arr.sort(function(a, b) {
//     return a - b
// })

// console.log(arr)
//     // 
//     // // .reduce()
//     // Returns: Whatever you want it to! (See video for explanation)
//     // Purpose: Take an array of data and Reduce it into a smaller or completely different data set.
//     // reduce needs two arguments, final, and current.
//     //      Final: Return's after looping through then retuned and saved to result1.
//     //      Current: The induvisal parts of the Current array. use a name "num"  

// // 1 - reduce the array of numbers into a sum of all the numbers
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result1 = nums.reduce(function(final, num) {
//     final += num
//     return final
// })

// console.log(result1)


// // 2 - reduce the users to an array of strings of the user's first and last names
// const users = [
//     { fName: "joe", lName: "smithy" },
//     { fName: "tina", lName: "johnson" },
//     { fName: "rick", lName: "sanchez" }
// ]

// // ["joe smithy", "tina johnson", "rick sanchez"]

// const result = users.reduce(function(final, user) {
//     final.push(user.fName + " " + user.lName)
//     return final
// }, [])

// console.log(result)

// // // 3 - reduce the array into a count of how many people voted
// const voters = [
//     { name: "steve", voted: true },
//     { name: "janet", voted: true },
//     { name: "rebecca", voted: false },
//     { name: "harvey", voted: true },
// ]

// const voteCount = voters.reduce(function(final, voter) {
//     if (voter.voted) {
//         final++
//     }
//     return final
// }, 0)

// console.log(voteCount)

// // Return an object that has a count of both who voted and who didnt
// // { didVote: 3, didntVote: 1 }

// const voterObj = voters.reduce(function(final, voter) {
//     if (voter.voted) {
//         final.didVote++
//     } else {
//         final.didntVote++
//     }
//     return final
// }, { didVote: 0, didntVote: 0 })

// console.log(voterObj)

// fat arrow functions
//  this is the general syntext
// function sum() {

// }

// const sum2 = function() {

// }
//  Basic outline
// const sum2ES6 = () => {
//         console.log("ES6 is fun!")
//     }
//     //  With one argument only you don't need ()
// const sum2ES6 = word => {
//         console.log('ES6 is fun ${word}!')
//     }
// If there were two or more arguments you need the ()
// const sum2ES6 = (word, num) => {
//         console.log(`ES6 is ${word}!`)
//     }
//     //If only running one function you don't need the {} and move console.log up to the same line
// const sum2ES6 = word => console.log(`ES6 is ${word}!`)
//     // If you have other arguments you have to replace the {} and use a return line
// const sum2ES6 = word => {
//     console.log(`ES6 is ${word}!`)
//     return word
// }