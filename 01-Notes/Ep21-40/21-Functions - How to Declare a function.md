# **JavaScript Learning Notes - Episode 21**   

---

## **Topics Covered:**  
- **What is a Function?**  
- **Function Declaration & Function Call**  
- **Function Parameters & Arguments**  
- **Conditional Statements inside Functions**  

---

## **🕘 00:15 - What is a Function?**  

✅ **Definition:**  
- A **function in JavaScript** is a **block of reusable code** that performs a specific task.  
- Instead of writing the same code multiple times, you define a function **once** and **call** it whenever needed.  
- Functions help in making the code **modular, organized, and reusable**.  

### **🔹 Why Use Functions?**  
✔ Avoid code repetition  
✔ Make code **organized & readable**  
✔ Improve debugging & maintainability  
✔ Allow reuse of code in **different places**  

---

## **🕘 01:40 - Function Declaration & Function Call**  

### **✅ Function Declaration:**  
- Declaring a function means **defining** it before use.  
- It uses the `function` keyword, a **function name**, parentheses `()`, and curly braces `{}`.  
- Inside `{}`, we **write the code** that should run when the function is called.  

### **✅ Function Call:**  
- A function does nothing until it is **called (invoked)** using its name followed by `()`.

### **📌 Example Code:**  

```javascript
function printUserName() {  
    console.log("Hello Everyone!");  
}

// Calling the function
printUserName();  
```

### **📌 Output:**  
```plaintext
Hello Everyone!
```

🔹 **Key Takeaways:**  
✔ **Function Declaration**: `function functionName() { ... }`  
✔ **Function Call**: `functionName();`  
✔ Code inside `{}` runs **only when the function is called**  

---

## **🕘 04:15 - Function Parameters & Arguments**  

✅ **Function Parameters:**  
- **Placeholders** for values that a function **expects to receive**.  
- Defined **inside parentheses `()`** in function declaration.  

✅ **Function Arguments:**  
- **Actual values** provided when calling the function.  
- Arguments replace the **parameters** during execution.  

### **📌 Example Code:**  

```javascript
function printUserName(uName, uAge) {  
    console.log(`Hi ${uName}, your age is ${uAge}`);  
}

// Calling function with different arguments
printUserName("John", 32);
printUserName("Willian", 28);
printUserName("David", 25);
```

### **📌 Output:**  
```plaintext
Hi John, your age is 32
Hi Willian, your age is 28
Hi David, your age is 25
```

🔹 **Key Takeaways:**  
✔ **Parameters** are like **empty boxes** that receive values.  
✔ **Arguments** are the actual **values sent** when calling the function.  
✔ Functions can take **multiple parameters** separated by `,`.  

---

## **🕘 09:40 - Conditional Statement inside Function**  

✅ **Why Use Conditional Statements in Functions?**  
- Sometimes, we only want the function to **execute certain actions** based on conditions.  

### **📌 Example Code:**  

```javascript
function printUserName(uName, uAge) {  
    if (uAge < 40) {  
        console.log(`Hi ${uName}, your age is ${uAge}`);  
    }
}

// Calling function
printUserName("John", 60);   // Won't print because age > 40
printUserName("Willian", 28);
printUserName("David", 25);
```

### **📌 Output:**  
```plaintext
Hi Willian, your age is 28
Hi David, your age is 25
```

🔹 **Key Takeaways:**  
✔ Functions can contain **conditional statements** like `if`, `else`.  
✔ The function **only executes code** if the condition is `true`.  
✔ In this example, only users with `age < 40` get printed.  

---

## **🔹 Summary from Episode 21**  
✅ **Functions** allow code reuse and better organization.  
✅ **Function Declaration:** `function functionName() { ... }`  
✅ **Function Call:** `functionName();`  
✅ **Parameters** are placeholders, **arguments** are actual values.  
✅ **Conditional Statements** can be used inside functions for logic control.  

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