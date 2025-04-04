// Data Structures

// Array

let flavors = ["vanilla", "butterscotch", "lavender", "chocolate"];

// console.log(flavors)

console.log(flavors[0]);
console.log(flavors[1]);
console.log(flavors[2]);
console.log(flavors.length);

let lastIndex = flavors.length - 1;

console.log(lastIndex, flavors[lastIndex]);

let sample = [1, "two", true, null, undefined, { id: 1 }];

// Array Constructor

let newArray = new Array();

newArray[0] = "First";
newArray[1] = "Second";
newArray[2] = "Third";
newArray[3] = "Fourth";

console.log(newArray);
console.log(newArray.length);

// Dense and Sparse Array

let denseArray = [1, 2, 3, 4, 5]; // Contigous Memory Location

//  Eg. memory address 1004, 1008, 1012, 1016, 1020

// formula = baseAddress + (index * size)


let sparseArray = [10, 20, ,40, ,60] // Hash Table or Hash Map

console.log(sparseArray)