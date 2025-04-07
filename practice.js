// forEach Method

let fruits = ["Apple", "WaterMelon", "MuskMelon", "Banana"]

// fruits.forEach(printFruit)

// function printFruit(currentElement, index, totalArray){
//     console.log(currentElement, index, totalArray)
// }

// // Map Method

// fruits.map(function(currentElement, index, totalArray){
//     console.log(currentElement, index, totalArray)
// })

// forEach callback function doesn't return anything, map callback function returns a new array

// let newArr = fruits.forEach((cElement)=>{
//     console.log(cElement.toUpperCase())
//     return cElement
// })

// console.log(newArr) // Doesn't return anything and output will be undefined

// let newArr1 = fruits.map((cElement)=>{
//     return cElement
// })

// console.log(newArr1) // Returns a new array with the elements [ 'Apple', 'WaterMelon', 'MuskMelon', 'Banana' ]

// let newArr2 = fruits.map((cElement, index)=>{
//     return {id:index+1, fruit: cElement}
// })

// console.log(newArr2)

// Chaining method

// let newArr = fruits.map(cEle => cEle.toUpperCase()).sort().fill("123")

// console.log(newArr)

// let newArr1 = fruits.forEach(cEle => cEle.toUpperCase()).sort().fill("123")

// console.log(newArr1) // TypeError: Cannot read properties of undefined (reading 'sort')

// Condition based statement

let newArr2 = fruits.map((cEle) => { return cEle == "Apple"})

console.log(newArr2)

fruits.forEach(val => console.log(val == "Apple"))