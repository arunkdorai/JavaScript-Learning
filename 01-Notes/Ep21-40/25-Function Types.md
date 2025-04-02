# **JavaScript Learning Notes - Episode 25** 

---

## **Topics Covered:**  
- **Types of Functions in JavaScript**  
- **Named Functions**  
- **Anonymous Functions**  
- **Arrow Functions**  
- **Higher-Order Functions**  
- **Callback Functions**  

---

## **🕘 00:00 - Introduction to Function Types**  

🚀 **Functions are reusable blocks of code that perform a specific task.**  

✔ JavaScript supports different types of functions:  
1. **Named Functions**  
2. **Anonymous Functions**  
3. **Arrow Functions**  
4. **Higher-Order Functions**  
5. **Callback Functions**  

---

## **🕘 00:50 - Named Functions**  

✅ **Definition:**  
- A named function is a function that has an explicit name.  
- You can call it by its name anywhere in the code.  

### **📌 Example: Named Function**  

```javascript
function greet(name) {
    console.log("Hello, " + name);
}

greet("John"); // Output: Hello, John
```

✔ Named functions are useful for **code readability and debugging**.  

---

## **🕘 01:45 - Anonymous Functions**  

✅ **Definition:**  
- A function without a name.  
- Typically assigned to a **variable** for later use.  

### **📌 Example: Anonymous Function**  

```javascript
let aFun = function (a, b) {
    console.log("Anonymous Function: " + (a * b));
};

aFun(5, 5); // Output: Anonymous Function: 25
```

✔ Since the function has no name, it **cannot be called directly** but can be accessed through the variable.  

---

## **🕘 02:50 - Arrow Functions (ES6)**  

✅ **Definition:**  
- Introduced in **ES6**, arrow functions provide a **concise syntax**.  
- They **don’t have their own `this`**, which makes them useful in certain cases like event handling and callbacks.  

### **📌 Example: Arrow Function**  

```javascript
// Multi-line Arrow Function
let arrowFun = (a, b) => {
    console.log("Arrow Function: " + (a * b));
};
arrowFun(10, 20); // Output: Arrow Function: 200

// Single-line Arrow Function (Implicit Return)
let arrowFun1 = (a, b) => console.log("Arrow Function: " + (a * b));
arrowFun1(20, 5); // Output: Arrow Function: 100

// Arrow Function with One Parameter
let newArFun = a => a * a;
let sqr = newArFun(5);
console.log(sqr); // Output: 25
```

✔ **Advantages of Arrow Functions:**  
- **Shorter syntax** than regular functions.  
- **Implicit return** (no need for `return` keyword if using a single expression).  
- **No own `this`** (inherits `this` from the surrounding scope).  

---

## **🕘 08:35 - Higher-Order Functions**  

✅ **Definition:**  
- A function that **takes another function as an argument or returns a function**.  
- These are commonly used in **functional programming**.  

### **📌 Example: Higher-Order Function**  

```javascript
function func1() {
    console.log("I'm a Higher-Order Function");
}

function func2() {
    console.log("I'm a Callback Function");
}

func1(func2()); // Output: "I'm a Callback Function"
                // Output: "I'm a Higher-Order Function"
```

✔ Higher-order functions allow us to **pass functions as arguments** and **return functions as values**.  

---

## **🕘 10:00 - Callback Functions**  

✅ **Definition:**  
- A callback function is a function that is **passed as an argument** to another function and **executed later**.  
- Callbacks are commonly used for **asynchronous operations** (e.g., `setTimeout`, API calls).  

### **📌 Example: Callback Function**  

```javascript
function add(callBack, a, b) {
    console.log(a + b);
    callBack(100, 200); // Calling the callback function
}

function add1(num1, num2) {
    console.log(num1 + num2);
}

add(add1, 20, 40);

// Output:
// 60
// 300
```

✔ **Key Features of Callback Functions:**  
- The **function is passed as an argument**.  
- The callback function **runs inside another function**.  
- Commonly used in **event handling and async programming** (e.g., `fetch API`).  

---

## **🔹 Summary from Episode 25**  

✅ **Named Functions** → Have a name and can be reused.  
✅ **Anonymous Functions** → Have no name and are usually assigned to a variable.  
✅ **Arrow Functions (ES6)** → A shorter way to write functions, useful for simple tasks.  
✅ **Higher-Order Functions** → Functions that take another function as an argument or return a function.  
✅ **Callback Functions** → Functions passed into another function to be executed later.  

---




# JavaScript Learning Notes - Episode 25: Function Types in Javascript



**Topics Covered:**

* Function Types Intro
* Named Function
* Anonymous Function
* Arrow Function
* Higher Order Function
* Call Back Function
* Example - Call Back Function

---

**🕘 00:00 - Function Types Intro**

* JavaScript offers several ways to define functions, each with its own syntax and characteristics. Understanding these different function types is important for writing flexible and efficient code.

---

**🕘 00:50 - Named Function**

* A **named function** is declared using the `function` keyword followed by a name (identifier), a pair of parentheses for parameters, and curly braces containing the function body.
* Named functions can be called by their name.

```javascript
// Named Function
function add(uName) {
  console.log("Named Function " + uName);
}
add("I'm a Function"); // Output: Named Function I'm a Function
```

* **Key characteristics:**
    * Has a specific name.
    * Can be easily referenced and called by its name.
    * Function declarations are hoisted, meaning you can call the function before its declaration in the code.

---

**🕘 01:45 - Anonymous Function**

* An **anonymous function** is a function that does not have a name when it is defined.
* Anonymous functions are often assigned to variables or used as arguments to other functions.

```javascript
// Anonymous Function
let aFun = function(a, b) {
  console.log("Anonymous Function " + (a * b));
};
aFun(5, 5); // Output: Anonymous Function 25
```

* **Key characteristics:**
    * Does not have a name at the time of definition.
    * Typically assigned to a variable, and the variable is used to call the function.
    * Function expressions (anonymous functions assigned to variables) are not hoisted in the same way as function declarations; you must define the function before you can call it through the variable.

---

**🕘 02:50 - Arrow Function**

* **Arrow functions** are a concise syntax for writing anonymous functions, introduced in ECMAScript 6 (ES6).
* They provide a more compact way to define functions, especially for simple one-line functions.

```javascript
// Arrow Function
let arrowFun = (a, b) => {
  console.log("Arrow Function " + (a * b));
};
arrowFun(10, 20); // Output: Arrow Function 200

let arrowFun1 = (a, b) => console.log("Arrow Function " + (a * b)); // Implicit return for single statement
arrowFun1(20, 5); // Output: Arrow Function 100

let newArFun = a => a * a; // Single parameter, implicit return
let sqr = newArFun(5);
console.log(sqr); // Output: 25
```

* **Syntax variations:**
    * `(parameters) => { function body }`
    * If there is only one parameter, the parentheses can be omitted: `parameter => { function body }`
    * If the function body contains only a single expression, the curly braces can be omitted, and the expression's result is implicitly returned: `(parameters) => expression` (or `parameter => expression` for a single parameter).
    * If there are no parameters, use empty parentheses: `() => { function body }`

* **Key characteristics:**
    * More concise syntax compared to traditional function expressions.
    * Do not have their own `this` binding; they lexically inherit the `this` value from their surrounding scope.
    * Cannot be used as constructors (you cannot use `new` with arrow functions).
    * Do not have a `prototype` property.
    * Do not have the `arguments` object (use rest parameters `...args` instead).

---

**🕘 08:35 - Higher Order Function**

* A **higher-order function** is a function that either:
    * Accepts one or more functions as arguments, or
    * Returns a function.

```javascript
function func1() {
  console.log("I'm a Higher order function (this example is incorrect)");
}

function func2() {
  console.log("I'm a call back function (this example is incorrect)");
}

// func1(func2()); // This line calls func2 first and passes its return value (undefined) to func1
```

* The example in the code snippet is not a correct demonstration of a higher-order function. Here's a corrected example:

```javascript
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

let double = multiplier(2); // multiplier returns a new function
console.log(double(5));     // Output: 10 (calls the returned function)

function operation(func, a, b) {
  return func(a, b);
}

function add(x, y) {
  return x + y;
}

let result = operation(add, 5, 3); // Passing the 'add' function as an argument
console.log(result);             // Output: 8
```

---

**🕘 10:00 - Call Back Function**

* A **callback function** is a function that is passed as an argument to another function (a higher-order function) and is executed at a later point in time.
* Callbacks are often used in asynchronous operations, event handling, and when you want to customize the behavior of a higher-order function.

**🕘 10:30 - Example - Call Back Function**

```javascript
function add(callBack, a, b) {
  console.log(a + b);
  callBack(100, 200); // Calling the callback function
}

function add1(num1, num2) {
  console.log(num1 + num2);
}

add(add1, 20, 40);
/*
Output:
60
300
*/
```

* In this example:
    * `add` is a higher-order function because it accepts another function (`callBack`) as an argument.
    * `add1` is a callback function because it is passed as an argument to `add`.
    * Inside the `add` function, after printing the sum of `a` and `b`, the `callBack` function (`add1` in this case) is executed with the arguments `100` and `200`.

**Key Takeaways:**

* **Named functions:** For clear identification and general use.
* **Anonymous functions:** Often used in variable assignments or as immediate arguments.
* **Arrow functions:** Concise syntax, especially for simple functions, and have lexical `this` binding.
* **Higher-order functions:** Enable powerful abstractions by operating on other functions.
* **Callback functions:** Allow for asynchronous and event-driven programming, and customization of higher-order function behavior.

---