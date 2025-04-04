# **JavaScript Learning Notes – Episode 33**

**Topic: `for...of` Loop – Iterating Arrays, Strings, and Generator Functions**

---

## 🕘 **Timestamps Breakdown**
- **00:30** – `for...of` loop overview  
- **01:01** – Iterate Array  
- **02:46** – Iterate String  
- **03:30** – Iterate Generator Function  
- **06:11** – Try Iterating Object (fails)

---

## 🔁 **What is the `for...of` loop?**

The `for...of` loop is a modern and simpler way to iterate over **iterable** objects like:

- Arrays
- Strings
- Generator Functions  
❌ **NOT** plain objects (e.g., `{ key: value }`) because they are not inherently iterable.

---

## 🍱 **Iterate Over an Array**

```javascript
let arr = [10, 100, 1000, 10000];

for (let val of arr) {
    console.log(val);
}
```

✅ Output:
```
10
100
1000
10000
```

---

## 🔤 **Iterate Over a String**

```javascript
let str = "Javascript";

for (let char of str) {
    console.log(char);
}
```

✅ Output:
```
J
a
v
a
s
c
r
i
p
t
```

---

## ⚙️ **Iterate Over a Generator Function**

```javascript
function* genFun(){
    yield "One";
    yield "Two";
    yield "Three";
}

let iterator = genFun();

for (let val of iterator) {
    console.log(val);
}
```

✅ Output:
```
One
Two
Three
```

---

## ❌ **Iterating Over an Object (Fails)**

```javascript
let obj = {
    id: 1
};

for (let key of obj) {
    console.log(key);
}
```

🛑 **Error**:
```
TypeError: obj is not iterable
```

### Why?  
`for...of` requires the object to be iterable. Plain objects are not iterable by default.

👉 Use `for...in` or `Object.keys(obj).forEach()` if you want to loop through object keys.

---

## ✅ **Summary Table**

| Type               | `for...of` Works? | Notes |
|--------------------|------------------|-------|
| Array              | ✅ Yes            | Directly gives each element |
| String             | ✅ Yes            | Iterates over characters    |
| Generator Function | ✅ Yes            | Iterates over `yield` values |
| Object (plain)     | ❌ No             | Use `for...in` or `Object.keys()` |

---




# JavaScript Learning Notes - Episode 33: Iterate Over Array, String & Function using for...of Loop



**Topics Covered:**

* `for...of` loop overview
* Iterate Array - `for...of` Loop
* Iterate String - `for...of` Loop
* Iterate Generator Function - `for...of` Loop
* Trying to Iterate Objects using `for...of` Loop

---

**🕘 00:30 - `for...of` loop overview**

* The `for...of` loop is a modern iteration statement introduced in ES6 (ECMAScript 2015) that provides a more convenient and readable way to iterate over **iterable objects**.
* Iterable objects are collections that have a `Symbol.iterator` method, which returns an iterator. Examples of built-in iterable objects in JavaScript include:
    * Arrays
    * Strings
    * Maps
    * Sets
    * Generator functions (when their returned object is iterated)
    * `arguments` object (inside functions)
    * NodeList (DOM elements)

* The `for...of` loop directly accesses the **values** of the iterable object, without the need to explicitly manage indices like in a traditional `for` loop.

**Syntax:**

```javascript
for (let element of iterable) {
  // Code to be executed for each element
  console.log(element);
}
```

* **`let element`:** Declares a variable that will hold the value of each element in the iterable during each iteration. You can use `const` instead of `let` if you don't intend to reassign the variable within the loop.
* **`of iterable`:** Specifies the iterable object you want to loop over.
* **`{ ... }`:** The block of code that will be executed for each element in the iterable.

**🕘 01:01 - Iterate Array - `for...of` Loop**

```javascript
let arr = [10, 100, 1000, 10000];

for (let val of arr) {
  console.log(val);
}
/*
Output:
10
100
1000
10000
*/
```

* The `for...of` loop iterates directly over the values of the `arr` array. In each iteration, the `val` variable is assigned the current element's value.

**Comparison with `for` loop for arrays:**

* **`for` loop:** Requires manual management of the index (`i`) and accessing elements using `arr[i]`.
* **`for...of` loop:** Directly provides the value of each element, making the code cleaner and less prone to off-by-one errors related to index management.

**🕘 02:46 - Iterate String - `for...of` Loop**

```javascript
let str = "Javascript";

for (let char of str) {
  console.log(char);
}
/*
Output:
J
a
v
a
s
c
r
i
p
t
*/
```

* When used with a string, the `for...of` loop iterates over each individual character in the string. The `char` variable holds the character value in each iteration.

**🕘 03:30 - Iterate Generator Function - `for...of` Loop**

* When you call a generator function, it returns an iterator. The `for...of` loop can directly consume the values yielded by this iterator.

```javascript
function* genFun() {
  yield "One";
  yield "Two";
  yield "Three";
}

let iterator = genFun();

for (let val of iterator) {
  console.log(val);
}
/*
Output:
One
Two
Three
*/
```

* The `for...of` loop automatically calls the `next()` method of the `iterator` behind the scenes and continues until the `done` property of the returned object is `true`. The `val` variable in each iteration is assigned the `value` yielded by the generator.

**Key advantage:** The `for...of` loop provides a clean way to work with sequences of values produced by generator functions, abstracting away the need to manually call `next()` and check the `done` property.

**🕘 06:11 - Trying to Iterate Objects using `for...of` Loop**

* Standard JavaScript objects (created using `{}`) are **not inherently iterable** using the `for...of` loop. This is because they do not have a default `Symbol.iterator` method that specifies how to iterate over their properties.

```javascript
let obj = {
  id: 1
};

// for (let key of obj) {
//   console.log(key);
// } // TypeError: obj is not iterable
```

* As the code comment indicates, attempting to use a `for...of` loop directly on a plain JavaScript object will result in a `TypeError: obj is not iterable`.

**How to iterate over object properties (brief mention, will likely be covered later):**

To iterate over the properties (keys) of a JavaScript object, you typically use other constructs like:

* **`for...in` loop:** Iterates over the enumerable string properties of an object.
* **`Object.keys(obj)`:** Returns an array of the object's own enumerable property names, which can then be iterated using a `for` loop or `for...of`.
* **`Object.values(obj)`:** Returns an array of the object's own enumerable property values.
* **`Object.entries(obj)`:** Returns an array of the object's own enumerable property `[key, value]` pairs.

**Summary of `for...of` Loop:**

* Provides a direct way to iterate over the **values** of iterable objects.
* Works well with arrays, strings, and the iterators returned by generator functions.
* Simpler and more readable than traditional `for` loops for these iterable types.
* Standard JavaScript objects are not directly iterable with `for...of`.

---