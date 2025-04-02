// Variable Declaration Hoisting

/* Before Code Execution - Declaration will come at top

var a
let b
const c
sample(){
}
let sample1
*/

// Actual Execution Starts

// console.log(a)
// var a = 10;
// console.log(a)

// console.log(b)
// let b = 20
// console.log(b)

// console.log(c)
// const c = 30
// console.log(c)

// Function Declaration Hoisting - This is only for named function. Anonymous and Arrow Function are not hoisted.

sample()
function sample() {
        console.log("I'm in")
}

sample1() // Type Error
var sample1 = function() {
        console.log("Am I accessible")
}

sample2() // Reference Error
let sample2 = function() {
        console.log("Am I accessible")
}