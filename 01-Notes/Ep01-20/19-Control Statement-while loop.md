# **JavaScript Learning Notes - Episode 19**   

---

## **Topics Covered:**  
- **Flow of `while` Loop**  
- **Syntax of `while` Loop**  
- **Example 1: Print Numbers in Reverse (1 to 10)**  
- **Example 2: Calculate Sum of Digits of a Number**  

---

## **🕘 00:00 - Flow of `while` Loop**  

✅ **What is a `while` Loop?**  
- A `while` loop **runs repeatedly as long as a condition is true**.  
- It’s **useful when you don’t know the exact number of iterations** beforehand.  
- If the condition **never becomes false**, it leads to an **infinite loop**.  

🚨 **Avoid Infinite Loops!**  
- Always ensure there is a way for the loop condition to become false.  

---

## **🕘 01:10 - Syntax of `while` Loop**  

```javascript
initialization;
while(condition){
    // Code to execute
    counter;  // To prevent infinite loop
}
```

✅ **Components of a `while` Loop:**  
1️⃣ **Initialization** → Define a starting point before the loop.  
2️⃣ **Condition** → The loop runs while this is `true`.  
3️⃣ **Counter** → Ensure the condition eventually becomes `false` to avoid infinite loops.  

---

## **🕘 02:00 - Example 1: Print Numbers from 10 to 1 (Reverse Order)**  

```javascript
let val = 10;

while(val >= 1){
    console.log(val);
    val--;  // Decrease val to prevent infinite loop
}
```

### **📌 Output:**  
```plaintext
10
9
8
7
6
5
4
3
2
1
```

---

## **🕘 04:50 - Example 2: Find Sum of Digits of a Number**  

### **📌 Problem:**  
🔹 Given `num = 1234`, find the sum of its digits:  
```
1 + 2 + 3 + 4 = 10
```

### **✅ Code Implementation:**  

```javascript
let num = 1234;
let sum = 0; 

while(num > 0){
    let last = num % 10;  // Extract last digit
    num = parseInt(num / 10); // Remove last digit
    sum = sum + last; // Add last digit to sum
}

console.log(sum);
```

### **📌 Output:**  
```plaintext
10
```

---

## **🔹 Summary from Episode 19**  
✅ **The `while` loop** is useful when the number of iterations is **not known beforehand**.  
✅ **Always include a counter** to avoid an **infinite loop**.  
✅ **`while` loops are ideal for problems like digit sum, searching, and real-time user input handling.**  

---



# JavaScript Learning Notes - Episode 19: Control Statement - while Loop in Javascript



**Topics Covered:**

* Flow of while loop
* Syntax - while loop
* Example 1 - Print 1 to 10 in reverse
* Example 2 - Print Sum of Digits
* JavaScript Infinite Loop

---

**Introduction to the `while` Loop**

* The `while` loop in JavaScript is used to repeatedly execute a block of code as long as a specified condition evaluates to `true`.
* Unlike the `for` loop, the `while` loop's structure focuses primarily on the condition that determines whether the loop continues.

---

**🕘 00:00 - Flow of while loop**

1. **Initialization:** Before the `while` loop begins, you typically initialize any variables that will be used in the loop's condition or within the loop's body.
2. **Condition Evaluation:** The `condition` inside the parentheses `()` of the `while` statement is evaluated.
3. **Execution (if true):** If the `condition` evaluates to `true`, the block of code within the curly braces `{}` following the `while` statement is executed.
4. **Update:** Inside the loop body, you should include code that will eventually make the `condition` `false`. This usually involves updating the variables that are part of the condition (e.g., incrementing or decrementing a counter).
5. **Repeat:** After the loop body is executed, the program goes back to step 2 and re-evaluates the `condition`. This process continues as long as the `condition` remains `true`.
6. **Termination (if false):** If the `condition` evaluates to `false`, the loop terminates, and the program control moves to the next statement after the `while` loop.

---

**🕘 01:10 - Syntax - while loop**

```javascript
initialization;
while (condition) {
  // Statement(s) to be executed repeatedly
  // Update statement (to eventually make the condition false)
}
```

* **`initialization;`:** Sets up any necessary variables before the loop starts.
* **`while (condition)`:** The loop continues as long as this condition is `true`.
* **`{ ... }`:** The block of code that is executed in each iteration of the loop.
* **`Update statement;`:** Modifies the variables involved in the `condition` to eventually lead to the condition becoming `false`, thus terminating the loop.

---

**🕘 02:00 - Example 1 - Print 1 to 10 in reverse**

```javascript
let val = 10;

while (val >= 1) {
  console.log(val);
  val--; // Decrement val in each iteration
}
/*
Output:
10
9
8
7
6
5
4
3
2
1
*/
```

* **`let val = 10;` (initialization):** A variable `val` is initialized to 10.
* **`while (val >= 1)` (condition):** The loop continues as long as `val` is greater than or equal to 1.
* **`console.log(val);` (statement):** The current value of `val` is printed in each iteration.
* **`val--;` (update):** The value of `val` is decremented by 1 after each iteration. This ensures that the condition `val >= 1` will eventually become `false`, stopping the loop.

---

**🕘 04:50 - Example 2 - Print Sum of Digits**

```javascript
let num = 1234;
let sum = 0;

while (num > 0) {
  let last = num % 10;     // Get the last digit (remainder when divided by 10)
  num = parseInt(num / 10); // Remove the last digit (integer division by 10)
  sum = sum + last;       // Add the last digit to the sum
}
console.log(sum); // Output: 10 (1 + 2 + 3 + 4)
```

* **`let num = 1234; let sum = 0;` (initialization):** The number whose digits we want to sum is stored in `num`, and `sum` is initialized to 0.
* **`while (num > 0)` (condition):** The loop continues as long as `num` is greater than 0 (meaning there are still digits to process).
* **Inside the loop:**
    * `let last = num % 10;`: Extracts the last digit of `num`.
    * `num = parseInt(num / 10);`: Removes the last digit from `num` by integer division.
    * `sum = sum + last;`: Adds the extracted last digit to the `sum`.
* The loop continues until `num` becomes 0.

---

**JavaScript Infinite Loop**

* A **JavaScript infinite loop** occurs when the condition of a `while` loop (or any loop) never becomes `false`. This causes the loop to execute indefinitely, potentially freezing or crashing the program or browser.
* It's crucial to ensure that there is a mechanism within the loop body to eventually make the loop's condition `false`.

```javascript
// Example of an infinite loop (avoid this!)
// let counter = 0;
// while (counter < 5) {
//   console.log("This will run forever!");
//   // Note: counter is never incremented, so the condition will always be true
// }
```

**How to Avoid Infinite Loops:**

* **Ensure your loop condition will eventually become false.**
* **Make sure the variables involved in the condition are updated correctly within the loop body.**
* **Double-check your logic to prevent unintended scenarios where the exit condition is never met.**

**Choosing Between `for` and `while` Loops:**

* Use a `for` loop when you know the number of iterations beforehand or when you have a clear initialization, condition, and update pattern for a counter.
* Use a `while` loop when the number of iterations is not known in advance and depends on a condition that might change based on operations within the loop.

---