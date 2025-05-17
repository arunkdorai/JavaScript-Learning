# **JavaScript Learning Notes - Episode 28** 

---

## **Topics Covered:**  
- **Self-Invoked Functions (IIFE - Immediately Invoked Function Expressions)**  
- **Closures in JavaScript**  
- **Real-world uses of IIFE and Closures**  
- **Example Code Implementations**  

---

## **🕘 00:12 - Self-Invoked Function (IIFE)**  

🚀 **What is a Self-Invoked Function?**  
A **Self-Invoked Function** is a function that runs **automatically** when defined.  

📌 **Also known as**:  
✅ **IIFE (Immediately Invoked Function Expression)**  

✔ **Syntax:**  
```javascript
(function() {
    console.log("This function runs immediately!");
})();
```
✔ **Output:**  
```
This function runs immediately!
```

✔ **Why use IIFE?**  
- Avoids **polluting the global scope**.  
- Helps in **encapsulation** (keeping variables private).  
- Useful in scenarios like **module pattern and event listeners**.  

---

## **🕘 02:50 - IIFE Examples**  

### **🔹 Example 1: Basic IIFE**
```javascript
(function () {
    console.log("Self Invoked Function");
})();
```
✔ **Output:**  
```
Self Invoked Function
```

### **🔹 Example 2: IIFE with Parameters**
```javascript
(function (userName, age) {
    console.log("Self Invoked Function -", userName + age);
})("Virat", 36);
```
✔ **Output:**  
```
Self Invoked Function - Virat36
```

---

## **🕘 04:55 - Closure in JavaScript**  

🚀 **What is a Closure?**  
A **closure** happens when a function **remembers and uses variables** from its parent function **even after the parent function has finished running**.  

✔ **How Closures Work?**  
- When an inner function is returned from an outer function, it **"closes over"** its parent function’s variables.  
- The inner function **remembers** the values **even after the parent function is gone**.  

---

## **🕘 05:30 - Closure Example**  

```javascript
function outerFunction() {
    let outerVariable = "I'm from outer scope";

    function innerFunction() {
        console.log(outerVariable);  // Still has access to outerVariable
    }

    return innerFunction;  // Returning the inner function
}

let inFunc = outerFunction();  // outerFunction() runs and returns innerFunction
inFunc();  // Calls innerFunction, which still has access to outerVariable
```
✔ **Output:**  
```
I'm from outer scope
```

---

## **🛠 Why Use Closures?**  

✔ **1. Data Encapsulation**  
   - Keeps variables **private** and **protected** from being modified externally.  
✔ **2. Preserving State**  
   - Retains information even after a function completes execution.  
✔ **3. Avoiding Global Variables**  
   - Prevents unnecessary **pollution of the global scope**.  

---

## **🔹 Real-World Use Cases of IIFE & Closures**  

🔹 **IIFE Use Cases:**  
- Module Pattern (Encapsulation)  
- Avoiding polluting the global scope  
- Initializing scripts immediately  

🔹 **Closures Use Cases:**  
- Creating private variables in JavaScript  
- Memoization and caching  
- Event listeners & callbacks  

---



# JavaScript Learning Notes - Episode 28: Self Invoked Function & Closure in Javascript



**Topics Covered:**

* Self Invoked Function
* IIFE (Immediately Invoked Function Expression)
* Closure
* Example of Closure

---

**🕘 00:12 - Self Invoked Function**

* A **self-invoking function** in JavaScript is a function that is defined and executed immediately in a single expression.
* This pattern is often used to create private scopes for variables, preventing them from polluting the global scope.

**🕘 02:50 - IIFE (Immediately Invoked Function Expression)**

* **IIFE** stands for **Immediately Invoked Function Expression**. It is the most common way to create self-invoking functions in JavaScript.
* **Syntax:** The function is wrapped in parentheses `()`, and then another pair of parentheses `()` is added at the end to immediately invoke it.

    ```javascript
    (function () {
      console.log("Self Invoked Function");
    })();
    // Output: Self Invoked Function
    ```

* **Explanation:**
    1. The first set of parentheses `(function () { ... })` turns the function declaration into a function expression. This is necessary because function declarations cannot be immediately invoked.
    2. The second set of parentheses `()` immediately calls the function expression created in the first step.

* **Passing Arguments to IIFEs:** You can pass arguments to an IIFE just like any other function call.

    ```javascript
    (function (userName, age) {
      console.log("Self Invoked Function ", userName + age);
    })("Virat", 36);
    // Output: Self Invoked Function  Virat36
    ```

* **Benefits of IIFEs:**
    * **Creating Private Scope:** Variables declared inside an IIFE are local to that function and are not accessible from the outside global scope. This helps avoid naming conflicts and keeps the global namespace clean.
    * **Encapsulation:** You can encapsulate code and data within an IIFE, exposing only what is necessary.
    * **Module Pattern (older approach):** Before the introduction of ES Modules, IIFEs were commonly used to create modules in JavaScript.

---

**🕘 04:55 - Closure**

* A **closure** is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables — the scope in which it was created — even after the outer function has finished executing.
* The inner function "closes over" the variables of its outer function, preserving their values.

**🕘 05:30 - Example of Closure**

```javascript
function outerFunction() {
  let outerVariable = "I'm from outer scope";
  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}

let inFunc = outerFunction();
inFunc(); // Output: I'm from outer scope
```

* **Explanation:**
    1. `outerFunction` is called.
    2. Inside `outerFunction`, a variable `outerVariable` is declared, and an inner function `innerFunction` is defined.
    3. `innerFunction` accesses `outerVariable` from its surrounding scope.
    4. `outerFunction` returns `innerFunction`. At this point, `outerFunction` has finished executing.
    5. The returned `innerFunction` is assigned to the variable `inFunc`.
    6. When `inFunc()` is called (which is the original `innerFunction`), it can still access and use `outerVariable` even though `outerFunction` has completed its execution. This is because of the closure. `innerFunction` "remembers" the environment in which it was created.

**Another Example Illustrating Data Persistence:**

```javascript
function counter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}

let incrementCounter = counter();
incrementCounter(); // Output: 1
incrementCounter(); // Output: 2
incrementCounter(); // Output: 3

let anotherCounter = counter();
anotherCounter(); // Output: 1 (a new closure with its own 'count' variable)
```

* In this example, each call to `counter()` creates a new closure. The inner anonymous function has access to its own `count` variable from the `counter` function's scope. The `count` variable is not accessible directly from outside the `counter` function, but it is preserved and can be modified by the returned inner function.

**Key Characteristics of Closures:**

* **Inner function accessing outer scope:** An inner function has access to the variables of its outer (enclosing) function.
* **Outer function has finished:** This access persists even after the outer function has completed its execution.
* **Preservation of variables:** The inner function "closes over" the outer function's variables, keeping them alive.
* **Multiple closures:** If an outer function creates multiple inner functions, each inner function will have its own closure over the outer function's variables.

**Use Cases for Closures:**

* **Data privacy and encapsulation:** Creating private variables that can only be accessed through the inner function.
* **Creating factory functions:** Functions that return other functions with some pre-configured behavior.
* **Maintaining state:** As seen in the counter example, closures can be used to maintain state across multiple calls to the inner function.
* **Event handlers and callbacks:** Often used in event-driven programming to access variables from the surrounding scope when the event occurs.

---