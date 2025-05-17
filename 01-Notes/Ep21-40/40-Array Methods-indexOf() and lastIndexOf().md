# **JavaScript Learning Notes – Episode 40**

**Topic: Array Methods – `indexOf()` & `lastIndexOf()`**

---

## 🕘 **Timestamps Overview**
- **00:25** – `indexOf()`  
- **06:15** – `lastIndexOf()`  

---

## 🧰 **Array Methods Explained**

### ✅ `indexOf()`  
**Purpose:** Finds the **first occurrence** of a value in the array, **searches from left to right**.  
**Returns:** The index if found, `-1` if not.  
**Syntax:**  
```javascript
array.indexOf(searchElement, fromIndex)
```

🧪 **Examples:**
```javascript
let arr = [10, 20, 10, 30, 40, 30, 50];

let newIndex = arr.indexOf(30);        // ➝ 3 (first 30 is at index 3)
let newIndex1 = arr.indexOf(30, 4);    // ➝ 5 (starts search from index 4)
let newIndex2 = arr.indexOf(30, -4);   // ➝ 5 (-4 means start from arr.length - 4 = index 3)
```

🔹 **Note:**
- `fromIndex` can be **positive** or **negative**.
- Negative `fromIndex` counts from the **end**.

---

### ✅ `lastIndexOf()`  
**Purpose:** Finds the **last occurrence** of a value, **searches from right to left**.  
**Returns:** The index if found, `-1` if not.  
**Syntax:**
```javascript
array.lastIndexOf(searchElement, fromIndex)
```

🧪 **Examples:**
```javascript
let arr = [10, 20, 10, 30, 40, 30, 50];

let findIndexFromLast = arr.lastIndexOf(10);       // ➝ 2 (last 10 is at index 2)
let findIndexFromLast2 = arr.lastIndexOf(20, 3);   // ➝ 1 (searches till index 3)
let findIndexFromLast3 = arr.lastIndexOf(60, 5);   // ➝ -1 (60 not found)
```

---

## 📝 **Summary Table**

| Method           | Direction         | Purpose                              | Returns     | Modifies Array? |
|------------------|-------------------|--------------------------------------|-------------|------------------|
| `indexOf()`      | Left → Right      | Finds **first** match                | Index / -1  | ❌ No             |
| `lastIndexOf()`  | Right → Left      | Finds **last** match                 | Index / -1  | ❌ No             |

---

### ✅ Quick Tip:
Both methods work best with **primitive values** (`number`, `string`, `boolean`), and are **case-sensitive** for strings.

---



# JavaScript Learning Notes - Episode 40: Array Methods - indexOf() & lastIndexOf() in Javascript



**Topics Covered:**

* Overview of searching array methods
* `indexOf()` method (finding the first occurrence of an element)
* `lastIndexOf()` method (finding the last occurrence of an element)

---

**🕘 00:15 - Overview**

This episode focuses on two array methods, `indexOf()` and `lastIndexOf()`, which are used to search for specific elements within an array and return their positions (indices). These methods do not modify the original array.

**🕘 00:25 - `indexOf()` method**

* The `indexOf()` method returns the **first index** at which a given element can be found in the array, or `-1` if it is not present.
* The search starts from the beginning of the array and proceeds towards the end (left to right).

**Syntax:**

```javascript
array.indexOf(searchElement, fromIndex);
```

* **`searchElement`:** The value to locate in the array.
* **`fromIndex` (optional):** The index to start the search from.
    * If omitted, the search starts from index 0.
    * If the index is greater than or equal to the array's length, `-1` is returned (the array will not be searched).
    * If negative, it is treated as `array.length + fromIndex`. If the calculated index is less than 0, the entire array will be searched (equivalent to starting from index 0).

**Examples from the code:**

```javascript
let arr = [10, 20, 10, 30, 40, 30, 50];

let newIndex = arr.indexOf(30);
console.log(newIndex); // Output: 3 (The first occurrence of 30 is at index 3)

let newIndex1 = arr.indexOf(30, 4);
console.log(newIndex1); // Output: 5 (Search starts from index 4; the first occurrence of 30 from there is at index 5)

let newIndex2 = arr.indexOf(30, -4);
// -4 is treated as arr.length + (-4) = 7 - 4 = 3. Search starts from index 3.
console.log(newIndex2); // Output: 3 (The first occurrence of 30 from index 3 is at index 3 itself)

let notFoundIndex = arr.indexOf(60);
console.log(notFoundIndex); // Output: -1 (60 is not present in the array)
```

**Key Points about `indexOf()`:**

* Returns the index of the *first* match.
* Performs a strict equality comparison (===) between the `searchElement` and the array elements.
* Returns `-1` if the element is not found.
* The optional `fromIndex` allows you to start the search at a specific position.

**🕘 06:15 - `lastIndexOf()` method**

* The `lastIndexOf()` method returns the **last index** at which a given element can be found in the array, or `-1` if it is not present.
* The search starts from the end of the array and proceeds backwards towards the beginning (right to left).

**Syntax:**

```javascript
array.lastIndexOf(searchElement, fromIndex);
```

* **`searchElement`:** The value to locate in the array.
* **`fromIndex` (optional):** The index to start the backward search from.
    * If omitted, the search starts from the last index of the array (`array.length - 1`).
    * If the index is negative, it is treated as `array.length + fromIndex`. If the calculated index is less than -1, `-1` is returned (the array will not be searched).
    * If the index is greater than or equal to the array's length, the entire array is searched (equivalent to starting from the last index).

**Examples from the code:**

```javascript
let arr = [10, 20, 10, 30, 40, 30, 50];

let findIndexFromLast10 = arr.lastIndexOf(10);
console.log(findIndexFromLast10); // Output: 2 (The last occurrence of 10 is at index 2)

let findIndexFromLast20UpTo3 = arr.lastIndexOf(20, 3);
// Search backwards from index 3. 20 is found at index 1.
console.log(findIndexFromLast20UpTo3); // Output: 1

let findIndexFromLast60UpTo5 = arr.lastIndexOf(60, 5);
// Search backwards from index 5. 60 is not found.
console.log(findIndexFromLast60UpTo5); // Output: -1

let findIndexFromLast30 = arr.lastIndexOf(30);
console.log(findIndexFromLast30); // Output: 5 (The last occurrence of 30 is at index 5)

let findIndexFromLast30FromIndex4 = arr.lastIndexOf(30, 4);
// Search backwards from index 4. The last occurrence of 30 before or at index 4 is at index 3.
console.log(findIndexFromLast30FromIndex4); // Output: 3
```

**Key Points about `lastIndexOf()`:**

* Returns the index of the *last* match.
* Performs a strict equality comparison (===).
* Returns `-1` if the element is not found.
* The optional `fromIndex` allows you to start the backward search from a specific position.

**Use Cases for `indexOf()` and `lastIndexOf()`:**

* Checking if an element exists in an array (if the return value is not -1).
* Finding the position of an element for further manipulation (e.g., using `splice()`).
* Identifying duplicate elements by comparing the results of `indexOf()` and `lastIndexOf()`.

---