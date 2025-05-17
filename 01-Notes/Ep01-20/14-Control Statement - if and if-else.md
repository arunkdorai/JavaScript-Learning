# **JavaScript Learning Notes - Episode 14**  

---

## **Topics Covered:**  
- **Control Statements in JavaScript**  
- **Types of Control Statements**  
- **Conditional Statements (`if`, `if-else`)**  
- **Writing `if` and `if-else` Statements with Examples**  

---

## **🕘 00:06 - What is a Control Statement?**  

### **📌 Definition**  
✅ **Control Statements** help decide how a program runs by allowing it to execute specific code based on conditions.  
✅ These statements **control** the **flow of execution** in a program.  

### **📌 Types of Control Statements**  
There are **two main categories** of control statements in JavaScript:  

1️⃣ **Conditional Statements** (Decision-Making Statements)  
   - `if` Statement  
   - `if-else` Statement  
   - `if-else if` Statement  
   - `switch` Statement  

2️⃣ **Looping Statements** (Repetition Statements)  
   - `for` Loop  
   - `while` Loop  
   - `do-while` Loop  

---

## **🕘 00:55 - Conditional Statements**  

### **📌 Definition**  
✅ A **conditional statement** executes a block of code **only if** a specified condition evaluates to `true`.  
✅ Used to **make decisions** in a program.  

---

## **🕘 01:15 - `if` Statement**  

### **📌 Definition**  
✅ The `if` statement executes a **block of code** **only if** the given condition is `true`.  
✅ If the condition is `false`, the block **is skipped**.  

### **📌 Syntax**  
```javascript
if(condition) {
   // Code to execute if condition is true
}
```

### **📌 Example**  
```javascript
let age = 18;

if (age >= 18) {
    console.log("User is eligible to vote");
}
```

✅ If `age` is **18 or more**, the message `"User is eligible to vote"` will be printed.  
✅ If `age` is **less than 18**, nothing happens.  

---

## **🕘 04:30 - `if-else` Statement**  

### **📌 Definition**  
✅ The `if-else` statement is an **extension of `if`**.  
✅ If the **condition is true**, one block of code runs.  
✅ If the **condition is false**, a **different block** of code runs.  

### **📌 Syntax**  
```javascript
if(condition) {
   // Code to execute if condition is true
} else {
   // Code to execute if condition is false
}
```

### **📌 Example**  
```javascript
let userAge = 17;

if (userAge >= 18) {
    console.log("User is eligible to vote");
} else {
    console.log("User is not eligible to vote");
}
```

✅ If `userAge` is **18 or more**, it prints `"User is eligible to vote"`.  
✅ If `userAge` is **less than 18**, it prints `"User is not eligible to vote"`.  

---

## **📂 Full Code Example from Episode 14**  

```javascript
// ********** if Statement Example **********

let age = 18;

if (age >= 18) {
    console.log("User is eligible to vote");
}

// ********** if-else Statement Example **********

let userAge = 17;

if (userAge >= 18) {
    console.log("User is eligible to vote");
} else {
    console.log("User is not eligible to vote");
}

// ********** Another Example **********

let pwd_input = true;

if (pwd_input) {
    console.log("Welcome to Website");
} else {
    console.log("Password is incorrect");
}
```

---

## **🔹 Summary from Episode 14**  
✅ **Control Statements** manage the flow of a program.  
✅ **Conditional Statements (`if`, `if-else`)** help make decisions.  
✅ **`if` Statement** executes code **only if** the condition is `true`.  
✅ **`if-else` Statement** runs one block **if condition is true** and another **if condition is false**.  

---



# JavaScript Learning Notes - Episode 14: Control Statement - if & if-else Statement in Javascript



**Topics Covered:**

* What is Control Statement
* Types of Control Statement
* Conditional Statement
* If Statement
* If-Else Statement

---

**🕘 00:06 - What is Control Statement**

* **Control statements** in JavaScript are used to control the flow of execution of code. They allow you to make decisions and repeat actions based on certain conditions.
* Control statements determine which parts of your code are executed and in what order.

---

**🕘 00:35 - Types of Control Statement**

JavaScript provides several types of control statements, including:

* **Conditional Statements:** `if`, `else if`, `else`, `switch` (used for making decisions).
* **Looping Statements:** `for`, `while`, `do...while`, `for...in`, `for...of` (used for repeating blocks of code).
* **Jump Statements:** `break`, `continue`, `return` (used for altering the flow of execution within loops or functions).

This episode focuses on the basic **conditional statements**: `if` and `if-else`.

---

**🕘 00:55 - Conditional Statement**

* A **conditional statement** is a type of control statement that allows you to execute specific blocks of code only if certain conditions are met (evaluate to `true`).

---

**🕘 01:15 - If Statement**

* The `if` statement is the most basic conditional statement.
* **Syntax:**
  ```javascript
  if (condition) {
      // Code to be executed if the condition is true
  }
  // Code that always runs after the if statement (regardless of the condition)
  ```
* **How it works:**
    1. The `condition` inside the parentheses `()` is evaluated.
    2. If the `condition` evaluates to `true`, the block of code enclosed within the curly braces `{}` immediately following the `if` statement is executed.
    3. If the `condition` evaluates to `false`, the block of code within the curly braces is skipped, and the program execution continues with the next statement after the `if` block.

   ```javascript
   let uAge = 18;

   if (uAge >= 18) {
       console.log("User is eligible to vote");
   }
   // Output: User is eligible to vote (because uAge is 18, which is >= 18)

   uAge = 15;

   if (uAge >= 18) {
       console.log("User is eligible to vote"); // This line will not be executed
   }
   console.log("This line always runs.");
   // Output: This line always runs.
   ```

---

**🕘 04:30 - If-Else Statement**

* The `if-else` statement provides a way to execute one block of code if a condition is `true` and another block of code if the condition is `false`.
* **Syntax:**
  ```javascript
  if (condition) {
      // Code to be executed if the condition is true
  } else {
      // Code to be executed if the condition is false
  }
  // Code that always runs after the if-else statement
  ```
* **How it works:**
    1. The `condition` inside the parentheses `()` of the `if` statement is evaluated.
    2. If the `condition` evaluates to `true`, the block of code within the curly braces `{}` following the `if` statement is executed. The code within the `else` block is skipped.
    3. If the `condition` evaluates to `false`, the block of code within the curly braces `{}` following the `else` statement is executed. The code within the `if` block is skipped.
    4. After either the `if` block or the `else` block is executed, the program execution continues with the next statement after the `if-else` block.

   ```javascript
   let uAge1 = 17;

   if (uAge1 >= 18) {
       console.log("He is Eligible"); // This line will not be executed
   } else {
       console.log("He is not eligible");
   }
   // Output: He is not eligible (because uAge1 is 17, which is not >= 18)

   let pwd_input = true;

   if (pwd_input) {
       console.log("Welcome to Website");
   } else {
       console.log("Password is incorrect");
   }
   // Output: Welcome to Website (because pwd_input is true)

   pwd_input = false;

   if (pwd_input) {
       console.log("Welcome to Website"); // This line will not be executed
   } else {
       console.log("Password is incorrect");
   }
   // Output: Password is incorrect (because pwd_input is false)
   ```

**Key Points:**

* The `condition` in an `if` or `if-else` statement must be an expression that evaluates to a boolean value (`true` or `false`).
* The code blocks within the `if` and `else` statements are enclosed in curly braces `{}`. If a block contains only a single statement, the braces are technically optional, but it is generally considered good practice to always include them for clarity and to avoid potential errors when adding more statements later.
* `if` and `if-else` statements allow your program to make decisions and execute different code paths based on the evaluation of conditions.

---