# **JavaScript Learning Notes – Episode 38**

**Topic: Array Methods – `concat()`, `slice()`, `flat()`, `fill()`**

---

## 🕘 **Timestamps Overview**
- **00:05** – `concat()` – Merging arrays  
- **01:30** – `slice()` – Extracting a portion  
- **03:20** – `flat()` – Flattening nested arrays  
- **05:10** – `fill()` – Replacing array elements  

---

## 🧰 **Array Methods Overview**

### ✅ `concat()` – *Merge Arrays Without Changing the Original*
```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = arr1.concat(arr2);
console.log(combined); // ➝ [1, 2, 3, 4, 5, 6]

let newArr = arr1.concat(10, 20, 30);
console.log(newArr); // ➝ [1, 2, 3, 10, 20, 30]

let clonedArr = [].concat(arr1);
console.log(clonedArr); // ➝ [1, 2, 3] (Clone)
```
👉 **Note:** `concat()` doesn’t modify the original array.

---

### ✅ `slice()` – *Extract a Portion of an Array*
```javascript
let arr = [10, 2, 3, 5, 6, 7, 8];

let slicedAll = arr.slice();
console.log(slicedAll); // ➝ [10, 2, 3, 5, 6, 7, 8]

let slicedFromIndex1 = arr.slice(1);
console.log(slicedFromIndex1); // ➝ [2, 3, 5, 6, 7, 8]

let slicedRange = arr.slice(1, 4);
console.log(slicedRange); // ➝ [2, 3, 5] (excludes index 4)

let slicedStartEnd = arr.slice(0, 3);
console.log(slicedStartEnd); // ➝ [10, 2, 3]
```
👉 **Note:** `slice()` doesn’t change the original array.

---

### ✅ `flat()` – *Flatten a Nested Array*
```javascript
let nestedArr = [1, 2, 3, [4, 5, [6, 7, 8]]];

let oneLevelFlat = nestedArr.flat();
console.log(oneLevelFlat); // ➝ [1, 2, 3, 4, 5, [6, 7, 8]]

let fullyFlattened = nestedArr.flat(2);
console.log(fullyFlattened); // ➝ [1, 2, 3, 4, 5, 6, 7, 8]
```

🔹 **Using `flat(Infinity)` for deeply nested arrays:**
```javascript
let deepNestedArr = [1, 2, 3, [4, 5, [6, 7, 8, [9, 10, [11, 12, [13, 14, 15, 16]]]]]];

let completelyFlat = deepNestedArr.flat(Infinity);
console.log(completelyFlat);
// ➝ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
```

---

### ✅ `fill()` – *Replace Elements in an Array*
```javascript
let arrFill = [10, 20, 30];

arrFill.fill(50);
console.log(arrFill); // ➝ [50, 50, 50]

arrFill.fill(200, 0, 2);
console.log(arrFill); // ➝ [200, 200, 50]
```
👉 **Note:** `fill()` **modifies** the original array.

---

## 📝 **Summary Table**

| Method      | Purpose                  | Affects Original? | Example |
|-------------|--------------------------|--------------------|---------|
| `concat()`  | Merge multiple arrays    | ❌ No              | `arr1.concat(arr2)` |
| `slice()`   | Extract part of an array | ❌ No              | `arr.slice(1, 3)` |
| `flat()`    | Flatten nested arrays    | ❌ No              | `arr.flat(Infinity)` |
| `fill()`    | Replace elements         | ✅ Yes             | `arr.fill(0, 1, 3)` |

---



# JavaScript Learning Notes - Episode 38: Array Methods - Concat, Slice, Flat & Fill in Javascript



**Topics Covered:**

* `concat()` method (joining arrays)
* `slice()` method (creating a shallow copy of a portion of an array)
* `flat()` method (flattening nested arrays)
* `fill()` method (filling array elements with a static value)

---

**Introduction to Array Methods for Transformation**

This episode covers array methods that are used to create new arrays based on existing ones or to modify existing arrays in specific ways, without the need for manual iteration in many cases.

**🕘 `concat()` Method**

* The `concat()` method is used to merge two or more arrays into a **new array**.
* It does not modify the original arrays.
* It can also concatenate arrays with primitive values.

```javascript
let arr = [1, 2, 3, 4];
let arr1 = [5, 6, 7, 8];

let newArr = arr.concat(arr1);
console.log(newArr); // Output: [ 1, 2, 3, 4, 5, 6, 7, 8 ]

let newArr1 = arr.concat(10, 20, 30);
console.log(newArr1); // Output: [ 1, 2, 3, 4, 10, 20, 30 ]

let newArr2 = [].concat(arr); // Used to create a shallow copy of an array
console.log(newArr2); // Output: [ 1, 2, 3, 4 ]
```

**Key Points about `concat()`:**

* Takes arrays or values as arguments.
* Returns a new array containing all the concatenated elements.
* Original arrays remain unchanged.
* Can be used to create a shallow copy of an array by concatenating it with an empty array.

**🕘 `slice()` Method**

* The `slice()` method returns a **shallow copy** of a portion of an array into a **new array object**.
* The original array is not modified.
* You can specify the start and end indices of the portion to extract.

```javascript
let newArr3 = [10, 2, 3, 5, 6, 7, 8];

let slicedArr = newArr3.slice(); // Creates a shallow copy of the entire array
console.log(slicedArr); // Output: [ 10, 2, 3, 5, 6, 7, 8 ]

// slice(startIndex) - Extracts from startIndex to the end
let slicedArr1 = newArr3.slice(1);
console.log(slicedArr1); // Output: [ 2, 3, 5, 6, 7, 8 ]

// slice(startIndex, endIndex) - Extracts from startIndex up to (but not including) endIndex
let slicedArr2 = newArr3.slice(1, 4);
console.log(slicedArr2); // Output: [ 2, 3, 5 ] (indices 1, 2, 3 are included)

let slicedArr3 = newArr3.slice(0, 3);
console.log(slicedArr3); // Output: [ 10, 2, 3 ] (indices 0, 1, 2 are included)
```

**Key Points about `slice()`:**

* `startIndex` is inclusive.
* `endIndex` is exclusive (the element at this index is not included in the new array).
* If `startIndex` is omitted, it defaults to 0.
* If `endIndex` is omitted, it defaults to the `length` of the array.
* Negative indices can be used to indicate an offset from the end of the array (e.g., `-1` for the last element).

**🕘 `flat()` Method**

* The `flat()` method creates a **new array** with all sub-array elements concatenated into it recursively up to a specified depth.
* The original array is not modified.

```javascript
let arr2 = [1, 2, 3, [4, 5, [6, 7, 8]]];

let newArr2 = arr2.flat(); // Default depth is 1
console.log(newArr2); // Output: [ 1, 2, 3, 4, 5, [ 6, 7, 8 ] ]

let newArr3 = arr2.flat(2); // Flatten up to depth 2
console.log(newArr3); // Output: [ 1, 2, 3, 4, 5, 6, 7, 8 ]

let arr3 = [1, 2, 3, [4, 5, [6, 7, 8, [9, 10, [11, 12, [13, 14, 15, 16]]]]]]];
let newArr4 = arr3.flat(Infinity); // Flatten all nested arrays
console.log(newArr4); // Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]
```

**Key Points about `flat()`:**

* Takes an optional `depth` argument, which specifies how deep a nested array structure should be flattened. The default value is 1.
* Passing `Infinity` as the depth will fully flatten all nested arrays, regardless of their depth.
* Empty slots in arrays are preserved.

**🕘 `fill()` Method**

* The `fill()` method changes all or part of an array to a static value.
* It **modifies the original array**.
* It returns the modified array.

```javascript
let arr4 = [10, 20, 30];

arr4.fill(50); // Fills all elements with 50
console.log(arr4); // Output: [ 50, 50, 50 ]

// fill(value, startIndex, endIndex) - Fills from startIndex up to (but not including) endIndex
arr4 = [10, 20, 30, 40, 50]; // Resetting the array
arr4.fill(200, 0, 2); // Fill with 200 starting at index 0, up to index 2 (exclusive)
console.log(arr4); // Output: [ 200, 200, 30, 40, 50 ]
```

**Key Points about `fill()`:**

* `valueToFill` is the value to fill the array with.
* `startIndex` (optional) is the index to start filling from (default is 0).
* `endIndex` (optional) is the index to stop filling before (default is `array.length`).
* Negative indices can be used for `startIndex` and `endIndex` to indicate an offset from the end of the array.

---

**Summary of Methods:**

| Method    | Purpose                                      | Modifies Original Array? | Returns                       |
|-----------|----------------------------------------------|--------------------------|-------------------------------|
| `concat()`| Joins arrays and/or values                   | No                       | A new array with merged elements |
| `slice()` | Creates a shallow copy of a portion          | No                       | A new array with the extracted portion |
| `flat()`  | Flattens nested arrays                       | No                       | A new flattened array         |
| `fill()`  | Fills elements with a static value           | Yes                      | The modified original array   |

---