# **JavaScript Learning Notes – Episode 49**

**Topic: Deep Copy vs Shallow Copy | Call by Value & Reference**

---

## 🧠 Stack vs Heap (Memory Model)

### 📦 Stack
- Stores **primitive values** (number, string, boolean, null, undefined).
- Fast and static.

### 🧳 Heap
- Stores **non-primitive values** (object, array, function).
- Dynamic, allows complex memory allocation.

---

## 🔁 Call by Value (Primitive Types)

When assigning or passing primitive types, the **value is copied**, not referenced.

```js
let x = 10;
let y = x;

x = 20;

console.log(x, y); // 20, 10
```

🧠 `x` and `y` are stored in different memory locations (stack).

---

## 🔁 Call by Reference (Non-Primitive Types)

Objects and arrays are passed/stored by **reference**, not value.

```js
let obj1 = { name1: "Tony" };
let obj2 = obj1;

obj2.name1 = "Stark";
obj2.role = "Developer";

console.log(obj1, obj2); 
// Both show: { name1: "Stark", role: "Developer" }
```

🧠 `obj1` and `obj2` point to the **same memory address** in heap.

---

## 🧬 Deep Copy vs Shallow Copy

### 🔹 Shallow Copy
Copies only the **top-level properties**. Nested objects/arrays are **still shared**.

```js
let person = {
  name1: "John",
  role: "Youtuber",
  hobbies: {
    cricket: "T20 Player",
    football: "60 mins"
  },
};

let person2 = { ...person };

person.hobbies.cricket = "ODI Player";

console.log(person, person2); 
// Both reflect cricket: "ODI Player"
```

🧠 Only the top-level is copied; `hobbies` is still shared.

---

### 🔹 Deep Copy
Copies all levels of data. Changes to nested objects/arrays do **not affect** the original.

#### ✅ Using Spread + Nested Spread
```js
let person3 = { ...person, hobbies: { ...person.hobbies } };
```

#### ✅ Using JSON (best for simple objects/arrays without methods, Dates, or undefined)
```js
let jsonCopy = JSON.parse(JSON.stringify(person));
```

---

## 🧪 Deep & Shallow Copy in Arrays

### 🔹 Shallow Copy
```js
let arr = [1, 2, 3, [4, 5, 6]];
let arr1 = [...arr];

arr[3][0] = "Four";
console.log(arr, arr1); 
// Both have "Four" in nested array
```

### 🔹 Deep Copy
```js
let newArr = JSON.stringify(arr);
let newArr1 = JSON.parse(newArr);

arr[3][0] = "Another Change";
console.log(arr, newArr1);
// Deep copy unaffected by nested array change
```

---

## 🧠 Summary

| Concept            | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| Call by Value      | Copies the actual value (primitive types).                                  |
| Call by Reference  | Copies the memory address (non-primitives).                                 |
| Shallow Copy       | Copies top-level properties, nested objects/arrays are still referenced.    |
| Deep Copy          | Completely clones objects, even nested ones.                                |

---



# JavaScript Learning Notes - Episode 49: The Shocking Truth about Deep Copy & Shallow Copy



**Topics Covered:**

* Overview of Stack and Heap memory in JavaScript
* Call By Value (for primitive data types)
* Call By Reference (for non-primitive data types)
* Deep Copy vs. Shallow Copy - Overview
* Deep Copy - Example with Primitive types
* Shallow Copy - Example with Objects
* Deep Copy for Objects using Spread Operator (for top-level properties)
* Deep Copy for Objects using `JSON.stringify()` and `JSON.parse()` (for nested objects)
* Deep Copy for Arrays using `JSON.stringify()` and `JSON.parse()` (for nested arrays)

---

**👉 00:45 - Overview of Stack & Heap**

* JavaScript uses two main memory areas:
    * **Stack:** Primarily used for storing primitive values (numbers, strings, booleans, null, undefined, symbols, BigInt) and function call stack frames. Stack memory is managed in a LIFO (Last-In, First-Out) manner.
    * **Heap:** Used for storing non-primitive values (objects, arrays, functions). When you create an object or an array, a reference (pointer) to that data in the heap is stored in the stack.

**👉 01:59 - Call By Value**

* When you assign a primitive value to a variable, the actual value is stored in the stack.
* When you pass a primitive variable to a function or assign it to another variable, a **copy** of the original value is created and stored in a new memory location in the stack.
* Changes made to the copy do not affect the original value. This is known as "Call By Value".

```javascript
// Stack (Before Modification):
// | Address | Variable | Value |
// |---------|----------|-------|
// | 0x100   |     x    |   10  |
// | 0x104   |     y    |   10  |

let x = 10;
let y = x; // A copy of the value of x (10) is assigned to y
console.log(x, y); // Output: 10 10

x = 20; // Modifying x only changes its value in its memory location
console.log(x, y); // Output: 20 10 (y remains unchanged)

// Stack (After Modification):
// | Address | Variable | Value |
// |---------|----------|-------|
// | 0x100   |     x    |   20  |
// | 0x104   |     y    |   10  |
```

**👉 05:25 - Call By Reference**

* When you assign a non-primitive value (object, array) to a variable, a reference (pointer) to the actual object in the heap is stored in the stack.
* When you pass a non-primitive variable to a function or assign it to another variable, you are essentially copying the **reference** (the address in the heap), not the actual object itself.
* Both variables now point to the same object in the heap. Therefore, if you modify the object through one variable, the changes will be reflected when you access it through the other variable. This is known as "Call By Reference" (more accurately, "Call by Sharing" in JavaScript).

```javascript
// Stack Memory
// | address   | Variable | Value -> Reference/Pointer (Address) |
// |-----------|----------|------------------------------------|
// | 0x100     | obj1     | 0x001                              |
// | 0x104     | obj2     | 0x001                              |

// Heap Memory
// | Address   | Object          |
// |-----------|-----------------|
// | 0x001     | { name1: "Tony" } |

let obj1 = {
  name1: "Tony"
};

let obj2 = obj1; // obj2 now holds the same reference as obj1

obj2.name1 = "Stark"; // Modifying obj2 affects the object in the heap
obj2.role = "Developer"; // Adding a property to obj2 also affects the same object

console.log(obj1, obj2);
// Output: { name1: 'Stark', role: 'Developer' } { name1: 'Stark', role: 'Developer' }
// Both obj1 and obj2 point to the same modified object.

let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 holds the same reference as arr1

arr1[0] = "One"; // Modifying arr1 affects the same array in the heap

console.log(arr1, arr2);
// Output: [ 'One', 2, 3 ] [ 'One', 2, 3 ]
// Both arr1 and arr2 point to the same modified array.
```

**👉 19:07 - Deep & Shallow Overview**

* **Shallow Copy:** Creates a new object or array, but the properties or elements that are themselves objects or arrays still refer to the same memory locations as the original. Changes to these nested objects/arrays in the copy will affect the original.
* **Deep Copy:** Creates a completely independent copy of the original object or array and all its nested objects and arrays. Changes to the copy will not affect the original.

**👉 20:01 - Deep Copy - Primitive type**

* With primitive types, assignment inherently creates a deep copy because the actual value is copied.

```javascript
let a = 10;
let b = a; // Deep copy because 10 is a primitive value
a = 20;
console.log(a, b); // Output: 20 10 (b remains unaffected)
```

**👉 24:18 - Shallow Copy**

* When you use techniques like the spread operator (`...`) for objects or arrays, or `Object.assign()` for objects, you create a shallow copy. The top-level properties are copied by value (for primitives) or by reference (for non-primitives).

```javascript
let person = {
  name1: "John",
  role: "Youtuber",
  hobbies: {
    cricket: "T20 Player",
    football: "60 mins",
  },
};

let person2 = { ...person }; // Shallow copy using spread operator

console.log(person, person2);
// Output (initially):
// { name1: 'John', role: 'Youtuber', hobbies: { cricket: 'T20 Player', football: '60 mins' } }
// { name1: 'John', role: 'Youtuber', hobbies: { cricket: 'T20 Player', football: '60 mins' } }

person.role = "Video Creator"; // Changes only person.role (primitive)

person.hobbies.cricket = "ODI Player"; // Changes person.hobbies.cricket, which is a reference to the same object in person2

console.log(person, person2);
// Output (after modification):
// { name1: 'John', role: 'Video Creator', hobbies: { cricket: 'ODI Player', football: '60 mins' } }
// { name1: 'John', role: 'Youtuber', hobbies: { cricket: 'ODI Player', football: '60 mins' } }
// Notice that person2.hobbies.cricket was also changed because it's a shallow copy of the hobbies object.
```

**👉 29:25 - Deep Copy for Object using Spread Operator**

* To achieve a deep copy for nested objects using the spread operator, you need to manually spread each level of nesting. This can become cumbersome for deeply nested objects.

```javascript
let person = {
  name1: "John",
  role: "Youtuber",
  hobbies: {
    cricket: "T20 Player",
    football: "60 mins",
  },
};

let person3 = { ...person, hobbies: { ...person.hobbies } }; // Deep copy for the 'hobbies' object

person.role = "Video Creator";
person.hobbies.cricket = "ODI Player";

console.log(person, person3);
// Output:
// { name1: 'John', role: 'Video Creator', hobbies: { cricket: 'ODI Player', football: '60 mins' } }
// { name1: 'John', role: 'Youtuber', hobbies: { cricket: 'T20 Player', football: '60 mins' } }
// Now, changes to person.hobbies do not affect person3.hobbies.
```

**👉 31:08 - Deep Copy using JSON**

* A common and relatively simple way to achieve deep copy for objects (and arrays) is by using `JSON.stringify()` to convert the object to a JSON string and then `JSON.parse()` to parse the string back into a new object.
* **Limitations:** This method does not work correctly for objects containing:
    * Functions
    * `Date` objects (they will be converted to ISO string format)
    * `undefined`
    * `NaN`, `Infinity`, `-Infinity` (will be converted to `null`)
    * Circular references (will cause an error)

```javascript
let person = {
  name1: "John",
  role: "Youtuber",
  hobbies: {
    cricket: "T20 Player",
    football: "60 mins",
  },
};

let person4 = JSON.stringify(person);
console.log(person4);
// Output: {"name1":"John","role":"Youtuber","hobbies":{"cricket":"T20 Player","football":"60 mins"}}

let newPerson4 = JSON.parse(person4);

person.role = "Video Creator";
person.hobbies.cricket = "ODI Player";

console.log(person, person3);
// Output: (same as previous deep copy example)

console.log(newPerson4);
// Output: { name1: 'John', role: 'Youtuber', hobbies: { cricket: 'T20 Player', football: '60 mins' } }
// newPerson4 is a completely independent deep copy.
```

**👉 35:40 - Deep Copy for Array**

* The `JSON.stringify()` and `JSON.parse()` method also works for creating deep copies of arrays, including nested arrays, with the same limitations as for objects.

```javascript
let arr = [1, 2, 3, [4, 5, 6]];
let arr1 = [...arr]; // Shallow copy for the nested array

let newArr = JSON.stringify(arr);
let newArr1 = JSON.parse(newArr); // Deep copy

arr[0] = "One";
console.log(arr, arr1);
// Output: [ 'One', 2, 3, [ 4, 5, 6 ] ] [ 1, 2, 3, [ 4, 5, 6 ] ]
// Top-level modification doesn't affect the shallow copy's top level.

arr[3][0] = "Four";
console.log(arr, arr1);
// Output: [ 'One', 2, 3, [ 'Four', 5, 6 ] ] [ 1, 2, 3, [ 'Four', 5, 6 ] ]
// Nested modification affects the shallow copy's nested array.

console.log(arr, newArr1);
// Output: [ 'One', 2, 3, [ 'Four', 5, 6 ] ] [ 1, 2, 3, [ 4, 5, 6 ] ]
// Nested modification does not affect the deep copy.
```

**In Summary:**

* Primitive types are always copied by value (deep copy).
* Non-primitive types are assigned by reference (shallow copy of the reference).
* Shallow copy techniques like spread operator and `Object.assign()` only create a new top-level object/array; nested objects/arrays are still references to the original.
* Deep copy creates completely independent copies of all levels. `JSON.stringify()` and `JSON.parse()` is a common way to achieve deep copy but has limitations with certain data types. For more robust deep copying of complex objects, you might need to use custom recursive functions or external libraries.

---