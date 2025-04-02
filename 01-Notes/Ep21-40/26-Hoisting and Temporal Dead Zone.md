# **JavaScript Learning Notes - Episode 26**  

---

## **Topics Covered:**  
- **Hoisting in JavaScript**  
- **Variable Hoisting (`var`, `let`, `const`)**  
- **Temporal Dead Zone (TDZ)**  
- **Function Hoisting (Declaration vs. Expression)**  
- **TypeError vs. ReferenceError in Hoisting**  

---

## **🕘 00:00 - What is Hoisting?**  

🚀 **Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope before execution.**  

✔ This means you can **use functions and variables before declaring them** in the code.  

---

## **🕘 00:15 - Flow of Hoisting**  

👉 **Before code execution, JavaScript moves all function and variable declarations to the top of their scope.**  
👉 **Only the declarations are hoisted, NOT the initializations (assignments).**  

🔹 **Example of Hoisting Behavior:**  

```javascript
console.log(a);  // Output: undefined (because only declaration is hoisted)
var a = 10; 
console.log(a);  // Output: 10
```

✅ **Explanation:**  
- JavaScript sees the code as:  

```javascript
var a;    // Declaration is hoisted to the top
console.log(a);  // undefined (variable exists but no value assigned)
a = 10;  // Assignment happens here
console.log(a);  // 10
```

---

## **🕘 00:56 - Variable Hoisting (`var`, `let`, `const`)**  

🔹 **Using `var` (Hoisted with `undefined`)**  

```javascript
console.log(a);  // Output: undefined
var a = 10;
console.log(a);  // Output: 10
```

✅ **Why?**  
- `var` variables are **hoisted with an initial value of `undefined`**, so accessing them before declaration gives `undefined`.  

---

🔹 **Using `let` (Temporal Dead Zone Error)**  

```javascript
console.log(b);  // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b);
```

✅ **Why?**  
- `let` is hoisted but remains **in a "Temporal Dead Zone" (TDZ) until initialized.**  

---

🔹 **Using `const` (Temporal Dead Zone Error)**  

```javascript
console.log(c);  // ReferenceError: Cannot access 'c' before initialization
const c = 30;
console.log(c);
```

✅ **Why?**  
- Just like `let`, `const` is **hoisted but NOT initialized** and exists in the **TDZ**.  

---

## **🕘 03:10 - Temporal Dead Zone (TDZ)**  

🚀 **The Temporal Dead Zone (TDZ) is the time between the hoisting of a `let` or `const` variable and its actual declaration.**  

🔹 **Example of TDZ with `let` and `const`:**  

```javascript
console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization
let x = 50;
console.log(x);
```

✅ **Key Takeaways:**  
✔ `var` is hoisted with `undefined`.  
✔ `let` and `const` are hoisted but are in the **Temporal Dead Zone (TDZ)**.  
✔ Accessing `let` or `const` before declaration throws a **ReferenceError**.  

---

## **🕘 05:55 - Function Declaration Hoisting**  

🚀 **Named function declarations are hoisted completely.**  
👉 This means you can call the function **before defining it.**  

🔹 **Example:**  

```javascript
sayHello(); // Output: Hello, World!

function sayHello() {
    console.log("Hello, World!");
}
```

✅ **Why does this work?**  
- **Function declarations are fully hoisted** (both name and definition).  

---

## **🕘 07:13 - Function Expression Hoisting**  

🚀 **Function expressions (Anonymous & Arrow Functions) are NOT hoisted like named function declarations.**  

🔹 **Example with `var`:**  

```javascript
hello(); // ❌ TypeError: hello is not a function

var hello = function() {
    console.log("Hi there!");
};
```

✅ **Why?**  
- `var hello` is hoisted **without its function definition**, so it remains `undefined` until assigned.  
- When calling `hello()`, it's still `undefined`, causing a **TypeError**.  

---

🔹 **Example with `let`:**  

```javascript
hello(); // ❌ ReferenceError: Cannot access 'hello' before initialization

let hello = function() {
    console.log("Hi there!");
};
```

✅ **Why?**  
- `let` variables remain **in the Temporal Dead Zone (TDZ)**, so accessing them before declaration causes a **ReferenceError**.  

---

## **🕘 08:40 - TypeError vs ReferenceError in Hoisting**  

❌ **TypeError:** Happens when you try to **call a variable that exists but holds an invalid value** (like `undefined`).  
❌ **ReferenceError:** Happens when you try to **access a variable that is not defined yet** (like in TDZ).  

🔹 **Example of TypeError (`var` function expression)**  

```javascript
myFunc(); // ❌ TypeError: myFunc is not a function

var myFunc = function() {
    console.log("Hello!");
};
```

✅ **Why?**  
- `var myFunc` is hoisted **without the function body**, so it remains `undefined` at the time of calling.  

---

🔹 **Example of ReferenceError (`let` function expression)**  

```javascript
myFunc(); // ❌ ReferenceError: Cannot access 'myFunc' before initialization

let myFunc = function() {
    console.log("Hello!");
};
```

✅ **Why?**  
- `let` variables are in the **TDZ** until initialized, causing a **ReferenceError**.  

---

## **🔹 Summary from Episode 26**  

✅ **Hoisting moves declarations to the top before execution.**  
✅ **`var` is hoisted but initialized with `undefined`.**  
✅ **`let` and `const` are hoisted but stay in the Temporal Dead Zone (TDZ).**  
✅ **Named functions are hoisted completely.**  
✅ **Function expressions (Anonymous & Arrow functions) are NOT hoisted.**  
✅ **`TypeError` happens when calling `undefined` as a function (`var`).**  
✅ **`ReferenceError` happens when accessing variables in the TDZ (`let`/`const`).**  

---



# JavaScript Learning Notes - Episode 26: Hoisting & Temporal Dead Zone in Javascript



**Topics Covered:**

* What is Hoisting
* Flow of Hoisting
* Variable Hoisting (`var`, `let`, `const`)
* Temporal Dead Zone (TDZ)
* Function Declaration Hoisting
* Function Expression Hoisting
* `TypeError` vs `ReferenceError` while hoisting

---

**🕘 00:00 - What is Hoisting**

* **Hoisting** is a JavaScript behavior where variable and function declarations are moved to the top of their scope (global or function/block scope) during the compilation phase, before the actual code execution.
* This allows you to theoretically use variables and call functions in your code before their actual declaration appears. However, the behavior differs between variable declarations (`var`, `let`, `const`) and function declarations/expressions.

---

**🕘 00:15 - Flow of Hoisting**

1. **Compilation Phase:** Before your JavaScript code is executed line by line, the JavaScript engine goes through a compilation phase. During this phase, it identifies all variable and function declarations.
2. **Moving Declarations to the Top:** The declarations (not the initializations or assignments for variables) are conceptually moved to the top of their respective scopes.
3. **Execution Phase:** After hoisting, the code is executed line by line.

---

**🕘 00:56 - Variable Hoisting**

* **`var` Hoisting:**
    * Only the declaration of a `var` variable is hoisted to the top of its function scope (or global scope if declared outside any function).
    * The initialization (assignment of a value) is **not** hoisted.
    * If you try to access a `var` variable before it's assigned a value, you will get `undefined`.

    ```javascript
    // Before hoisting (conceptual):
    // var a;

    // Actual execution:
    console.log(a); // Output: undefined
    var a = 10;
    console.log(a); // Output: 10
    ```

* **`let` and `const` Hoisting:**
    * Declarations of `let` and `const` variables are also hoisted to the top of their block scope.
    * However, unlike `var`, `let` and `const` variables are not initialized during hoisting. They enter a **Temporal Dead Zone (TDZ)**.
    * If you try to access a `let` or `const` variable before its declaration in the code, you will get a `ReferenceError`.

    ```javascript
    // console.log(b); // Error: Cannot access 'b' before initialization (ReferenceError)
    let b = 20;
    console.log(b); // Output: 20

    // console.log(c); // Error: Cannot access 'c' before initialization (ReferenceError)
    const c = 30;
    console.log(c); // Output: 30
    ```

---

**🕘 03:10 - Temporal Dead Zone (TDZ)**

* The **Temporal Dead Zone (TDZ)** is the period between the start of a scope and the line where a `let` or `const` variable is declared and initialized.
* During the TDZ, you cannot access the variable; doing so will result in a `ReferenceError`.
* The TDZ helps to avoid unexpected behavior and makes the lifecycle of `let` and `const` variables more predictable.

---

**🕘 05:55 - Function Declaration Hoisting**

* **Function declarations** (using the `function` keyword followed by a name) are fully hoisted to the top of their scope.
* This means you can call a named function anywhere within its scope, even before its declaration in the code. Both the declaration and the function body are hoisted.

    ```javascript
    sample(); // Output: I'm in
    function sample() {
      console.log("I'm in");
    }
    ```

---

**🕘 07:13 - Function Expression Hoisting**

* **Function expressions** (when you assign an anonymous or named function to a variable) behave according to the hoisting rules of the variable type (`var`, `let`, or `const`) used for the assignment.

    * **`var` with function expression:** The variable declaration is hoisted, but the function assignment is not. If you try to call the variable as a function before the assignment, you will get a `TypeError` because the variable will be `undefined` at that point.

        ```javascript
        // sample1(); // TypeError: sample1 is not a function (because sample1 is undefined)
        var sample1 = function() {
          console.log("Am I accessible");
        };
        sample1(); // Output: Am I accessible
        ```

    * **`let` or `const` with function expression:** The variable declaration is hoisted, but the variable remains in the TDZ until the assignment. Trying to call it will result in a `ReferenceError`.

        ```javascript
        // sample2(); // ReferenceError: Cannot access 'sample2' before initialization
        let sample2 = function() {
          console.log("Am I accessible");
        };
        sample2(); // Output: Am I accessible
        ```

---

**🕘 08:40 - `TypeError` vs `ReferenceError` while hoisting**

* **`ReferenceError`:** Occurs when you try to access a variable that has not been declared at all in the current scope or is within the Temporal Dead Zone (for `let` and `const`).

    ```javascript
    // console.log(undeclaredVariable); // ReferenceError: undeclaredVariable is not defined

    let x;
    // console.log(x); // undefined (declared but not yet initialized in the code flow)

    // console.log(y); // ReferenceError: Cannot access 'y' before initialization
    let y = 5;
    ```

* **`TypeError`:** Can occur when you try to perform an operation on a value of an unexpected type. In the context of hoisting function expressions with `var`, a `TypeError` happens when you try to call a variable as a function before it has been assigned a function value (it's still `undefined`).

    ```javascript
    var myFunction;
    // myFunction(); // TypeError: myFunction is not a function

    myFunction = function() {
      console.log("Hello");
    };
    myFunction(); // Output: Hello
    ```

**Summary of Hoisting Behavior:**

| Declaration Type | Hoisting Behavior                      | Initial Value Before Assignment | Access Before Declaration |
|------------------|----------------------------------------|-------------------------------|---------------------------|
| `var`            | Declaration hoisted to function/global scope | `undefined`                   | `undefined`               |
| `let`            | Declaration hoisted to block scope     | Uninitialized (in TDZ)        | `ReferenceError`          |
| `const`          | Declaration hoisted to block scope     | Uninitialized (in TDZ)        | `ReferenceError`          |
| Function Declaration | Declaration and body hoisted        | Function object               | Accessible                |
| Function Expression (`var`) | Variable declaration hoisted       | `undefined`                   | `TypeError` (if called)   |
| Function Expression (`let`/`const`) | Variable declaration hoisted       | Uninitialized (in TDZ)        | `ReferenceError` (if called)   |

**Best Practices:**

* To avoid confusion and potential bugs related to hoisting, it is generally recommended to declare all your variables at the top of their scope (function or block) and to define functions before you call them.
* Be especially mindful of the TDZ when using `let` and `const`.

---