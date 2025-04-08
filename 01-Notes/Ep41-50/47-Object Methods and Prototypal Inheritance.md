# **JavaScript Learning Notes – Episode 47**

**Topic: Object Methods & Prototypal Inheritance in JavaScript**

---

## 🧠 **What are Object Methods?**

Object methods are built-in JavaScript functions that help manipulate or interact with objects. Think of them as tools to copy, freeze, seal, extract, or inspect objects.

---

## 🔗 **Prototypal Inheritance**

> JavaScript uses **prototypes** to allow objects to **inherit** properties and methods from other objects.

### ✅ Example:

```js
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.getInfo = function () {
  return this.make + " " + this.model;
};

let myCar = new Car("Toyota", "Corolla");
console.log(myCar.getInfo()); // "Toyota Corolla"
```

- All objects created from `Car` will inherit the `getInfo()` method.
- Prototype is like a shared toolbox for all instances.

---

## 🛠️ **Important Object Methods**

### 1. `Object.create(proto)`
Creates a new object with the specified prototype.

```js
let person = { pName: "John", age: 30 };
let newObj = Object.create(person);
newObj.location = "Bangalore";

console.log(newObj.age); // Inherited
console.log(Object.getPrototypeOf(newObj)); // Shows `person`
```

---

### 2. `Object.assign(target, source)`
Copies properties from `source` into `target`.

```js
let person1 = { id: "ID456789", name1: "Wick" };
let newObj1 = Object.assign(person1, {
  role: "Full Stack Developer",
  salary: 100000,
});
```

---

### 3. `Object.entries(obj)`
Returns key-value pairs in a 2D array.

```js
let employee = { eName: "Greg", eRole: "Backend Dev" };
let multiArr = Object.entries(employee);
// Output: [["eName", "Greg"], ["eRole", "Backend Dev"]]
```

---

### 4. `Object.fromEntries(arr)`
Converts a 2D array of key-value pairs into an object.

```js
let normalObj = Object.fromEntries(multiArr);
// Output: { eName: "Greg", eRole: "Backend Dev" }
```

---

### 5. `Object.keys(obj)`
Returns an array of property names.

```js
Object.keys(normalObj); // ["eName", "eRole", "Id"]
```

---

### 6. `Object.values(obj)`
Returns an array of property values.

```js
Object.values(normalObj); // ["Greg", "Backend Dev", "ID465798"]
```

---

### 7. `Object.freeze(obj)`
Freezes the object: no add/update/delete allowed.

```js
let frozenObj = { id: 1 };
Object.freeze(frozenObj);
frozenObj.id = 99;        // ❌ No effect
frozenObj.name = "John";  // ❌ No addition
```

---

### 8. `Object.isFrozen(obj)`
Checks if an object is frozen.

```js
Object.isFrozen(frozenObj); // true
```

---

### 9. `Object.seal(obj)`
Prevents adding/deleting properties, but allows modifying existing ones.

```js
let sealedObj = { id: 2 };
Object.seal(sealedObj);
sealedObj.id = 10;           // ✅ Allowed
sealedObj.name = "John";     // ❌ Not added
```

---

### ❄️ Freeze vs 🔐 Seal

| Feature              | `Object.freeze()` | `Object.seal()` |
|----------------------|-------------------|------------------|
| Add new properties   | ❌ Not allowed     | ❌ Not allowed    |
| Delete properties    | ❌ Not allowed     | ❌ Not allowed    |
| Modify properties    | ❌ Not allowed     | ✅ Allowed        |

---

## 🧠 Summary

- **Prototypes** allow shared methods between instances.
- Use `Object.create()` to inherit from another object.
- `Object.assign()` copies values from one to another.
- Freeze = Total lock 🔒, Seal = Partial lock 🧷.
- `Object.entries()`, `keys()`, `values()`, and `fromEntries()` help with object-to-array conversions and vice versa.

---



# JavaScript Learning Notes - Episode 47: Object Methods & Prototypal Inheritance in Javascript



**Topics Covered:**

* Overview of Object Methods
* Example for Prototype and Prototypal Inheritance
* Object Methods Examples:
    * `Object.create(o)`
    * `Object.getPrototypeOf(o)`
    * `Object.assign(target, source)`
    * `Object.entries(o)`
    * `Object.fromEntries(entries)`
    * `Object.keys(o)`
    * `Object.values(o)`
    * `Object.freeze(o)`
    * `Object.isFrozen(o)`
    * `Object.seal(o)`
    * (Brief mention of `Object.freeze()` vs `Object.seal()`)

---

**👉 00:03 - Overview of Object Methods**

* Object methods in JavaScript are built-in functions provided by the `Object` constructor that allow you to perform various operations on objects.
* These methods enable you to create, modify, inspect, and control the properties and structure of objects.

**👉 00:50 - Example for Prototype and Prototypal Inheritance**

* **Prototype:** In JavaScript, every object has an associated prototype. The prototype is itself an object, and it can have its own prototype, thus forming what's called a prototype chain. When you try to access a property of an object, JavaScript first looks at the object itself. If the property isn't found, it then looks at the object's prototype, and so on, up the prototype chain until the property is found or the end of the chain is reached.

* **Prototypal Inheritance:** This is the mechanism by which JavaScript objects inherit properties and methods from their prototype objects.

* **Example (Conceptual):**

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Adding a method to the prototype of Car
Car.prototype.getInfo = function() {
  return this.make + " " + this.model;
};

let myCar = new Car("Toyota", "Corolla");
console.log(myCar.getInfo()); // Output: Toyota Corolla

// myCar inherits the getInfo method from Car.prototype
```

**👉 05:25 - Object Methods Example**

**`Object.create(o)`:**

* Creates a new object with the specified prototype object and properties.
* The newly created object will inherit properties and methods from the prototype object `o`.

```javascript
let person = {
  pName: "John",
  age: 30
};

let newObj = Object.create(person);
newObj.location = "Bangalore";

console.log(newObj.__proto__); // Output: { pName: 'John', age: 30 } (the prototype)
console.log(Object.getPrototypeOf(newObj)); // Output: { pName: 'John', age: 30 } (same as __proto__)
console.log(newObj.age);      // Output: 30 (inherited from the prototype)
console.log(newObj);          // Output: { location: 'Bangalore' } (own property)
```

**`Object.getPrototypeOf(o)`:**

* Returns the prototype of the specified object.

```javascript
console.log(Object.getPrototypeOf(newObj)); // Output: { pName: 'John', age: 30 }
```

**`Object.assign(target, ...sources)`:**

* Copies the values of all enumerable own properties from one or more source objects to a target object.
* Returns the modified target object.
* Properties in the target object are overwritten by properties in the sources if they have the same key. Source objects are processed in order.

```javascript
let person1 = {
  id: "ID456789",
  name1: "Wick"
};

let newObj1 = Object.assign(person1, { role: "Full Stack Developer", salary: 100000 });

console.log(person1); // Output: { id: 'ID456789', name1: 'Wick', role: 'Full Stack Developer', salary: 100000 } (target object is modified)
console.log(newObj1); // Output: { id: 'ID456789', name1: 'Wick', role: 'Full Stack Developer', salary: 100000 } (returns the modified target object)
```

**`Object.entries(o)`:**

* Returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs.
* The order of the properties is the same as that given by looping over the property values of the object manually.

```javascript
let employee = {
  eName: "Greg",
  eRole: "Back end Developer"
};

let multiArr = Object.entries(employee);
multiArr.push(["Id", "ID465798"]);
console.log(multiArr);
/*
Output:
[
  [ 'eName', 'Greg' ],
  [ 'eRole', 'Back end Developer' ],
  [ 'Id', 'ID465798' ]
]
*/
```

**`Object.fromEntries(entries)`:**

* Transforms a list of key-value pairs into an object.
* Expects an iterable object that yields key-value entries (like the output of `Object.entries()`).

```javascript
let normalObj = Object.fromEntries(multiArr);
console.log(normalObj);
/*
Output:
{ eName: 'Greg', eRole: 'Back end Developer', Id: 'ID465798' }
*/
```

**`Object.keys(o)`:**

* Returns an array of a given object's own enumerable property names (keys).
* The order of the array is the same as that given by a `for...in` loop (except that the `for...in` loop enumerates properties in the prototype chain as well).

```javascript
let onlyKeys = Object.keys(normalObj);
console.log(onlyKeys); // Output: [ 'eName', 'eRole', 'Id' ]
```

**`Object.values(o)`:**

* Returns an array of a given object's own enumerable property values.
* The order is the same as for `Object.keys()`.

```javascript
let onlyValues = Object.values(normalObj);
console.log(onlyValues); // Output: [ 'Greg', 'Back end Developer', 'ID465798' ]
```

**`Object.freeze(o)`:**

* Freezes an object. A frozen object can no longer have new properties added to it; the values of existing properties cannot be changed; and existing properties cannot be removed.
* Returns the frozen object.

```javascript
let newObj1 = {
  id: 1
};

Object.freeze(newObj1);

newObj1.name1 = "William"; // Will not be added (in strict mode, throws a TypeError)
newObj1.id = "ID123456";   // Will not be changed (in strict mode, throws a TypeError)

console.log(newObj1); // Output: { id: 1 }
```

**`Object.isFrozen(o)`:**

* Determines if an object is frozen.
* Returns `true` if the object is frozen, and `false` otherwise.

```javascript
console.log(Object.isFrozen(newObj1));   // Output: true
console.log(Object.isFrozen(normalObj)); // Output: false (normalObj is not frozen)
```

**`Object.seal(o)`:**

* Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.
* Returns the sealed object.

```javascript
let newObj2 = {
  city: "London"
};

Object.seal(newObj2);

newObj2.country = "UK"; // Will not be added (in strict mode, throws a TypeError)
newObj2.city = "Manchester"; // Can be changed
delete newObj2.city; // Cannot be deleted (in strict mode, throws a TypeError)

console.log(newObj2); // Output: { city: 'Manchester' }
console.log(Object.isSealed(newObj2)); // Output: true (not shown in the code but relevant)
```

**Brief Mention of `Object.freeze()` vs `Object.seal()`:**

* **`Object.freeze()`** makes an object immutable: no new properties can be added, existing properties cannot be removed, and their values cannot be changed.
* **`Object.seal()`** prevents adding new properties and deleting existing ones, but it allows the values of existing properties to be changed (if they are writable).

---