# **JavaScript Learning Notes - Episode 23**    

---

## **Topics Covered:**  
- **Return Type Functions**  
- **Assigning Functions to Variables**  
- **Return Type in Conditional Statements**  
- **Returning Multiple Values (Limitations)**  
- **Non-Return Type Functions**  

---

## **🕘 00:13 - What is a Return Type Function?**  

✅ **Definition:**  
- A **return type function** in JavaScript sends back a value using the `return` keyword.  
- The returned value can be **stored in a variable** or **used in calculations**.  
- If a function **does not return anything**, it is a **non-return type function** (explained later).  

---

### **📌 Example: Function Returning a Value**  

```javascript
function findRectArea(l, b) {
    return l * b;  // Returns the calculated area
}

let r1 = findRectArea(100, 50);
console.log(r1); // Output: 5000
```

✔ The function `findRectArea(100, 50)` **returns** 5000, which is stored in `r1`.  
✔ The returned value can be used in **further calculations**.  

---

## **🕘 02:36 - Assigning a Function to a Variable**  

- In JavaScript, functions can be assigned to variables, just like any other value.  

### **📌 Example: Storing a Function in a Variable**  

```javascript
function cubic(num) {
    return num ** 3; // Returns cube of the number
}

let pw = cubic; // Assigning function to a variable

console.log(pw(4)); // Output: 64
```

✔ `pw` now behaves like the `cubic` function.  
✔ We can call `pw(4)` just like `cubic(4)`.  

---

## **🕘 04:50 - Using `return` in Conditional Statements**  

- Functions can **return different values** based on conditions.  

### **📌 Example: Conditional Return Statement**  

```javascript
function findRectArea(l, b) {
    let condition = true;

    if (condition) {
        return l * b; // Returns the area if condition is true
    } else {
        return null; // Returns null if condition is false
    }
}

let r1 = findRectArea(100, 50);
console.log(r1); // Output: 5000
```

✔ The function **returns different values** based on a condition.  
✔ If `condition` is `false`, the function **returns `null`** instead of a number.  

---

## **🕘 06:30 - Returning Multiple Values in JavaScript**  

🚨 **Important Limitation:**  
- **JavaScript functions can return only one value.**  
- If multiple values are returned **without using an array or object**, only the **last** value is considered.  

### **📌 Example: Only Last Return Value is Used**  

```javascript
function cubic(num) {
    return (num ** 3, "Eighty", true, 120);
}

let npw = cubic(4);
console.log(npw); // Output: 120 (only the last value)
```

✔ The **last value (`120`) is returned**, while `"Eighty"` and `true` are ignored.  
✔ If multiple values need to be returned, use an **array** or **object**.  

### **📌 Correct Way: Returning Multiple Values**  

```javascript
function getDetails() {
    return { name: "Alice", age: 30, country: "USA" };
}

let details = getDetails();
console.log(details.name, details.age, details.country);
// Output: Alice 30 USA
```

✔ **Returning an object** allows multiple values to be retrieved.  

---

## **🕘 09:10 - What is a Non-Return Type Function?**  

✅ **Definition:**  
- A **non-return type function** performs an action (e.g., `console.log()`) but does not return a value.  
- If you try to store its result in a variable, it will be **undefined**.  

### **📌 Example: Non-Return Type Function**  

```javascript
function name1() {
    console.log("Non-return type");
}

let noReturn = name1();
console.log(noReturn); // Output: undefined
```

✔ The function **prints a message** but does not return anything.  
✔ The variable `noReturn` gets the value **`undefined`**.  

---

## **🔹 Summary from Episode 23**  
✅ **Return Type Function** → Uses `return` to send back a value.  
✅ **Assigning Functions to Variables** → Functions can be stored in variables.  
✅ **Conditional Return** → Functions can return different values based on conditions.  
✅ **Returning Multiple Values** → Use **arrays or objects**, since only the **last return value** is considered.  
✅ **Non-Return Type Function** → **Performs an action but does not return a value** (e.g., `console.log()` functions).  

---



# JavaScript Learning Notes - Episode 23: Function - Return Type & Non-Return type in Javascript



**Topics Covered:**

* Return type
* Assign Function to variable
* Return type in conditional statement
* Tried returning multiple values
* Non-return type

---

**Return Type Functions**

* A **return type function** in JavaScript is a function that, after executing its code, sends a value back to the part of the program that called it.
* The `return` keyword is used inside the function to specify the value that should be returned.
* Once a `return` statement is executed, the function stops its execution immediately, and the specified value is returned.

**🕘 00:13 - Return type**

```javascript
function findRectArea(l, b) {
  return l * b;
}
let r1 = findRectArea(100, 50);
console.log(r1); // Output: 5000
```

* In this example, `findRectArea` calculates the area of a rectangle and uses `return l * b;` to send the calculated area (5000 in this case) back. This returned value is then stored in the `r1` variable.

**🕘 02:36 - Assign Function to variable**

* In JavaScript, functions are first-class citizens, which means they can be treated like any other value. You can assign a function to a variable.
* When you call the variable (followed by parentheses), you are essentially calling the function it holds.

```javascript
function cubic(num) {
  return num ** 3;
}
let pw = cubic(4);
console.log(pw); // Output: 64
```

* Here, the `cubic` function is declared to return the cube of a number. The result of calling `cubic(4)` (which is 64) is assigned to the variable `pw`.

**🕘 04:50 - Return type in conditional statement**

* The `return` statement can be used within conditional statements inside a function. This allows a function to return different values based on different conditions.

```javascript
function findRectArea(l, b) {
  let condition = true;
  if (condition) {
    return l * b;
  } else {
    return null;
  }
}
let r1 = findRectArea(100, 50);
console.log(r1); // Output: 5000 (because condition is true)

function checkAge(age) {
  if (age >= 18) {
    return "Eligible to vote";
  } else {
    return "Not eligible to vote";
  }
}
console.log(checkAge(20)); // Output: Eligible to vote
console.log(checkAge(15)); // Output: Not eligible to vote
```

**🕘 06:30 - Tried returning multiple values**

* In JavaScript, a function can have only one direct return value. If you try to return multiple values using a comma-separated list, only the last value in the list will be effectively returned.

```javascript
function cubic(num) {
  return (num ** 3, "Eighty", true, 120);
}

let npw = cubic(4);
console.log(npw); // Output: 120 (only the last value is returned)
```

* To effectively return multiple pieces of information from a function, you should return them as an object or an array.

```javascript
function getDetails(num) {
  return {
    cube: num ** 3,
    text: "Eighty",
    flag: true,
    number: 120
  };
}

let details = getDetails(4);
console.log(details); // Output: { cube: 64, text: 'Eighty', flag: true, number: 120 }
console.log(details.cube); // Output: 64
console.log(details.text); // Output: Eighty
```

---

**Non-Return Type Functions**

* A **non-return type function** is a function that performs an action but does not explicitly use the `return` keyword to send a value back.
* These functions typically perform tasks like printing to the console, modifying global variables, or updating the DOM (in a browser environment).
* If a function does not have a `return` statement (or if the `return` statement is used without a value), it implicitly returns `undefined`.

**🕘 09:10 - Non-return type**

```javascript
function name1() {
  console.log("Non-return type");
}
name1(); // Output: Non-return type

let noReturn = name1();
console.log(noReturn); // Output: undefined
```

* The `name1` function prints a message to the console but does not have a `return` statement. When called, it performs its action, and the variable `noReturn` is assigned the implicit return value of `undefined`.

**Key Differences:**

| Feature           | Return Type Function                      | Non-Return Type Function                 |
|-------------------|-------------------------------------------|------------------------------------------|
| `return` keyword  | Uses `return` to send a value back      | May or may not use `return` (without a value) |
| Purpose           | Calculates and provides a result        | Performs an action (e.g., logging)     |
| Return Value      | Returns a specific value                | Implicitly returns `undefined`           |
| Usage             | Often used in expressions or assignments | Typically called for their side effects |

Understanding the difference between return type and non-return type functions is crucial for writing effective and predictable JavaScript code. You'll use both types extensively depending on the task your functions need to perform.

---