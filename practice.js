// Object Methods

// let person = {
//     pName : "John",
//     age : 30
// }

// console.log(person)

// Object.create(o) - Creates an object that has the specified prototype or that has null prototype.
// @param o — Object to use as a prototype. May be null.

// let newObj = Object.create(person)
// newObj.location = "Bangalore"

// console.log(newObj.__proto__)
// console.log(Object.getPrototypeOf(newObj))
// console.log(newObj.age)
// console.log(newObj)

/* Object.assign(target, source) - Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
@param target — The target object to copy to.
@param source — The source object from which to copy properties.
*/
// let person1 = {
//     id : "ID456789",
//     name1 : "Wick"
// }

// let newObj1 = Object.assign(person1, {role : "Full Stack Developer", salary : 100000})

// console.log(person1)
// console.log(newObj1)

/* Object.entries(o) - Returns an array of key/values of the enumerable own properties of an object

@param o — Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
*/

let employee = {
    eName : "Greg",
    eRole : "Back end Developer"
}

let multiArr = Object.entries(employee)

multiArr.push(["Id", "ID465798"])

console.log(multiArr)

/* Object.fromEntries(entries) - Returns an object created by key-value entries for properties and methods
@param entries — An iterable object that contains key-value entries for properties and methods.
*/
let normalObj = Object.fromEntries(multiArr)

console.log(normalObj)


/* Object.keys - Returns the names of the enumerable string properties and methods of an object.
@param o — Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
*/

let onlyKeys = Object.keys(normalObj)

console.log(onlyKeys)

/* Object.values - Returns an array of values of the enumerable own properties of an object
@param o — Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
*/

let onlyValues = Object.values(normalObj)

console.log(onlyValues)

/* Object.freeze - Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
@param o — Object on which to lock the attributes.
*/

let newObj1 = {
    id:1
}

Object.freeze(newObj1)

newObj1.name1 = "William"
newObj1.id = "ID123456"

console.log(newObj1)

/* Object.isFrozen - Object to test.
Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.
*/

console.log(Object.isFrozen(newObj1))
console.log(Object.isFrozen(normalObj))

/* Object.seal - revents the modification of attributes of existing properties, and prevents the addition of new properties.
@param o — Object on which to lock the attributes.
*/
console.log(Object.seal())

// Object.freeze() vs Object.seal()