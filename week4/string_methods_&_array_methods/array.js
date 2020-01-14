var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop(); // Remove the last item from the vegetable array
fruit.splice(0, 1); // Remove the first item from thefruit array fruit.shift()
const index = fruit.findIndex(fruit => fruit === "orange"); // Find the index of "orange"
console.log(fruit); // Check index
let indexOfOrange = fruit.indexOf("orange");
fruit.push(indexOfOrange); // Add the number to the end of the fruit array
console.log(vegetables.length); // Use the length property to find the length of the vegetable array
vegetables.push("3"); // Add the number to the end of the vegetable array
var food = fruit.concat(vegetables); // Put the two arrays together into one array. Fruit first, call the new array "food"
food.splice(4, 2); // Remove 2 elements from your new array starting at index 4 with one method
food.reverse(); //  Reverse your array
var food = food.toString(); //  turn the array into a string and return it


console.log(food);