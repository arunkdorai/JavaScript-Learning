// Array Methods - sort, reverse, includes, join & toString

// Sort Method - It changes/modifies original array
/*
let arr = [4, 9, 3, 5, 10, 20, 15, 45, 114, 345, "&", " "]

arr.sort() // Sorts based on ASCII Order

console.log(arr)

// Reverse Method - It changes/modifies original array

let arr1 = [10, 20, 30, 40]

arr1.reverse()

console.log(arr1)

// Includes Method - To check if a value is present in the array or not. It returns a boolean.

console.log(arr1.includes(40))
console.log(arr1.includes(50))
*/

// Join Method

let arr20 = [1,2,3,4,5]

let joinedVal = arr20.join()

console.log(joinedVal)

let joinedVal1 = arr20.join(".")

console.log(joinedVal1)

let joinedVal2 = arr20.join("-")

console.log(joinedVal2)


// toString Method

let str = arr20.toString()

console.log(str)

// join vs toString