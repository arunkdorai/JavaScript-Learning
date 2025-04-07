# **JavaScript Learning Notes – Episode 42**

**Topic: Higher-Order Methods – `filter()` vs `find()`**

---

## 🕘 **Timestamps Overview**
- **00:17** – `filter()` method  
- **05:42** – Chaining methods with `filter()`  
- **07:31** – `find()` method  

---

## 🔍 `filter()` Method
### ➤ **What It Does:**
- Creates a **new array** with **all elements** that pass the test (condition).
- It **doesn't modify** the original array.

### ✅ **Example:**
```javascript
let filterData = employees.filter((emp) => emp.salary > 110000);
```
- Returns all employees whose salary is **greater than 110000**.
- Each element is tested, and if the condition returns `true`, it is **included** in the result.

### 🧠 **Key Points:**
- Always returns an **array**, even if only one or zero elements match.
- Can be **chained** with other methods like `map()` or `fill()`.

### 🔗 **Chaining Example:**
```javascript
let chained = employees
  .filter(emp => emp.salary > 110000)
  .map(emp => ({ ...emp, bonus: 10000 }));
```
- Filters employees and then adds a `bonus` field to each.

---

## 🔍 `find()` Method
### ➤ **What It Does:**
- Returns the **first element** in the array that satisfies the condition.
- Stops as soon as it finds a match.
- If no match is found, it returns **`undefined`**.

### ✅ **Example:**
```javascript
let result = employees.find(emp => emp.salary > 100000);
```
- Returns the **first employee** whose salary is greater than 100000.

---

## 🔁 `filter()` vs `find()` Summary

| Feature             | `filter()`                              | `find()`                                 |
|---------------------|------------------------------------------|------------------------------------------|
| Return Type         | New **array**                            | Single **value/object** or `undefined`   |
| Returns How Many?   | All matching elements                    | Only the **first** match                 |
| Useful For          | Selecting multiple items                 | Finding one item                         |
| Modifies Original?  | ❌ No                                     | ❌ No                                     |
| Chainable?          | ✅ Yes                                    | ✅ Yes, but not used as often this way   |

---

## 💻 From the Code:

### 🧪 `filter()` Example:
```javascript
let filterData = employees.filter((val, index, array) => {
  console.log(index);
  return val.salary > 110000;
});

console.log(filterData);
```

### 🧪 `find()` Example:
```javascript
let filterDataByFind = employees.find((val, index, array) => {
  console.log(index);
  return val.salary > 100000;
});

console.log(filterDataByFind);
```

---

## ✅ Final Tip:
Use `filter()` when:
- You want **many matches** in an array.

Use `find()` when:
- You only want the **first match** (and don’t need the rest).

---



# JavaScript Learning Notes - Episode 42: Higher Order Methods - filter() vs find() in Javascript



**Topics Covered:**

* `filter()` method (creating a new array with elements that pass a test)
* Chaining methods with `filter()`
* `find()` method (returning the first element that satisfies a condition)

---

**👉 00:17 - Example for `filter()` method**

* The `filter()` method creates a **new array** containing all elements from the original array that pass the test implemented by the provided callback function.
* It iterates over each element of the array and executes the callback function. If the callback returns `true` for an element, that element is included in the new array.
* The original array is not modified.

```javascript
let employees = [
  { empName: "Arun", salary: 150000 },
  { empName: "Jamie", salary: 100000 },
  { empName: "Philip", salary: 120000 },
];

let filterData = employees.filter((val, index, array) => {
  console.log(index); // Logs the index of each element being checked
  return val.salary > 110000; // Keep employees with salary greater than 110000
});

console.log(filterData);
/*
Output (index logs):
0
1
2
Output (filterData):
[ { empName: 'Arun', salary: 150000 }, { empName: 'Philip', salary: 120000 } ]
*/
```

* The `filter()` method iterates through the `employees` array. For each employee, the callback checks if their `salary` is greater than 110000. Only the employees "Arun" and "Philip" satisfy this condition, so a new array containing only these two objects is returned.

* **Callback Function Arguments:**
    * `val`: The current element being processed in the array.
    * `index` (optional): The index of the current element.
    * `array` (optional): The array `filter()` was called upon.

**👉 05:42 - Chaining method - `filter()`**

* Because `filter()` returns a new array, you can chain other array methods (like `map()`, `sort()`, etc.) to the result of `filter()` to perform further operations on the filtered array.

```javascript
let filteredAndModified = employees
  .filter(val => val.salary > 110000) // Filter employees with salary > 110000
  .map(employee => ({ name: employee.empName, salaryInUSD: employee.salary / 75 })); // Map to a new array with name and salary in USD

console.log(filteredAndModified);
/*
Output:
[
  { name: 'Arun', salaryInUSD: 2000 },
  { name: 'Philip', salaryInUSD: 1600 }
]
*/
```

* In this example, first, `filter()` creates a new array of employees with salaries greater than 110000. Then, `map()` is chained to this new array to transform each employee object into a new object with `name` and `salaryInUSD` properties.

* **Incorrect Chaining Example (from the code comment):**

```javascript
// let filterData = employees.filter(val => val.salary>110000).fill({id:1, name1:"xyz"})
// console.log(filterData);
/*
Output:
[ { id: 1, name1: 'xyz' }, { id: 1, name1: 'xyz' } ]
*/
```

* Here, `filter()` first returns `[ { empName: 'Arun', salary: 150000 }, { empName: 'Philip', salary: 120000 } ]`. Then, `fill({id:1, name1:"xyz"})` is called on this new array, which modifies it by replacing all elements with the object `{ id: 1, name1: 'xyz' }`. This demonstrates how chaining works, but the `fill()` method modifies the array in place.

**👉 07:31 - Example for `find()` method**

* The `find()` method returns the **value of the first element** in the provided array that satisfies the provided testing function.
* If no elements satisfy the testing function, `undefined` is returned.
* Unlike `filter()`, `find()` stops iterating as soon as it finds the first element that returns `true` from the callback.
* The original array is not modified.

```javascript
let filterDataByFind = employees.find((val, index, array) => {
  console.log(index); // Logs the index until the condition is met
  return val.salary > 100000; // Find the first employee with salary greater than 100000
});

console.log(filterDataByFind);
/*
Output (index logs):
0
1
Output (filterDataByFind):
{ empName: 'Arun', salary: 150000 }
*/
```

* The `find()` method starts iterating from the beginning of the `employees` array.
    * For the first element (Arun), `val.salary > 100000` (150000 > 100000) is `true`.
    * The `find()` method immediately returns this element and stops further iteration (index 1 and 2 are not logged).

**Key Differences between `filter()` and `find()`:**

| Feature         | `filter()`                                         | `find()`                                            |
|-----------------|----------------------------------------------------|-----------------------------------------------------|
| **Return Value** | A **new array** containing all matching elements. | The **value of the first** matching element, or `undefined` if no match. |
| **Number of Items Returned** | Zero, one, or multiple matching elements.      | At most one element (the first match).            |
| **Iteration** | Iterates through **all** elements of the array.    | Iterates until the **first match** is found, then stops. |
| **Use Case** | Selecting multiple elements based on a condition. | Finding the first element that meets a condition.   |

---