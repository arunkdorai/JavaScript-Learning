# **JavaScript Learning Notes - Episode 27**

---

## **Topics Covered:**  
- **What is Currying in JavaScript?**  
- **Currying vs Uncurrying**  
- **Examples of Currying**  
- **Benefits of Currying**  

---

## **🕘 00:15 - What is Currying?**  

🚀 **Currying is a functional programming technique** where a function is transformed into a sequence of functions, each taking **only one argument at a time**.  

✅ Instead of passing all arguments together, a curried function **returns another function** until all arguments are provided.  

---

## **🕘 00:40 - Currying vs Uncurrying**  

🔹 **Uncurried Function (Normal Function):**  
- Takes all arguments at once and executes immediately.  

🔹 **Curried Function:**  
- Takes **one argument at a time** and **returns another function** until all arguments are provided.  

---

## **🕘 01:27 - Example of Currying**  

### **🔹 Example 1: Uncurried Function (Normal Function)**  

```javascript
function add(a, b, c) {
    console.log(a + b + c);
}

add(1, 2, 3);  // Output: 6
```

✅ **Here, `add()` takes all arguments at once and executes immediately.**  

---

### **🔹 Example 2: Curried Function (Using Nested Functions)**  

```javascript
function add1(a) {
    return function(b) {
        return function(c) {
            console.log(a + b + c);
        };
    };
}

add1(10)(20)(50);  // Output: 80
```

✅ **How does this work?**  
- `add1(10)` returns `function(b) {...}`  
- `add1(10)(20)` returns `function(c) {...}`  
- `add1(10)(20)(50)` executes and prints `80`.  

---

### **🔹 Example 3: Assigning Partial Applications**  

```javascript
let curry1 = add1(100);
console.log(curry1);  // Returns function (b) { return function(c) {...} }

let curry2 = curry1(200);
console.log(curry2);  // Returns function (c) {...}

curry2(300);  // Output: 600
```

✅ **Breaking it down:**  
1. `curry1 = add1(100)` returns `function(b) {...}`.  
2. `curry2 = curry1(200)` returns `function(c) {...}`.  
3. `curry2(300)` executes `100 + 200 + 300 = 600`.  

---

## **🛠 Benefits of Currying**  

✔ **More Readable and Reusable Code:**  
   - You can create specific functions by pre-setting values.  

✔ **Avoids Repeating Arguments (Partial Application):**  
   - Useful when you frequently use the same starting arguments.  

✔ **Better Function Composition:**  
   - Makes functions more modular and easier to use in complex operations.  

---



# JavaScript Learning Notes - Episode 27: Currying in Javascript



**Topics Covered:**

* What is Currying
* Currying vs Uncurrying
* Example of Currying

---

**🕘 00:15 - What is Currying**

* **Currying** is a functional programming technique that transforms a function that accepts multiple arguments into a sequence of functions, each accepting a single argument.
* In essence, a curried function with `n` arguments is converted into `n` functions that are invoked one after the other, each taking one argument.
* The intermediate functions return another function that expects the next argument, until all arguments are provided, at which point the original function's logic is executed with all the accumulated arguments.

**Example:**

A function `add(a, b, c)` can be curried into `add(a)(b)(c)`.

---

**🕘 00:40 - Currying vs Uncurrying**

* **Uncurrying** is the reverse process of currying. It transforms a curried function (a sequence of unary functions) back into a function that accepts multiple arguments at once. The tutorial's code snippet starts with an example of an uncurried function:

    ```javascript
    // Uncurrying (Example of a regular, uncurried function)
    function add(a, b, c) {
      console.log(a + b + c);
    }
    add(1, 2, 3); // Output: 6
    ```

* **Currying** is the transformation of this `add(a, b, c)` function into a series of functions that each take one argument.

---

**🕘 01:27 - Example of Currying**

The tutorial provides an example of manually currying a function that would originally take three arguments:

```javascript
// Currying
function add1(a) {
  return function(b) {
    return function(c) {
      console.log(a + b + c);
    };
  };
}

// Calling the curried function:
add1(10)(20)(50); // Output: 80

let curry1 = add1(100);
console.log(curry1); // Output: [Function (anonymous)] (a function that expects 'b')

let curry2 = curry1(200);
console.log(curry2); // Output: [Function (anonymous)] (a function that expects 'c')

curry2(300); // Output: 600 (100 + 200 + 300)
```

**Explanation of the Curried Example:**

1. **`add1(a)`:** The outer function takes the first argument `a` and returns another function.
2. **`(b)`:** The function returned by `add1(a)` takes the second argument `b` and returns yet another function.
3. **`(c)`:** The function returned by the previous step takes the third argument `c`. Inside this innermost function, the values of `a`, `b`, and `c` (which were captured from the outer function's scopes due to closure) are now all available, and the `console.log(a + b + c)` is executed.

**How the Calls Work:**

* `add1(10)`: This call executes the `add1` function with `a` set to 10. It returns the inner function that is waiting for the `b` argument.
* `add1(10)(20)`: The result of `add1(10)` (the function waiting for `b`) is immediately called with `b` set to 20. This returns the innermost function that is waiting for the `c` argument.
* `add1(10)(20)(50)`: The result of `add1(10)(20)` (the function waiting for `c`) is called with `c` set to 50. This finally executes `console.log(10 + 20 + 50)`.

**Demonstration with Intermediate Variables:**

* `let curry1 = add1(100);`: `curry1` now holds the function that expects the `b` argument (with `a` already set to 100).
* `console.log(curry1);`: This shows that `curry1` is indeed a function.
* `let curry2 = curry1(200);`: `curry2` now holds the function that expects the `c` argument (with `a` set to 100 and `b` set to 200).
* `console.log(curry2);`: This also shows that `curry2` is a function.
* `curry2(300);`: This final call provides the `c` argument (300), and the `console.log(100 + 200 + 300)` is executed.

**Benefits of Currying:**

* **Partial Application:** You can partially apply arguments to a function, creating new functions with some arguments already fixed. This is demonstrated by `curry1` and `curry2` in the example.
* **Code Reusability:** By creating specialized functions through partial application, you can reuse logic in different contexts.
* **Improved Readability (in some cases):** For certain patterns, currying can make code more expressive and easier to understand.
* **Function Composition:** Curried functions are often easier to compose with other functions.

**Manual Currying vs. Utility Functions:**

While you can manually curry functions as shown in the example, many JavaScript libraries (like Lodash with its `_.curry` function) provide utility functions to automatically curry a regular function. This can simplify the process, especially for functions with a larger number of arguments.

---