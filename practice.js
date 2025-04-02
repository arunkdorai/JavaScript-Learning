/*
// Named Function

function add(uName){
        console.log("Named Function "+ uName)
}
add("I'm a Function")

// Anonymous Function

let aFun = function(a, b){
        console.log("Anonymous Function " + (a*b))
}
aFun(5,5)

// Arrow Function

let arrowFun = (a,b) => {
        console.log("Arrow Function " + (a*b))
}
arrowFun(10,20)

let arrowFun1 = (a,b) => console.log("Arrow Function " + (a*b))
arrowFun1(20,5)

let newArFun = a => a*a
let sqr = newArFun(5)
console.log(sqr)


// Higher Order Function

function func1(){
        console.log("I'm a Higher order function")
}

function func2(){
        console.log("I'm a call back function")
}

func1(func2())
*/


function add(callBack, a, b){
        console.log(a+b)
        callBack(100, 200)
}
function add1(num1, num2){
        console.log(num1+num2)
}

add(add1, 20, 40)