let arr = [1, 2, 3, 4];
let arr1 = [5, 6, 7, 8];

// Concat Method - doesn't change/modify the original array

/*
let newArr = arr.concat(arr1)

console.log(newArr)

let newArr1 = arr.concat(10,20,30)

console.log(newArr1)

let newArr2 = [].concat(arr)

console.log(newArr2)


// Slice Method

let newArr3 = [10, 2, 3, 5, 6, 7, 8]

let slicedArr = newArr3.slice() // will slice all the elements of the newArr3 into slicedArr

console.log(slicedArr)

// slice(startIndex, endIndex(excludes endIndex))
let slicedArr1 = newArr3.slice(1)  // this will slice all elements from 1st index of newArr3 into slicedArr1

console.log(slicedArr1)

let slicedArr2 = newArr3.slice(1, 4) // this will slice elements from 1st index of newArr3 4-1 = 3 index (excludes 4th index) into slicedArr2

console.log(slicedArr2)

let slicedArr3 = newArr3.slice(0,3)

console.log(slicedArr3)


// Flat Method - helps to remove nested array

let arr2 = [1,2,3,[4,5,[6,7,8]]]

let newArr2 = arr2.flat()

console.log(newArr2)

let newArr3 = arr2.flat(2)

console.log(newArr3)

let arr3 = [1,2,3,[4,5,[6,7,8, [9,10, [11,12, [13,14, 15, 16]]]]]]

let newArr4 = arr3.flat(Infinity)

console.log(newArr4)
*/

// Fill Method - to replace the array values/elements - this changes/modifies original array

let arr4 = [10, 20, 30];

arr4.fill(50);

console.log(arr4);

// array.fill(valueToFill, startIndex, endIndex(doesn't include))

arr4.fill(200, 0, 2);

console.log(arr4)