// Make a function that will return any given string into all caps followed by the same string all lowercase. => HELLOhello
var string = "Hello"
var uppercasedHello = string.toUpperCase();
var lowercasedHello = uppercasedHello.toLowerCase();
console.log(uppercasedHello + lowercasedHello)

// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor(). => 2 / 5
var string = "Hello"
console.log(Math.floor(string.length / 2));

// Make a function that uses slice() and the other functions you've written to return the first half of the string. => He / Hello
var string = "Hello World"
var res = string.substr(0, 2);
// var uppercasedres = res.toUpperCase();
console.log(res)

var string = "Hello World"
var res = string.substr(0, 5);
console.log(res)

// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.) => HEllo / HELLO world
var string = "Hello"
var uppercasedHello = string.toUpperCase();
var first2 = uppercasedHello.slice(0, 2)
var last = string.slice(2)
console.log(first2 + last)

var string = "Hello World"
var uppercasedHelloWorld = string.toUpperCase();
var first2 = uppercasedHelloWorld.slice(0, 5)
var lowercasedHelloWorld = uppercasedHelloWorld.toLowerCase();
var last = lowercasedHelloWorld.slice(5);
console.log(first2 + last)