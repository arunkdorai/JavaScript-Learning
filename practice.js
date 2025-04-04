// for of loop

// Array

let arr = [10, 100, 1000, 10000];

// syntax of for of loop: for(let iterator/element of object){

// }

for (let val of arr) {
    console.log(val)
}

// String

let str = "Javascript";

for(let char of str){
    console.log(char)
}


// Function

function* genFun(){
    yield "One"
    yield "Two"
    yield "Three"
}

let iterator = genFun()

for(let val of iterator){
    console.log(val)
}


// Object (key value pair) not iterable using for of loop as this loop requires the value to be single

let obj = {
    id:1
}

for(let key of obj){
    console.log(key)
} // TypeError: obj is not iterable