# **JavaScript Learning Notes - Episode 8**  

---

## **Topics Covered:**  
- **What are Operators?**  
- **Types of Operators Overview**  
- **Arithmetic Operators** (`+`, `-`, `*`, `/`, `%`, `**`, `++`, `--`)  

---

## **🕘 00:10 - What are Operators?**  
### **📌 Definition**  
- **Operators** are **symbols** that perform operations on values (operands).  
- They help manipulate data, assign values, compare values, and evaluate conditions.  

### **📌 Types of Operators in JavaScript**  
1. **Arithmetic Operators** (Mathematical calculations)  
2. **Relational (Comparison) Operators** (Compare values)  
3. **Logical Operators** (Boolean logic)  
4. **Assignment Operators** (Assign values)  
5. **Bitwise Operators** (Bit manipulation)  
6. **Ternary Operator** (Conditional shorthand)  

---

## **🕘 01:10 - Arithmetic Operators**  

| **Operator**  | **Symbol** | **Usage**             | **Example**    | **Output** |
|--------------|----------|---------------------|--------------|---------|
| **Addition** | `+`      | Adds two values     | `10 + 5`     | `15`    |
| **Subtraction** | `-`    | Subtracts values   | `10 - 5`     | `5`     |
| **Multiplication** | `*` | Multiplies values  | `10 * 5`     | `50`    |
| **Division** | `/`      | Divides values     | `10 / 2`     | `5`     |
| **Modulus** | `%`      | Remainder of division | `10 % 3`  | `1`     |
| **Exponentiation** | `**` | Raises to power  | `3 ** 3`     | `27`    |

✅ **Example:**
```javascript
console.log(10 + 20); // Addition ==> 30
console.log(20 - 5);  // Subtraction ==> 15
console.log(20 * 2);  // Multiplication ==> 40
console.log(20 / 2);  // Division ==> 10
console.log(20 % 3);  // Modulus ==> 2
console.log(3 ** 3);  // Exponentiation ==> 27
```

🔹 **`%` (Modulus) returns the remainder of division.**  
🔹 **`**` (Exponentiation) raises a number to the power of another.**

---

## **🕘 Increment (`++`) and Decrement (`--`) Operators**  

| **Operator**  | **Type**       | **Example**     | **Output** |
|--------------|--------------|--------------|---------|
| **Increment** | `++` (Add 1) | `num++` or `++num` | `+1` |
| **Decrement** | `--` (Subtract 1) | `num--` or `--num` | `-1` |

✅ **Example:**
```javascript
let num = 10;
num = num + 1;
console.log(num); // Output: 11
```

✅ **Post-Increment (`x++`) vs Pre-Increment (`++x`)**
```javascript
let num1 = 15;
num1++;  // Post Increment: num1 = num1 + 1 (15 → 16)
++num1;  // Pre Increment: num1 = num1 + 1 (16 → 17)

console.log(num1); // Output: 17
```

✅ **Post-Decrement (`x--`) vs Pre-Decrement (`--x`)**
```javascript
let num2 = 20;
num2--;  // Post Decrement: num2 = num2 - 1 (20 → 19)
--num2;  // Pre Decrement: num2 = num2 - 1 (19 → 18)

console.log(num2); // Output: 18
```

🔹 **Key Differences:**
- **Post-increment (`x++`)**: Returns the value *before* incrementing.  
- **Pre-increment (`++x`)**: Increments the value *before* returning it.  
- **Same logic applies for decrement (`--x` and `x--`).**  

---

## **📂 Full Code Example from Episode 8**  
### ✅ **index.js**
```javascript
// ************ Arithmetic Operators ************

// Addition
console.log(10 + 20); // Output: 30

// Subtraction
console.log(20 - 5); // Output: 15

// Multiplication
console.log(20 * 2); // Output: 40

// Division
console.log(20 / 2); // Output: 10

// Modulus (Remainder)
console.log(20 % 3); // Output: 2

// Exponentiation (Power)
console.log(3 ** 3); // Output: 27

// ************ Increment - Decrement Operators ************

let num = 10;
num = num + 1;
console.log(num); // Output: 11

// Increment (++)
let num1 = 15;
num1++;  // Post Increment (num1 = num1 + 1) → 16
++num1;  // Pre Increment (num1 = num1 + 1) → 17

console.log(num1); // Output: 17

// Decrement (--)
let num2 = 20;
num2--;  // Post Decrement (num2 = num2 - 1) → 19
--num2;  // Pre Decrement (num2 = num2 - 1) → 18

console.log(num2); // Output: 18
```

---

## **🔹 Summary from Episode 8**  
✅ **Operators perform operations on values.**  
✅ **Types of Operators:**
- Arithmetic (`+`, `-`, `*`, `/`, `%`, `**`)
- Relational (`==`, `!=`, `<`, `>`, `<=`, `>=`)
- Logical (`&&`, `||`, `!`)
- Assignment (`=`, `+=`, `-=`, `*=`, `/=`)
✅ **Increment (`++`) and Decrement (`--`) Operators:**
- `x++` (Post-increment), `++x` (Pre-increment)
- `x--` (Post-decrement), `--x` (Pre-decrement)  

---


# JavaScript Learning Notes - Episode 8: Java Script Operators | Arithmetic Operators

**Based on YouTube Tutorial (Approx. 61 Episodes)**

**Topics Covered:**

* What is Operators
* Types of Operators overview
* Arithmetic Operator

---

**🕘 00:10 - What is Operators**

* Operators are special symbols or keywords in JavaScript that perform operations on values called operands.
* They allow you to manipulate data, perform calculations, make comparisons, and work with boolean logic.

---

**🕘 00:30 - Types of Operators overview**

JavaScript includes various categories of operators, each with its specific purpose:

* **Arithmetic Operators:** Used for performing mathematical calculations.
* **Assignment Operators:** Used to assign values to variables.
* **Comparison (Relational) Operators:** Used to compare two values and determine their relationship.
* **Logical Operators:** Used to combine or modify boolean values.
* **Bitwise Operators:** Perform operations on the binary representation of numbers.
* **String Operators:** Used to manipulate strings (e.g., concatenation).
* **Other Operators:** Including the conditional (ternary) operator, typeof operator, etc.

This episode focuses specifically on **Arithmetic Operators**.

---

**🕘 01:10 - Arithmetic Operator**

Arithmetic operators are used to perform basic mathematical operations on numeric operands.

* **Addition (`+`)**: Adds two operands.
   ```javascript
   console.log(10 + 20); // Output: 30
   ```

* **Subtraction (`-`)**: Subtracts the second operand from the first.
   ```javascript
   console.log(20 - 5); // Output: 15
   ```

* **Multiplication (`*`)**: Multiplies two operands.
   ```javascript
   console.log(20 * 2); // Output: 40
   ```

* **Division (`/`)**: Divides the first operand by the second operand. The result is always a floating-point number.
   ```javascript
   console.log(20 / 2); // Output: 10
   ```

* **Modulus (`%`)**: Returns the remainder of the division of the first operand by the second operand.
   ```javascript
   console.log(20 % 3); // Output: 2 (20 divided by 3 is 6 with a remainder of 2)
   ```

* **Exponentiation (`**`)**: Raises the first operand to the power of the second operand (introduced in ES2016).
   ```javascript
   console.log(3 ** 3); // Output: 27 (3 * 3 * 3)
   ```

* **Increment (`++`)**: Increases the value of a variable by 1. It can be used in two ways:
    * **Post-increment (`variable++`)**: The current value of the variable is used in the expression, and then the variable is incremented.
    * **Pre-increment (`++variable`)**: The variable is incremented first, and then the new value is used in the expression.

   ```javascript
   let num = 10;
   num = num + 1;
   console.log(num); // Output: 11

   let num1 = 15;
   console.log(num1++); // Output: 15 (post-increment - value is used first)
   console.log(num1);   // Output: 16 (value is now incremented)

   let num2 = 15;
   console.log(++num2); // Output: 16 (pre-increment - value is incremented first)
   console.log(num2);   // Output: 16

   let num3 = 15;
   num3++; // Post Increment ==> num3 = num3 + 1 = 15 + 1 = 16
   ++num3; // Pre Increment ==> num3 = num3 + 1 = 16 + 1 = 17
   console.log(num3);   // Output: 17
   ```

* **Decrement (`--`)**: Decreases the value of a variable by 1. It also has pre-decrement and post-decrement forms:
    * **Post-decrement (`variable--`)**: The current value of the variable is used in the expression, and then the variable is decremented.
    * **Pre-decrement (`--variable`)**: The variable is decremented first, and then the new value is used in the expression.

   ```javascript
   let num2_var = 20;
   console.log(num2_var--); // Output: 20 (post-decrement - value is used first)
   console.log(num2_var);   // Output: 19 (value is now decremented)

   let num3_var = 20;
   console.log(--num3_var); // Output: 19 (pre-decrement - value is decremented first)
   console.log(num3_var);   // Output: 19

   let num4 = 20;
   num4--; // Post Decrement ==> num4 = num4 - 1 = 20 - 1 = 19
   --num4; // Pre Decrement ==> num4 = num4 - 1 = 19 - 1 = 18
   console.log(num4);   // Output: 18
   ```

---