// Array Destructuring

let arr = [10, 20, 30, 40];

let [a, b, c, d] = arr;

console.log(a, b, c, d)

let arr1 = [15, 25, 35, 45];

let [x,,,z] = arr1

console.log(x, z)

let arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let [a1, a2, a3, ...a4] = arr2 // ...a4 is rest operator

console.log(a1, a2, a3, a4)

// Nested Array Destructuring


let nestArr = [1,2,3,4, [10, 20, [30, 40]]]

let [b1, b2, b3, b4, [c1, c2, [d1, d2]]] = nestArr

console.log(b4, d2)

// Object Destructuring

let obj = {
    id:1,
    name1: "Arun"
}

let {id, name1} = obj

console.log(id, name1)

// Nested Object Destructuring

let nestObj = {
    id:1,
    name1: "Arun",
    bankDetails: {
        accName:"Kumar",
        accNo:123456,
        branch:"xyz"
    }
}

let {id, name1, bankDetails: { accName, accNo, branch }} = nestObj

console.log(id, name1, accName, accNo, branch)