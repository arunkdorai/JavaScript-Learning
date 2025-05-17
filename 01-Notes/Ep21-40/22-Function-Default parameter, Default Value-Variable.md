# **JavaScript Learning Notes - Episode 22** 

---

## **Topics Covered:**  
- **Default Parameters in Functions**  
- **Default Values for Variables using `||` (Logical OR)**  

---

## **🕘 00:11 - What is a Default Parameter?**  

✅ **Definition:**  
- A **default parameter** in JavaScript allows a function to have a **predefined value** if no argument is provided.  
- Introduced in **ES6**, default parameters **prevent errors** from missing values.  
- When calling the function:
  - If a value is provided, it replaces the **default**.
  - If no value is provided, the function **uses the default**.  

### **📌 Example Code:**  

```javascript
function printUserName(uName = "Albert", uAge = 40) {
    console.log(`Hi ${uName}, your age is ${uAge}`);
}

// Calling the function with different arguments
printUserName("John", 60);   // Overwrites default values
printUserName("Willian", 28);  
printUserName("David");      // uAge defaults to 40
printUserName();             // uName = "Albert", uAge = 40
printUserName(undefined, 36); // Only uAge changes
```

### **📌 Output:**  
```plaintext
Hi John, your age is 60
Hi Willian, your age is 28
Hi David, your age is 40
Hi Albert, your age is 40
Hi Albert, your age is 36
```

🔹 **Key Takeaways:**  
✔ **Default parameters** help prevent errors from missing arguments.  
✔ If no value is passed, the function uses **default values**.  
✔ You can **override** defaults by passing arguments.  
✔ Passing `undefined` keeps the default value **only for that parameter**.  

---

## **🕘 05:12 - Default Value for Variables using `||` (Logical OR)**  

✅ **Definition:**  
- In JavaScript, the `||` (Logical OR) operator can **assign a default value** if a variable is **falsy**.  
- **Falsy values** include `0`, `""` (empty string), `null`, `undefined`, and `false`.  
- If the left-side value is **truthy**, it is assigned. Otherwise, the **right-side default value** is used.  

### **📌 Example Code:**  

```javascript
let employeeId = "";  // Empty string (Falsy)
let newId = employeeId || "EID98765"; // Assigns default value

console.log(newId);
```

### **📌 Output:**  
```plaintext
EID98765
```

### **📌 More Examples:**  

```javascript
let a = 10;
let b = a || "Default value";  // a is truthy, so b = 10

let c;  // c is undefined (Falsy)
let d = c || "Default value";  // c is falsy, so d = "Default value"

console.log(b); // 10
console.log(d); // "Default value"
```

### **📌 Output:**  
```plaintext
10
Default value
```

🔹 **Key Takeaways:**  
✔ `||` (Logical OR) **checks if a value is truthy or falsy**.  
✔ If **truthy**, it **keeps the existing value**.  
✔ If **falsy**, it assigns the **default value** on the right side.  
✔ Commonly used for **default assignments** when values may be `undefined`, `null`, or empty.  

---

## **🔹 Summary from Episode 22**  
✅ **Default Parameters**: Functions can have **predefined values** if no arguments are passed.  
✅ **Logical OR (`||`)**: Assigns a **default value** if the variable is falsy (`""`, `0`, `null`, `undefined`).  
✅ **Best Practice**: Default values **prevent errors** and improve **code robustness**.  

---



# JavaScript Learning Notes - Episode 21: Javascript Functions | How to Declare a Function?


**Topics Covered:**

* What is Function
* Function Declaration & Function Call
* Function Parameter
* Function Argument
* Conditional Statement inside Function

---

**🕘 00:15 - What is Function**

* A **function** in JavaScript is a block of organized and reusable code that performs a specific task.
* Functions are fundamental building blocks in JavaScript, allowing you to structure your code, make it more modular, and avoid code repetition.
* They help in breaking down complex problems into smaller, more manageable parts.

---

**🕘 01:40 - Function Declaration & Function Call**

* **Function Declaration:** This is how you create or define a function in JavaScript.
    * You start with the `function` keyword.
    * Followed by the **function name** (an identifier that you'll use to call the function).
    * Then, a pair of **parentheses `()`**, which can optionally contain parameters (placeholders for input values).
    * Finally, a pair of **curly braces `{}`**, which enclose the **function body** – the set of statements that will be executed when the function is called.

    ```javascript
    // Function Declaration
    function greet() {
      console.log("Hello!");
    }
    ```

* **Function Call:** This is how you execute the code inside a function that has been declared.
    * To call a function, you simply write its name followed by a pair of parentheses `()`.

    ```javascript
    // Function Call
    greet(); // Output: Hello!
    ```

    ```javascript
    // Example with a variable (commented out in the original code)
    // let person1 = {
    //   name1: "John",
    //   age: 40
    // }

    // function printUserName(){
    //   console.log("Hello Everyone", person1.name1, person1.age)
    // }
    // printUserName(); // Would output: Hello Everyone John 40
    ```

---

**🕘 04:15 - Function Parameter**

* **Parameters** are variables listed inside the parentheses `()` in the function declaration.
* They act as placeholders for the values that will be passed into the function when it is called.
* A function can have zero or more parameters. If there are multiple parameters, they are separated by commas.

    ```javascript
    function printUserName(uName, uAge) { // uName and uAge are parameters
      console.log(`Hi ${uName}, your age is ${uAge} `);
    }
    ```

---

**🕘 06:15 - Function Argument**

* **Arguments** are the actual values that are passed to a function when it is called.
* They correspond to the parameters defined in the function declaration.
* When you call a function with arguments, these values are assigned to the function's parameters in the order they are listed.

    ```javascript
    printUserName("John", 32);   // "John" is the argument for uName, 32 is the argument for uAge
    printUserName("Willian", 28); // "Willian" for uName, 28 for uAge
    printUserName("David", 25);  // "David" for uName, 25 for uAge
    /*
    Output:
    Hi John, your age is 32
    Hi Willian, your age is 28
    Hi David, your age is 25
    */
    ```

---

**🕘 09:40 - Conditional Statement inside Function**

* You can use any valid JavaScript statements inside a function body, including conditional statements like `if`, `else if`, and `else`.
* This allows you to create functions that perform different actions based on the input arguments or other conditions.

    ```javascript
    function printUserName(uName, uAge) {
      if (uAge < 40) {
        console.log(`Hi ${uName}, your age is ${uAge} `);
      }
    }

    printUserName("John", 60); // No output because 60 is not less than 40
    printUserName("Willian", 28); // Output: Hi Willian, your age is 28
    printUserName("David", 25); // Output: Hi David, your age is 25
    ```

**Key Concepts:**

* **Modularity:** Functions help break down code into reusable blocks.
* **Reusability:** Once a function is defined, it can be called multiple times with different arguments.
* **Organization:** Functions make code easier to read, understand, and maintain.
* **Parameters and Arguments:** Allow functions to accept and work with different input data.
* **Scope:** Variables declared inside a function are generally local to that function (function scope).

---