// Array Methods

// let arr = [100,200,300,400]

// // pop - removes last element in the array - it changes/modifies the original array

// let poppedVal = arr.pop()

// console.log(poppedVal, arr)

// // push - adds new element/s at the end of the array

// arr.push(500, 600, "six")

// console.log(arr)

// // shift - removes first element in the array

// let firstVal = arr.shift()

// console.log(firstVal, arr)

// // unshift - add element/s at the beginning of the array

// arr.unshift(-2, -1, 0, 10, 20)

// console.log(arr)

// splice - we can add, remove and replace at the same time

let newArr = [10, 20, 30, 40];

// splice(startIndex, count(number of elements to remove from the index), ...items(elements to add))

// newArr.splice() // doesn't remove any elements as there are no details given.
// newArr.splice(1) // removes all the elements in the array starting from index 1.
// newArr.splice(1, 2) // removes two elements in the array starting from index 1.
// newArr.splice(1, 2, "newVal", true, [11, 12]); // removes two elements in the array starting from index 1 and then adds three elements from the 1st index.
// newArr.splice(0, 0, 100, 200, 300); // no elements are removed from 0th index (count=1) and three elements are added from 0th index.
newArr.splice(-1, 0, 500, 600, 700); // -1 index values indicates it starts from last index.
console.log(newArr);