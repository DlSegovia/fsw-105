//Building JS Functions to Keep Code DRY fsw-105 week3
//Parameters

// function sum(num1, num2) {
//     return num1 + num2
// }
// var result = sum(10, 5)
// console.log(result)
//     //-------------------------------------------------------//
// function get_max(num1, num2, num3) {
//     var max = Math.max(num1, num2, num3);
//     return max;
// }

// console.log(get_max(20, 3, 5));
// //-------------------------------------------------------//

// function isEven(num1) {

//     if (num1 % 2 == 0)
//         console.log(" is even.");
//     else
//         console.log(" is odd.");
// }
// var result = isEven(150)
//     //-------------------------------------------------------//

function func(myStr) {


    if (myStr.length <= 20)
        console.log(myStr + myStr);
    else
        console.log(myStr.substring(0, myStr.length / 2));
}
var str = "My dog got mud. ";
func(str);