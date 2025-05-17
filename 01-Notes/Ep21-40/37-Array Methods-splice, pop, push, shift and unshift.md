# **JavaScript Learning Notes – Episode 37**

**Topic: Array Methods – `splice()`, `pop()`, `push()`, `shift()`, `unshift()`**

---

## 🕘 **Timestamps Overview**
- **00:10** – Why Array Methods?  
- **00:30** – Overview of add, remove, replace  
- **00:51** – `pop()`  
- **02:11** – `push()`  
- **03:21** – `shift()`  
- **04:13** – `unshift()`  
- **05:20** – `splice()`  
- **07:10** – Removing with `splice()`  
- **08:50** – Replacing with `splice()`  
- **10:45** – Adding with `splice()`  

---

## 🧠 **Purpose of Array Methods**
Array methods are built-in tools in JavaScript that allow you to **add**, **remove**, and **modify** elements in an array easily.

---

## 🧰 **Common Array Methods**

### ✅ `pop()` – *Removes Last Element*
```javascript
let arr = [100, 200, 300, 400];
let poppedVal = arr.pop();

console.log(poppedVal); // ➝ 400
console.log(arr);       // ➝ [100, 200, 300]
```

---

### ✅ `push()` – *Adds to End*
```javascript
arr.push(500, 600, "six");

console.log(arr); // ➝ [100, 200, 300, 500, 600, "six"]
```

---

### ✅ `shift()` – *Removes First Element*
```javascript
let firstVal = arr.shift();

console.log(firstVal); // ➝ 100
console.log(arr);      // ➝ [200, 300, 500, 600, "six"]
```

---

### ✅ `unshift()` – *Adds to Beginning*
```javascript
arr.unshift(-2, -1, 0, 10, 20);

console.log(arr); 
// ➝ [-2, -1, 0, 10, 20, 200, 300, 500, 600, "six"]
```

---

## 🔀 `splice()` – *The Most Powerful Array Method*

```javascript
let newArr = [10, 20, 30, 40];
```

### ✂️ Syntax:
```javascript
array.splice(startIndex, deleteCount, item1, item2, ...)
```

### 🔸 Examples:

#### ✅ Remove Elements:
```javascript
newArr.splice(1, 2);
// ➝ Removes 2 elements from index 1: [20, 30]
```

#### ✅ Replace Elements:
```javascript
newArr.splice(1, 2, "newVal", true, [11, 12]);
// ➝ Replaces 2 elements from index 1 with 3 new values
```

#### ✅ Add Without Deleting:
```javascript
newArr.splice(0, 0, 100, 200, 300);
// ➝ Adds values at the start without deleting any
```

#### ✅ Add from the End:
```javascript
newArr.splice(-1, 0, 500, 600, 700);
// ➝ Adds elements before the last item
```

---

## 📝 **Summary Table**

| Method      | Action                 | Affects Original? | Example                                |
|-------------|------------------------|--------------------|----------------------------------------|
| `pop()`     | Remove last item       | ✅ Yes              | `arr.pop()`                            |
| `push()`    | Add to end             | ✅ Yes              | `arr.push(10)`                         |
| `shift()`   | Remove first item      | ✅ Yes              | `arr.shift()`                          |
| `unshift()` | Add to beginning       | ✅ Yes              | `arr.unshift(1)`                       |
| `splice()`  | Add/remove/replace     | ✅ Yes              | `arr.splice(1, 2, 'x')`                |

---



# JavaScript Learning Notes - Episode 37: Array Methods - splice, pop, push, shift & unShift



**Topics Covered:**

* Why Array Methods are useful
* Overview of adding, removing, and replacing elements in arrays
* `pop()` method (remove from end)
* `push()` method (add to end)
* `shift()` method (remove from beginning)
* `unshift()` method (add to beginning)
* `splice()` method (add, remove, and replace at any position)
    * Removing elements using `splice()`
    * Replacing elements using `splice()`
    * Adding new elements using `splice()`

---

**🕘 00:10 - Why Array Methods?**

* Array methods in JavaScript provide built-in functionality to efficiently manipulate arrays.
* They abstract away the need to write manual loops and complex logic for common array operations.
* Using array methods leads to more concise, readable, and maintainable code.
* They often have performance optimizations built into the JavaScript engine.

**🕘 00:30 - Overview of add, remove and replace elements**

* JavaScript provides several array methods to modify the contents of an array:
    * **Adding Elements:** `push()` (end), `unshift()` (beginning), `splice()` (any position).
    * **Removing Elements:** `pop()` (end), `shift()` (beginning), `splice()` (any position).
    * **Replacing Elements:** `splice()` (at any position).

**Important Note:** Some array methods modify the original array (mutate), while others return a new array without changing the original. The methods covered in this episode (`pop`, `push`, `shift`, `unshift`, `splice`) **do modify the original array**.

**🕘 00:51 - `pop()` method**

* The `pop()` method removes the **last element** from an array.
* It returns the removed element.
* The `length` of the array is decreased by 1.

```javascript
let arr = [100, 200, 300, 400];
let poppedVal = arr.pop();

console.log(poppedVal, arr); // Output: 400 [ 100, 200, 300 ]
```

**🕘 02:11 - `push()` method**

* The `push()` method adds one or more elements to the **end** of an array.
* It returns the new `length` of the array.

```javascript
let arr = [100, 200, 300];
let newLength = arr.push(500, 600, "six");

console.log(newLength, arr); // Output: 6 [ 100, 200, 300, 500, 600, 'six' ]
```

**🕘 03:21 - `shift()` method**

* The `shift()` method removes the **first element** from an array.
* It returns the removed element.
* All subsequent elements' indices are shifted down by 1.
* The `length` of the array is decreased by 1.

```javascript
let arr = [100, 200, 300];
let firstVal = arr.shift();

console.log(firstVal, arr); // Output: 100 [ 200, 300 ]
```

**🕘 04:13 - `unshift()` method**

* The `unshift()` method adds one or more elements to the **beginning** of an array.
* It returns the new `length` of the array.
* All existing elements' indices are increased to make space for the new elements.

```javascript
let arr = [10, 20];
let newLength = arr.unshift(-2, -1, 0);

console.log(newLength, arr); // Output: 6 [ -2, -1, 0, 10, 20 ]
```

**🕘 05:20 - `splice()` method**

* The `splice()` method is a versatile method that can **add**, **remove**, and **replace** elements in an array at any given index.
* It modifies the original array.
* It returns an array containing the elements that were removed (if any). If no elements were removed, it returns an empty array.

**Syntax:**

```javascript
array.splice(startIndex, deleteCount, ...itemsToAdd);
```

* **`startIndex`:** The index at which to start changing the array.
    * If it is greater than the length of the array, no elements will be removed, but the method will behave as an adding function, adding the provided items at the end of the array.
    * If negative, it will begin that many elements from the end of the array (e.g., -1 refers to the last element).
* **`deleteCount` (optional):** An integer indicating the number of elements in the array to remove starting from `startIndex`.
    * If `deleteCount` is 0 or negative, no elements are removed.
    * If `deleteCount` is greater than the number of elements starting from `startIndex`, then all the elements from `startIndex` to the end of the array will be deleted.
    * If `deleteCount` is omitted, all elements from `startIndex` to the end of the array will be deleted.
* **`...itemsToAdd` (optional):** One or more elements to add to the array, beginning at `startIndex`. If you don't specify any elements, `splice()` will only remove elements from the array.

**Examples from the code:**

```javascript
let newArr = [10, 20, 30, 40];

// newArr.splice(); // doesn't remove any elements as there are no details given.
// console.log(newArr); // Output: [ 10, 20, 30, 40 ]

// newArr.splice(1); // removes all the elements in the array starting from index 1.
// console.log(newArr); // Output: [ 10 ]

// newArr = [10, 20, 30, 40]; // Resetting the array
// newArr.splice(1, 2); // removes two elements in the array starting from index 1 (20 and 30).
// console.log(newArr); // Output: [ 10, 40 ]

// newArr = [10, 20, 30, 40]; // Resetting the array
// newArr.splice(1, 2, "newVal", true, [11, 12]); // removes two elements (20, 30) and adds three elements at index 1.
// console.log(newArr); // Output: [ 10, 'newVal', true, [ 11, 12 ], 40 ]

// newArr = [10, 20, 30, 40]; // Resetting the array
// newArr.splice(0, 0, 100, 200, 300); // no elements are removed from 0th index (deleteCount=0) and three elements are added from the 0th index.
// console.log(newArr); // Output: [ 100, 200, 300, 10, 20, 30, 40 ]

newArr = [10, 20, 30, 40]; // Resetting the array
newArr.splice(-1, 0, 500, 600, 700); // -1 index indicates starting from the last element. 0 elements are removed, and three are added before the last element.
console.log(newArr); // Output: [ 10, 20, 30, 500, 600, 700, 40 ]
```

**Summary of Methods:**

| Method    | Action                      | Modifies Original Array? | Returns                       |
|-----------|-----------------------------|--------------------------|-------------------------------|
| `pop()`   | Removes last element        | Yes                      | The removed element           |
| `push()`  | Adds to the end            | Yes                      | New length of the array       |
| `shift()` | Removes first element       | Yes                      | The removed element           |
| `unshift()`| Adds to the beginning       | Yes                      | New length of the array       |
| `splice()`| Adds/removes/replaces       | Yes                      | Array of removed elements     |

---