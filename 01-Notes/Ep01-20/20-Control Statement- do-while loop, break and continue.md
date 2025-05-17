# **JavaScript Learning Notes - Episode 20** 

---

## **Topics Covered:**  
- **Flow of `do-while` Loop**  
- **Example 1: Print Numbers from 10 to 20**  
- **`break` Statement**  
- **`continue` Statement**  

---

## **🕘 00:05 - Flow of `do-while` Loop**  

✅ **What is a `do-while` Loop?**  
- A `do-while` loop is similar to a `while` loop but **runs the code at least once**.  
- The **condition is checked after** the code executes.  
- It’s useful when you need to ensure the code runs at least once, even if the condition is `false`.  

---

## **🕘 00:47 - Example 1: Print Numbers from 10 to 20**  

### **✅ Code Implementation:**  

```javascript
let num = 10;

do {
    console.log(num);
    num++;  // Increment num
} while (num <= 20);
```

### **📌 Output:**  
```plaintext
10
11
12
13
14
15
16
17
18
19
20
```

### **🔹 Key Points:**  
- The `do` block executes first.  
- The `while` condition is checked **after** the first execution.  
- If `num` starts at 25, the loop **still runs once** before stopping.

---

## **🕘 03:50 - `break` Statement**  

✅ **What is `break` in JavaScript?**  
- The `break` statement **stops a loop immediately**.  
- Useful when you **want to exit a loop early** based on a condition.  
- Commonly used in **loops and switch cases**.  

### **✅ Code Implementation:**  

```javascript
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) { // Even numbers
        if (i === 10) {
            break;  // Stops the loop when i = 10
        }
        console.log(i);
    }
}
```

### **📌 Output:**  
```plaintext
2
4
6
8
```

### **🔹 Key Points:**  
- The loop **stops completely** when `i === 10`.  
- No numbers **after 8** are printed because **break exits the loop**.  

---

## **🕘 05:50 - `continue` Statement**  

✅ **What is `continue` in JavaScript?**  
- The `continue` statement **skips the current iteration** and moves to the next one.  
- Unlike `break`, it **does not stop** the loop entirely.  

### **✅ Code Implementation:**  

```javascript
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) { // Even numbers
        if (i === 10) {
            continue;  // Skips 10 but continues loop
        }
        console.log(i);
    }
}
```

### **📌 Output:**  
```plaintext
2
4
6
8
12
14
16
18
20
```

### **🔹 Key Points:**  
- The number `10` **is skipped**, but the loop **continues after** it.  
- Useful when **you want to skip specific values but continue looping**.  

---

## **🔹 Summary from Episode 20**  
✅ **`do-while` loop** ensures the code runs at **least once**.  
✅ **`break` statement** **stops** the loop **immediately**.  
✅ **`continue` statement** **skips** the current iteration but **continues looping**.  

---



# JavaScript Learning Notes - Episode 20: Control Statement - do-while Loop, break & continue



**Topics Covered:**

* Flow of do-while loop
* Example 1 - Print 10 to 20
* break statement
* continue statement

---

**Introduction to the `do-while` Loop**

* The `do-while` loop in JavaScript is similar to the `while` loop, but with one crucial difference: the condition is checked **after** the loop body is executed.
* This guarantees that the code inside the `do` block will always run at least once.

---

**🕘 00:05 - Flow of do-while loop**

1. **Execution:** The code block within the `do` curly braces `{}` is executed first.
2. **Condition Evaluation:** After the `do` block is executed, the `condition` inside the parentheses `()` of the `while` statement is evaluated.
3. **Repeat (if true):** If the `condition` evaluates to `true`, the program goes back to step 1, and the `do` block is executed again.
4. **Termination (if false):** If the `condition` evaluates to `false`, the loop terminates, and the program control moves to the next statement after the `do-while` loop.

---

**🕘 00:47 - Example 1 - Print 10 to 20**

```javascript
let num = 10;

do {
  console.log(num);
  num++;
} while (num <= 20);
/*
Output:
10
11
12
13
14
15
16
17
18
19
20
*/
```

* **`let num = 10;` (initialization):** A variable `num` is initialized to 10.
* **`do { ... }`:** The code block inside the `do` block is executed.
    * `console.log(num);`: The current value of `num` is printed.
    * `num++;`: The value of `num` is incremented by 1.
* **`while (num <= 20);` (condition):** After the first execution of the `do` block, the condition `num <= 20` is checked. As long as this condition is true, the loop continues to execute the `do` block. The loop stops when `num` becomes 21.

**Use Cases for `do-while` Loop:**

* Situations where you need to perform an action at least once before checking a condition to decide whether to repeat.
* For example, prompting a user for input and then validating it in the loop condition.

---

**🕘 03:50 - break statement**

* The `break` statement is used to immediately terminate the execution of a loop (`for`, `while`, `do-while`) or a `switch` statement.
* When a `break` statement is encountered inside a loop, the loop is exited prematurely, and the program control resumes at the statement immediately following the loop.

```javascript
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    if (i === 10) {
      break; // Terminate the loop when i is 10 (and even)
    }
    console.log(i);
  }
}
/*
Output:
2
4
6
8
*/
```

* This `for` loop iterates from 1 to 20.
* The `if (i % 2 === 0)` condition checks for even numbers.
* When `i` is even, the inner `if (i === 10)` condition is checked.
* If `i` is 10, the `break` statement is executed, and the loop terminates immediately. Therefore, 10 and any subsequent numbers are not processed or printed.

---

**🕘 05:50 - continue statement**

* The `continue` statement is used to skip the rest of the code within the current iteration of a loop (`for`, `while`, `do-while`) and proceed directly to the next iteration.
* The loop itself does not terminate; it simply moves on to the next cycle.

```javascript
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    if (i === 10) {
      continue; // Skip the rest of the current iteration when i is 10 (and even)
    }
    console.log(i);
  }
}
/*
Output:
2
4
6
8
12
14
16
18
20
*/
```

* This `for` loop also iterates from 1 to 20 and checks for even numbers.
* When `i` is even, the inner `if (i === 10)` condition is checked.
* If `i` is 10, the `continue` statement is executed. This causes the `console.log(i);` line for the current iteration (when `i` is 10) to be skipped, and the loop proceeds to the next iteration (where `i` becomes 11).
* All other even numbers (2, 4, 6, 8, 12, 14, 16, 18, 20) are printed.

**Summary of Loop Control Statements:**

* **`break`:** Immediately exits the entire loop.
* **`continue`:** Skips the current iteration and proceeds to the next iteration of the loop.

Understanding and using `break` and `continue` effectively allows for more flexible control over the execution flow within loops.

---