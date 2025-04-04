# **JavaScript Learning Notes – Episode 39**

**Topic: Array Methods – `sort()`, `reverse()`, `includes()`, `join()`, `toString()`**

---

## 🕘 **Timestamps Overview**
- **00:42** – `sort()` – Sorting arrays  
- **02:30** – ASCII Table & sorting  
- **06:45** – `reverse()` – Reversing arrays  
- **07:20** – `includes()` – Checking for values  
- **08:25** – `join()` – Creating a string from an array  
- **10:38** – `toString()` – Converting an array to a string  

---

## 🧰 **Array Methods Overview**

### ✅ `sort()` – *Sorts an Array Alphabetically (Modifies Original)*
```javascript
let numbers = [4, 9, 3, 5, 10, 20, 15, 45, 114, 345, "&", " "];

numbers.sort(); // Sorts based on ASCII values
console.log(numbers);
```
📌 **Sorting Issue with Numbers:**  
- `sort()` converts numbers to strings and sorts them **lexicographically**.
- Example: `[10, 2, 30]` sorts as `[10, 2, 30]`, not `[2, 10, 30]`.

✅ **Fix:** Use a compare function for numerical sorting:
```javascript
let nums = [10, 2, 30, 4];
nums.sort((a, b) => a - b); // Ascending order
console.log(nums); // ➝ [2, 4, 10, 30]
```

---

### ✅ `reverse()` – *Reverses the Array (Modifies Original)*
```javascript
let arr = [10, 20, 30, 40];

arr.reverse();
console.log(arr); // ➝ [40, 30, 20, 10]
```

🔹 **Use case:** Often used after `sort()` for **descending order**.
```javascript
nums.sort((a, b) => a - b).reverse();
console.log(nums); // ➝ [30, 10, 4, 2]
```

---

### ✅ `includes()` – *Checks if an Array Contains a Value*
```javascript
let arr = [10, 20, 30, 40];

console.log(arr.includes(40)); // ➝ true
console.log(arr.includes(50)); // ➝ false
```
👉 **Note:** `includes()` is **case-sensitive** and works only for **primitives**.

---

### ✅ `join()` – *Converts Array to String with a Separator*
```javascript
let arr = [1, 2, 3, 4, 5];

console.log(arr.join());   // ➝ "1,2,3,4,5" (default separator is ",")
console.log(arr.join(".")); // ➝ "1.2.3.4.5"
console.log(arr.join("-")); // ➝ "1-2-3-4-5"
```
🔹 **Use case:** Creating formatted strings, like CSVs.

---

### ✅ `toString()` – *Converts an Array to a String*
```javascript
let arr = [1, 2, 3, 4, 5];

console.log(arr.toString()); // ➝ "1,2,3,4,5"
```
📌 **Difference between `join()` and `toString()`:**
- `join()` allows **custom separators**.
- `toString()` always uses **commas**.

---

## 📝 **Summary Table**

| Method      | Purpose                  | Affects Original? | Example |
|-------------|--------------------------|--------------------|---------|
| `sort()`    | Sorts an array            | ✅ Yes             | `arr.sort()` |
| `reverse()` | Reverses an array         | ✅ Yes             | `arr.reverse()` |
| `includes()`| Checks if a value exists  | ❌ No              | `arr.includes(10)` |
| `join()`    | Converts to a string with a separator | ❌ No | `arr.join("-")` |
| `toString()`| Converts to a comma-separated string | ❌ No | `arr.toString()` |

---



# JavaScript Learning Notes - Episode 39: Array Methods - sort, reverse, includes, join & toString



**Topics Covered:**

* Overview of array manipulation methods
* `sort()` method (sorting array elements)
* ASCII Table context for `sort()` behavior
* `reverse()` method (reversing array order)
* `includes()` method (checking for element existence)
* `join()` method (creating a string from array elements)
* `toString()` method (returning a string representation of the array)
* Comparison between `join()` and `toString()`

---

**🕘 00:11 - Overview**

This episode covers several more essential array methods in JavaScript used for sorting, reversing, checking for elements, and converting arrays to strings.

**🕘 00:42 - `sort()` method**

* The `sort()` method **sorts the elements of an array in place** (modifies the original array).
* By default, it sorts elements as strings, based on their Unicode code point order (which is similar to ASCII for common characters).

```javascript
let arr = [4, 9, 3, 5, 10, 20, 15, 45, 114, 345, "&", " "];

arr.sort(); // Sorts based on Unicode (ASCII) order
console.log(arr);
// Output (may vary slightly depending on JS engine but will follow Unicode order):
// [ ' ', '&', '10', '114', '15', '20', '3', '345', '4', '45', '5', '9' ]
```

**Important Observations:**

* Numbers are treated as strings during the default sort. This can lead to unexpected results, e.g., "10" comes before "3" because the character '1' has a lower Unicode value than '3'.
* Symbols and whitespace are also ordered based on their Unicode values.

**Custom Sort Function:**

To sort numbers correctly or to define a custom sorting order, you can pass a **compare function** as an argument to `sort()`. The compare function takes two arguments (a and b) and should return:
    * A negative value if `a` should come before `b`.
    * A positive value if `a` should come after `b`.
    * Zero if `a` and `b` are considered equal in terms of sorting order.

```javascript
let numbers = [4, 9, 3, 5, 10, 20, 15];
numbers.sort((a, b) => a - b); // Sort in ascending numerical order
console.log(numbers); // Output: [ 3, 4, 5, 9, 10, 15, 20 ]

numbers.sort((a, b) => b - a); // Sort in descending numerical order
console.log(numbers); // Output: [ 20, 15, 10, 9, 5, 4, 3 ]
```

**Sorting Strings Alphabetically:**

The default sort usually works well for basic alphabetical sorting of strings. However, for more complex scenarios (case-insensitive sorting, sorting with diacritics), you might need to use `localeCompare()`.

```javascript
let fruits = ['banana', 'Apple', 'cherry'];
fruits.sort(); // Case-sensitive sort
console.log(fruits); // Output: [ 'Apple', 'banana', 'cherry' ]

fruits.sort((a, b) => a.localeCompare(b)); // Case-insensitive sort (usually)
console.log(fruits); // Output: [ 'Apple', 'banana', 'cherry' ] (order might depend on locale)
```

**🕘 02:30 - ASCII Table for Sort methods (Unicode Code Points)**

* The default `sort()` method relies on the Unicode code points of the characters in the strings. For many common characters (English alphabet, digits, basic symbols), Unicode code points are similar to ASCII values.
* Understanding that the sorting is based on these numerical representations explains why "10" comes before "3" in the default sort, as the code point of '1' is less than the code point of '3'.
* Uppercase letters have lower Unicode values than lowercase letters, which is why 'Apple' comes before 'banana' in the case-sensitive default sort.

**🕘 06:45 - `reverse()` method**

* The `reverse()` method **reverses the order of the elements in an array in place** (modifies the original array).
* The first element becomes the last, and the last becomes the first.

```javascript
let arr1 = [10, 20, 30, 40];
arr1.reverse();
console.log(arr1); // Output: [ 40, 30, 20, 10 ]
```

**🕘 07:20 - `includes()` method**

* The `includes()` method determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate.
* It performs a case-sensitive comparison.

```javascript
let arr1 = [40, 30, 20, 10];
console.log(arr1.includes(40)); // Output: true
console.log(arr1.includes(50)); // Output: false
```

* You can also provide an optional second argument to specify the starting index to begin the search from.

```javascript
let fruits = ['apple', 'banana', 'cherry', 'banana'];
console.log(fruits.includes('banana', 1)); // Output: true (starts searching from index 1)
console.log(fruits.includes('banana', 2)); // Output: true (starts searching from index 2)
console.log(fruits.includes('banana', 3)); // Output: false (starts searching from index 3)
```

**🕘 08:25 - `join()` method**

* The `join()` method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by a specified separator string.
* The original array is not modified.
* If no separator is provided, a comma (`,`) is used as the default separator.

```javascript
let arr20 = [1, 2, 3, 4, 5];

let joinedVal = arr20.join(); // Default separator is comma
console.log(joinedVal); // Output: 1,2,3,4,5

let joinedVal1 = arr20.join("."); // Using "." as separator
console.log(joinedVal1); // Output: 1.2.3.4.5

let joinedVal2 = arr20.join("-"); // Using "-" as separator
console.log(joinedVal2); // Output: 1-2-3-4-5

let joinedVal3 = arr20.join(""); // Using an empty string as separator
console.log(joinedVal3); // Output: 12345
```

**🕘 10:38 - `toString()` method**

* The `toString()` method returns a string representing the array and its elements.
* The elements are separated by commas.
* This method is automatically called when an array is to be represented as a text value or when an array is used in a string context.

```javascript
let arr20 = [1, 2, 3, 4, 5];
let str = arr20.toString();
console.log(str); // Output: 1,2,3,4,5
```

**Comparison between `join()` and `toString()`:**

* Both methods convert an array to a string.
* `toString()` always uses a comma as the separator.
* `join()` allows you to specify a custom separator string.
* If you need control over the separator, `join()` is the preferred method. `toString()` provides a basic string representation.

---

**Summary of Methods:**

| Method      | Purpose                                           | Modifies Original Array? | Returns                                  |
|-------------|---------------------------------------------------|--------------------------|------------------------------------------|
| `sort()`    | Sorts the elements of an array in place         | Yes                      | The sorted array                           |
| `reverse()` | Reverses the order of elements in an array in place | Yes                      | The reversed array                         |
| `includes()`| Checks if an array contains a specific element    | No                       | `true` if found, `false` otherwise        |
| `join()`    | Creates a string by concatenating array elements  | No                       | A new string with joined elements          |
| `toString()`| Returns a string representation of the array       | No                       | A string with comma-separated elements     |

---