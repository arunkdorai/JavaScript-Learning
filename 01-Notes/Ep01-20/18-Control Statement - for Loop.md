# **JavaScript Learning Notes - Episode 18**  



---

## **Topics Covered:**  
- **Introduction to Looping Statements**  
- **Types of Loops in JavaScript**  
- **For Loop Explanation**  
- **For Loop Syntax**  
- **Examples: Print 1 to 10, Even Numbers, Odd Numbers**  

---

## **🕘 00:00 - Looping Statement Intro**  

✅ **What is a Looping Statement?**  
- A loop **repeats a block of code multiple times**.  
- Useful when performing **repetitive tasks**, like printing numbers or processing lists.  
- Saves time and avoids writing the same code multiple times.  

---

## **🕘 00:22 - Types of Loops in JavaScript**  

There are **three main types of loops** in JavaScript:  

1️⃣ **For Loop** → Runs a block of code a set number of times.  
2️⃣ **While Loop** → Runs **as long as** a condition is true.  
3️⃣ **Do-While Loop** → Runs **at least once**, then repeats while the condition is true.  

---

## **🕘 00:55 - For Loop**  

✅ **What is a `for` Loop?**  
- **Best used when you know how many times** you want to repeat the code.  
- **Has three parts**: Initialization, Condition, and Counter.  
- Runs **until the condition becomes false**.  

---

## **🕘 02:15 - Syntax of `for` Loop**  

```javascript
for(initialization; condition; counter){
    // Code to run
}
```

✅ **Explanation of Components:**  
1️⃣ **Initialization** → `let i = 1` (starting value).  
2️⃣ **Condition** → `i <= 10` (loop runs while this is true).  
3️⃣ **Counter** → `i++` (updates `i` each time the loop runs).  

---

## **🕘 03:15 - Example 1: Print Numbers from 1 to 10**  

```javascript
for(let i = 1; i <= 10; i++){
    console.log(i);
}
```

### **📌 Output:**  
```plaintext
1
2
3
4
5
6
7
8
9
10
```

---

## **🕘 07:45 - Example 2: Print Even Numbers (1 to 10)**  

```javascript
for(let i = 1; i <= 10; i++){
    if(i % 2 === 0) console.log(i);
}
```

### **📌 Output:**  
```plaintext
2
4
6
8
10
```

---

## **🕘 Example 3: Print Odd Numbers (1 to 10)**  

```javascript
for(let i = 1; i <= 10; i++){
    if(i % 2 !== 0) console.log(i);
}
```

### **📌 Output:**  
```plaintext
1
3
5
7
9
```

---

## **🔹 Summary from Episode 18**  
✅ **Loops** help execute the same code multiple times.  
✅ **`for` loop** is best when you **know how many times** to loop.  
✅ **Uses** → Counting numbers, filtering even/odd numbers, and working with arrays.  

---



# JavaScript Learning Notes - Episode 18: Control Statement - for Loop in Javascript



**Topics Covered:**

* Looping Statement Intro
* Types of Loops
* For Loop
* Syntax - For Loop
* Example - Print 1 to 10
* Example - Print Even Number
* Example - Print Odd Number

---

**🕘 00:00 - Looping Statement Intro**

* A **looping statement** (or loop) in JavaScript is a control flow structure that allows you to repeatedly execute a block of code as long as a certain condition is true.
* Loops are essential for automating repetitive tasks and iterating over data structures.

---

**🕘 00:22 - Types of Loops**

JavaScript provides several types of loop statements:

* **`for` loop:** Executes a block of code a specific number of times.
* **`while` loop:** Executes a block of code as long as a specified condition is true.
* **`do...while` loop:** Executes a block of code once, and then repeats as long as a specified condition is true.
* **`for...in` loop:** Iterates over the properties of an object.
* **`for...of` loop:** Iterates over iterable objects (e.g., arrays, strings, maps, sets).

This episode focuses on the **`for` loop**.

---

**🕘 00:55 - For Loop**

* The `for` loop is a powerful and commonly used loop in JavaScript when you know in advance how many times you want to execute a block of code.
* It consists of three parts, enclosed in parentheses and separated by semicolons, followed by the code block to be executed.

---

**🕘 02:15 - Syntax - For Loop**

```javascript
for (initialization; condition; counter) {
  // Statement(s) to be executed repeatedly
}
```

* **`initialization`:** An expression that is executed only once before the loop starts. It typically initializes a loop counter variable.
* **`condition`:** An expression that is evaluated before each iteration of the loop. If the condition is `true`, the loop body (the statements within the curly braces) is executed. If the condition is `false`, the loop terminates, and the program control moves to the next statement after the loop.
* **`counter` (increment/decrement):** An expression that is executed at the end of each iteration of the loop, usually to update the loop counter. This typically involves incrementing or decrementing the counter variable.

---

**🕘 03:15 - Example - Print 1 to 10**

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
/*
Output:
1
2
3
4
5
6
7
8
9
10
*/
```

* **`let i = 1;` (initialization):** A variable `i` is declared and initialized to 1. This is the starting value of our loop counter.
* **`i <= 10;` (condition):** The loop will continue to execute as long as the value of `i` is less than or equal to 10.
* **`i++;` (counter):** After each iteration of the loop, the value of `i` is incremented by 1.
* **`console.log(i);` (statement):** This line inside the loop body is executed in each iteration, printing the current value of `i` to the console.

The loop starts with `i = 1`. The condition `1 <= 10` is true, so `1` is printed. Then `i` becomes 2. The condition `2 <= 10` is true, so `2` is printed, and so on, until `i` becomes 11. At this point, the condition `11 <= 10` is false, so the loop terminates.

---

**🕘 07:45 - Example - Print Even Number**

```javascript
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
/*
Output:
2
4
6
8
10
*/
```

* This example uses a `for` loop to iterate from 1 to 10.
* Inside the loop, an `if` statement checks if the current value of `i` is even using the modulus operator (`%`). If `i % 2` is equal to 0, it means `i` is divisible by 2 (and therefore even), and its value is printed to the console.

---

**Example - Print Odd Number**

```javascript
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
/*
Output:
1
3
5
7
9
*/
```

* This example is similar to the even number example, but the `if` condition `i % 2 !== 0` checks if the remainder when `i` is divided by 2 is not equal to 0. This indicates that `i` is an odd number, and its value is printed.

**Key Characteristics of `for` Loops:**

* Typically used when the number of iterations is known or can be determined beforehand.
* The three parts of the loop control (initialization, condition, counter) are defined at the beginning of the loop.
* You can control the starting point, ending point, and the step (increment/decrement) of the loop counter.

---