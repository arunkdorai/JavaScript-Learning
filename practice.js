// Array Methods - indexOf() & lastIndexOf() in Javascript

// indexOf method - Doesn't affect original array. Returns the index of the first occurrence of a value in an array, or -1 if it is not present. Left to right search.

let arr = [10, 20, 10, 30, 40, 30, 50];

let newIndex = arr.indexOf(30);

console.log(newIndex);

let newIndex1 = arr.indexOf(30, 4);

console.log(newIndex1);

let newIndex2 = arr.indexOf(30, -4);

console.log(newIndex2)


// lastIndexOf method - Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present. Right to left search.

// let findIndexFromLast = arr.lastIndexOf(10)
// let findIndexFromLast = arr.lastIndexOf(20, 3)
let findIndexFromLast = arr.lastIndexOf(60, 5)


console.log(findIndexFromLast)