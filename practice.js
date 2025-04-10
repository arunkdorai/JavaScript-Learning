// stack - to store primitive value
// heap - to store non primitive values (array, object, function)

/* Call By Value

    Stack (Before Modification):

    | Address | Variable | Value |
    |---------|----------|-------|
    | 0x100   |    x     |   10  |
    | 0x104   |    y     |  x = 10  |


    Stack (After Modification):

    | Address | Variable | Value |
    |---------|----------|-------|
    | 0x100   |    x     |   20  |
    | 0x104   |    y     |   10  |

*/

// let x = 10

// let y = x

// console.log(x, y)

// x = 20

// console.log(x, y)

/* call by reference

    Stack Memory

    | address    | Variable       | Value -> Reference/Pointer (Address) |
    |------------|----------------|--------------------------|
    | 0x100      | obj1           | 0x001                    |
    | 0x104      | arr1           | 0x002                    |
    | 0x108      | obj2           | obj1 = 0x001             |
    | 0x112      | arr2           | arr1 = 0x002             |

    Heap Memory

    | Address       | Object              |
    |---------------|---------------------|
    | 0x001         | { name1: "Tony" }    |
    | 0x002         | [ 1, 2, 3 ]        |

*/

// let obj1 = {
//   name1: "Tony",
// };

// let obj2 = obj1;

// obj2.name1 = "Stark";

// obj2.role = "Developer"

// console.log(obj1, obj2)

// let arr1 = [1, 2, 3];

// let arr2 = arr1

// arr1[0] = "One"

// console.log(arr1, arr2)

// Deep Copy

// let a = 10
// let b = a

// a = 20

// console.log(a, b)

// let obj1 = {
//     name1 : "Elon",
//     role : "Developer"
// }

// let obj2 = { ...obj1 }

// obj2.name1 = "Musk"

// console.log(obj1, obj2)

// Shallow Copy

// let person = {
//   name1: "John",
//   role: "Youtuber",
//   hobbies: {
//     cricket: "T20 Player",
//     football: "60 mins",
//   },
// };

// let person2 = { ...person };

// console.log(person, person2);

// person.role = "Video Creator"

// person.hobbies.cricket = "ODI Player"

// console.log(person, person2);

// Deep Copy for nested objects

// let person3 = { ...person, hobbies : { ...person.hobbies }}

// let person4 = JSON.stringify(person)

// console.log(person4)

// let newPerson4 = JSON.parse(person4)

// person.role = "Video Creator"

// person.hobbies.cricket = "ODI Player"

// console.log(person, person3);

// console.log(newPerson4)


// Array - Shallow Copy 

let arr = [1,2,3,[4,5,6]]

let arr1 = [...arr]

// console.log(arr, arr1)

// Array - Deep Copy

let newArr = JSON.stringify(arr)

let newArr1 = JSON.parse(newArr)

arr[0] = "One"

// console.log(arr, arr1)

arr[3][0] = "Four"

console.log(arr, arr1)

console.log(arr, newArr1)