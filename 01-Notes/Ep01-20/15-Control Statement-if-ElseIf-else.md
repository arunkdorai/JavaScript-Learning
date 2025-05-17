# **JavaScript Learning Notes - Episode 15** 

---

## **Topics Covered:**  
- **Why use `if-else if-else`?**  
- **Flow of Execution in `if-else if-else`**  
- **Syntax of `if-else if-else` Statement**  
- **Practical Examples with Time of Day and Semester Marks**  

---

## **🕘 00:06 - Why Use `if-else if-else`?**  

✅ The `if` statement **checks a condition** and runs code **only if it is true**.  
✅ The `else if` statement **checks additional conditions** if the first `if` condition is false.  
✅ The `else` statement **runs a block of code when all previous conditions fail**.  

### **📌 Why Use `if-else if-else` Instead of Multiple `if` Statements?**  
- **More efficient:** Once a condition is met, remaining conditions are ignored.  
- **Clearer logic:** It helps define exclusive conditions without unnecessary checks.  
- **Avoids redundant code execution.**  

---

## **🕘 00:25 - Flow of `if-else if-else` Statement**  

### **📌 How It Works**  
1️⃣ **First Condition (`if`) is checked:**  
   - If `true`, execute its block and skip the rest.  
   - If `false`, move to the next `else if`.  

2️⃣ **Subsequent Conditions (`else if`) are checked one by one:**  
   - If any condition is `true`, execute its block and skip the rest.  
   - If none are `true`, move to `else`.  

3️⃣ **Final `else` executes if no conditions are met.**  

---

## **🕘 01:00 - Syntax of `if-else if-else`**  

```javascript
if (condition1) {
    // Executes if condition1 is true
} else if (condition2) {
    // Executes if condition1 is false and condition2 is true
} else if (condition3) {
    // Executes if all above conditions are false and condition3 is true
} else {
    // Executes if none of the conditions above are true
}
```

---

## **🕘 01:42 - Example 1: Checking Time of Day**  

### **📌 Problem Statement:**  
Write a JavaScript program to categorize different times of the day.  

### **📌 Code:**
```javascript
let hour = 20; // You can change this value to test

if (hour >= 1 && hour <= 6) {
    console.log("Early Morning");
} else if (hour >= 7 && hour <= 12) {
    console.log("Morning");
} else if (hour >= 13 && hour <= 18) {
    console.log("Noon");
} else if (hour >= 19 && hour <= 24) {
    console.log("Night");
} else {
    console.log("It is not a valid hour");
}
```

### **📌 Output:**  
If `hour = 20`, it prints:  
```plaintext
Night
```

---

## **🕘 05:06 - Example 2: Grading System**  

### **📌 Problem Statement:**  
Write a JavaScript program to categorize student marks into grades.  

### **📌 Code:**
```javascript
let mark = 95; // You can change this value to test

if (mark >= 41 && mark <= 60) {
    console.log("C Grade");
} else if (mark >= 61 && mark <= 80) {
    console.log("B Grade");
} else if (mark >= 81 && mark <= 90) {
    console.log("A Grade");
} else if (mark >= 91 && mark <= 100) {
    console.log("S Grade");
} else {
    console.log("Arrears");
}
```

### **📌 Output:**  
If `mark = 95`, it prints:  
```plaintext
S Grade
```

---

## **🔹 Summary from Episode 15**  
✅ `if-else if-else` is used when **multiple conditions** need to be checked in sequence.  
✅ It ensures **efficient execution** by stopping after the first `true` condition.  
✅ **Example 1:** Categorized **time of day** (`Morning`, `Noon`, `Night`).  
✅ **Example 2:** Categorized **student grades** (`C`, `B`, `A`, `S`, or `Arrears`).  

---



# JavaScript Learning Notes - Episode 15: Control Statement - if-ElseIf-else Statement in Javascript



**Topics Covered:**

* Why if else-if else
* Flow of if elseIf else Statement
* Syntax
* Example 1 with hours
* Example 2 with semester mark

---

**🕘 00:06 - Why if else-if else**

* The `if-else if-else` statement is used when you need to check multiple conditions sequentially and execute different blocks of code based on which condition is the first one to evaluate to `true`.
* It provides a way to handle more than two possible outcomes, unlike the simple `if-else` statement.

---

**🕘 00:25 - Flow of if elseIf else Statement**

* The `if` condition is evaluated first.
* If the `if` condition is `true`, its associated block of code is executed, and the rest of the `else if` and `else` blocks are skipped.
* If the `if` condition is `false`, the program moves to the first `else if` condition and evaluates it.
* If the first `else if` condition is `true`, its associated block of code is executed, and the subsequent `else if` and the final `else` block are skipped.
* This process continues for each `else if` condition in order.
* If none of the `if` or `else if` conditions evaluate to `true`, the code block within the final `else` statement (if present) is executed.
* Once a condition is met and its corresponding code block is executed, the program exits the `if-else if-else` structure and proceeds with the code that follows it.

---

**🕘 01:00 - Syntax**

```javascript
if (condition1) {
    // Code to be executed if condition1 is true
} else if (condition2) {
    // Code to be executed if condition1 is false AND condition2 is true
} else if (condition3) {
    // Code to be executed if condition1 and condition2 are false AND condition3 is true
} else {
    // Code to be executed if none of the above conditions are true
}
// Code that always runs after the if-else if-else statement
```

* You can have multiple `else if` blocks to check various conditions.
* The final `else` block is optional. If you omit it and none of the preceding conditions are true, no code within the structure will be executed.

---

**🕘 01:42 - Example 1 with hours**

```javascript
let hour = 20;

// else if ladder
if (hour >= 1 && hour <= 6) {
    console.log("Early Morning");
} else if (hour >= 7 && hour <= 12) {
    console.log("Morning");
} else if (hour >= 13 && hour <= 18) {
    console.log("Noon");
} else if (hour >= 19 && hour <= 24) {
    console.log("Night");
} else {
    console.log("It is not a valid hour");
}
// Output: Night (because hour is 20, which falls within the 19-24 range)

hour = 10;
if (hour >= 1 && hour <= 6) {
    console.log("Early Morning");
} else if (hour >= 7 && hour <= 12) {
    console.log("Morning");
} else if (hour >= 13 && hour <= 18) {
    console.log("Noon");
} else if (hour >= 19 && hour <= 24) {
    console.log("Night");
} else {
    console.log("It is not a valid hour");
}
// Output: Morning (because hour is 10, which falls within the 7-12 range)

hour = 30;
if (hour >= 1 && hour <= 6) {
    console.log("Early Morning");
} else if (hour >= 7 && hour <= 12) {
    console.log("Morning");
} else if (hour >= 13 && hour <= 18) {
    console.log("Noon");
} else if (hour >= 19 && hour <= 24) {
    console.log("Night");
} else {
    console.log("It is not a valid hour");
}
// Output: It is not a valid hour (because hour is outside all specified ranges)
```

This example demonstrates how the `if-else if-else` ladder checks the hour against different ranges and executes the corresponding message for the first condition that evaluates to `true`. If no condition is met, the `else` block is executed.

---

**🕘 05:06 - Example 2 with semester mark**

```javascript
let mark = 95;

if (mark >= 41 && mark <= 60) {
    console.log("C Grade");
} else if (mark >= 61 && mark <= 80) {
    console.log("B Grade");
} else if (mark >= 81 && mark <= 90) {
    console.log("A Grade");
} else if (mark >= 91 && mark <= 100) {
    console.log("S Grade");
} else {
    console.log("Arrears");
}
// Output: S Grade (because mark is 95, which falls within the 91-100 range)

mark = 75;
if (mark >= 41 && mark <= 60) {
    console.log("C Grade");
} else if (mark >= 61 && mark <= 80) {
    console.log("B Grade");
} else if (mark >= 81 && mark <= 90) {
    console.log("A Grade");
} else if (mark >= 91 && mark <= 100) {
    console.log("S Grade");
} else {
    console.log("Arrears");
}
// Output: B Grade (because mark is 75, which falls within the 61-80 range)

mark = 30;
if (mark >= 41 && mark <= 60) {
    console.log("C Grade");
} else if (mark >= 61 && mark <= 80) {
    console.log("B Grade");
} else if (mark >= 81 && mark <= 90) {
    console.log("A Grade");
} else if (mark >= 91 && mark <= 100) {
    console.log("S Grade");
} else {
    console.log("Arrears");
}
// Output: Arrears (because mark is below 41)
```

This example illustrates how an `if-else if-else` ladder can be used to assign grades based on different ranges of marks. The conditions are checked in order, and the first one that is true determines the grade that is printed. If the mark doesn't fall into any of the grade ranges, the "Arrears" message is displayed by the `else` block.

---