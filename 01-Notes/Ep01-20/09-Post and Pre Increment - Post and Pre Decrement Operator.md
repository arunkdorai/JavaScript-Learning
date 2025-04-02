# **JavaScript Learning Notes - Episode 9** 

---

## **Topics Covered:**  
- **Post-Increment (`i++`)**  
- **Pre-Increment (`++i`)**  
- **Post-Decrement (`i--`)**  
- **Pre-Decrement (`--i`)**  

---

## **🕘 00:20 - Post-Increment (`i++`)**  

### **📌 Definition**  
- **Increases the value after returning the current value.**  
- The variable is used first, then incremented.  

✅ **Example:**
```javascript
let num = 20;
let num1 = num++; // Post-increment

console.log(num, num1); // (21, 20)
```

🔹 **Step-by-Step Breakdown:**
1. `num1 = num++`  
   - Assigns `num1 = 20` (current value of `num`).  
   - Increments `num` to `21`.  

✅ **Example with Multiple Increments:**
```javascript
let numm = 20;
let num2 = numm++ + numm++;

// num2 = 20 + 21
// numm = 22

console.log(numm, num2); // (22, 41)
```

🔹 **Step-by-Step Breakdown:**
1. `num2 = numm++ + numm++`  
   - First, `num2 = 20 + 21`.  
   - `numm` becomes `22`.  

---

## **🕘 05:20 - Pre-Increment (`++i`)**  

### **📌 Definition**  
- **Increases the value before returning it.**  
- The variable is incremented first, then used.  

✅ **Example:**
```javascript
let newNum = 40;
let newNum1 = ++newNum;

console.log(newNum, newNum1); // (41, 41)
```

🔹 **Step-by-Step Breakdown:**
1. `newNum1 = ++newNum`  
   - `newNum` is incremented to `41` first.  
   - `newNum1` is assigned `41`.  

✅ **Example with Multiple Pre-Increments:**
```javascript
let newNumm = 50;
let newNum2 = ++newNumm + ++newNumm;

// newNum2 = 51 + 52
// newNumm = 52

console.log(newNumm, newNum2); // (52, 103)
```

🔹 **Step-by-Step Breakdown:**
1. `newNumm` is first incremented to `51`.  
2. Then, `newNumm` is incremented again to `52`.  
3. `newNum2 = 51 + 52 = 103`.  

✅ **Mixing Post and Pre Increment:**
```javascript
let newNummm = 30;
let newNum3 = newNummm++ + ++newNummm;

// newNum3 = 30 + 32
// newNummm = 32

console.log(newNummm, newNum3); // (32, 62)
```

🔹 **Step-by-Step Breakdown:**
1. `newNummm++` returns `30`, then `newNummm` becomes `31`.  
2. `++newNummm` increments `31` to `32`.  
3. `newNum3 = 30 + 32 = 62`.  

---

## **🕘 09:15 - Post & Pre Decrement**  

### **📌 Post-Decrement (`i--`)**  
- **Decreases the value after returning the current value.**  

✅ **Example:**
```javascript
let num4 = 10;
let num5 = num4-- + --num4;

console.log(num4, num5); // (8, 18)
```

🔹 **Step-by-Step Breakdown:**
1. `num5 = num4-- + --num4`  
   - First, `num5 = 10 + 8`.  
   - `num4` first decreases to `9`, then `--num4` decreases it to `8`.  

---

### **📌 Pre-Decrement (`--i`)**  
- **Decreases the value before returning it.**  

✅ **Example:**
```javascript
let num6 = 20;
let num7 = --num6 + num6--;

console.log(num6, num7); // (18, 38)
```

🔹 **Step-by-Step Breakdown:**
1. `--num6` decreases `20` to `19` and returns `19`.  
2. `num6--` keeps `19` for the operation but then decreases it to `18`.  
3. `num7 = 19 + 19 = 38`.  

---

## **📂 Full Code Example from Episode 9**  
### ✅ **index.js**
```javascript
// ************ Post Increment (i++) ************

let num = 20;
let num1 = num++; // num1 = 20, num = 21

console.log(num, num1); // (21, 20)

let numm = 20;
let num2 = numm++ + numm++; // num2 = 20 + 21, numm = 22

console.log(numm, num2); // (22, 41)

// ************ Pre Increment (++i) ************

let newNum = 40;
let newNum1 = ++newNum; // newNum1 = 41, newNum = 41

console.log(newNum, newNum1); // (41, 41)

let newNumm = 50;
let newNum2 = ++newNumm + ++newNumm; // newNum2 = 51 + 52, newNumm = 52

console.log(newNumm, newNum2); // (52, 103)

let newNummm = 30;
let newNum3 = newNummm++ + ++newNummm; // newNum3 = 30 + 32, newNummm = 32

console.log(newNummm, newNum3); // (32, 62)

// ************ Post & Pre Decrement ************

let num4 = 10;
let num5 = num4-- + --num4; // num5 = 10 + 8, num4 = 8

console.log(num4, num5); // (8, 18)

let num6 = 20;
let num7 = --num6 + num6--; // num7 = 19 + 19, num6 = 18

console.log(num6, num7); // (18, 38)
```

---

## **🔹 Summary from Episode 9**  
✅ **Increment (`++`) and Decrement (`--`) Operators:**
- **Post-Increment (`i++`)** → Returns value, then increments.  
- **Pre-Increment (`++i`)** → Increments first, then returns value.  
- **Post-Decrement (`i--`)** → Returns value, then decrements.  
- **Pre-Decrement (`--i`)** → Decrements first, then returns value.  

✅ **Key Differences:**
| Operator | Operation | Effect |
|----------|----------|--------|
| `i++` (Post-Increment) | `let x = i++` | `x` gets original value, `i` increases after |
| `++i` (Pre-Increment) | `let x = ++i` | `i` increases first, `x` gets new value |
| `i--` (Post-Decrement) | `let x = i--` | `x` gets original value, `i` decreases after |
| `--i` (Pre-Decrement) | `let x = --i` | `i` decreases first, `x` gets new value |

---


# JavaScript Learning Notes - Episode 9: Post & Pre Increment | Post & Pre Decrement Operator

**Based on YouTube Tutorial (Approx. 61 Episodes)**

**Topics Covered:**

* Post Increment
* Pre Increment
* Post & Pre Decrement

---

**Increment and Decrement Operators Overview**

* Increment (`++`) and decrement (`--`) operators are unary operators that change the value of their operand (a variable) by 1.
* They have two forms: **pre**fix (operator before the operand) and **post**fix (operator after the operand). The difference lies in when the increment or decrement operation is performed and what value is returned.

---

**🕘 00:20 - Post Increment (`i++`)**

* **Operation:** The variable `i` is incremented by 1 **after** its current value is used in the expression.
* **Returns:** The **original value** of the variable *before* it was incremented.
* **Steps:**
    1. **Substitute:** The current value of the variable is used in the expression.
    2. **Operation:** Any other operations in the expression are performed.
    3. **Increment:** The variable is then incremented by 1.

   ```javascript
   let num = 20;
   let num1 = num++;

   // Explanation:
   // 1. Substitute: num1 = 20 (the current value of num)
   // 2. Increment: num becomes 21

   console.log(num, num1); // Output: 21 20
   ```

   ```javascript
   let numm = 20;
   let num2 = numm++ + numm++;

   // Explanation:
   // 1. First numm++:
   //    - Substitute: Use the current value of numm (20)
   //    - Increment: numm becomes 21
   // 2. Second numm++:
   //    - Substitute: Use the current value of numm (21)
   //    - Increment: numm becomes 22
   // 3. Operation: num2 = 20 + 21 = 41

   console.log(numm, num2); // Output: 22 41
   ```

---

**🕘 05:20 - Pre Increment (`++i`)**

* **Operation:** The variable `i` is incremented by 1 **before** its value is used in the expression.
* **Returns:** The **new value** of the variable *after* it has been incremented.
* **Steps:**
    1. **Increment:** The variable is incremented by 1.
    2. **Substitute with Increment:** The new (incremented) value of the variable is used in the expression.
    3. **Operation:** Any other operations in the expression are performed.

   ```javascript
   let newNum = 40;
   let newNum1 = ++newNum;

   // Explanation:
   // 1. Increment: newNum becomes 41
   // 2. Substitute: newNum1 = 41 (the new value of newNum)

   console.log(newNum, newNum1); // Output: 41 41
   ```

   ```javascript
   let newNumm = 50;
   let newNum2 = ++newNumm + ++newNumm;

   // Explanation:
   // 1. First ++newNumm:
   //    - Increment: newNumm becomes 51
   //    - Substitute: Use the new value (51)
   // 2. Second ++newNumm:
   //    - Increment: newNumm becomes 52
   //    - Substitute: Use the new value (52)
   // 3. Operation: newNum2 = 51 + 52 = 103

   console.log(newNumm, newNum2); // Output: 52 103
   ```

   ```javascript
   let newNummm = 30;
   let newNum3 = newNummm++ + ++newNummm;

   // Explanation:
   // 1. newNummm++:
   //    - Substitute: Use the current value of newNummm (30)
   //    - Increment: newNummm becomes 31
   // 2. ++newNummm:
   //    - Increment: newNummm becomes 32
   //    - Substitute: Use the new value (32)
   // 3. Operation: newNum3 = 30 + 32 = 62

   console.log(newNummm, newNum3); // Output: 32 62
   ```

---

**🕘 09:15 - Post Decrement (`i--`)**

* **Operation:** The variable `i` is decremented by 1 **after** its current value is used in the expression.
* **Returns:** The **original value** of the variable *before* it was decremented.
* **Steps:** Similar to post-increment, but the operation is subtraction.

   ```javascript
   let num4 = 10;
   let num5 = num4-- + --num4;

   // Explanation:
   // 1. num4--:
   //    - Substitute: Use the current value of num4 (10)
   //    - Decrement: num4 becomes 9
   // 2. --num4:
   //    - Decrement: num4 becomes 8
   //    - Substitute: Use the new value (8)
   // 3. Operation: num5 = 10 + 8 = 18

   console.log(num4, num5); // Output: 8 18
   ```

**Pre Decrement (`--i`)**

* **Operation:** The variable `i` is decremented by 1 **before** its value is used in the expression.
* **Returns:** The **new value** of the variable *after* it has been decremented.
* **Steps:** Similar to pre-increment, but the operation is subtraction.

   ```javascript
   let num6 = 20;
   let num7 = --num6 + num6--;

   // Explanation:
   // 1. --num6:
   //    - Decrement: num6 becomes 19
   //    - Substitute: Use the new value (19)
   // 2. num6--:
   //    - Substitute: Use the current value of num6 (19)
   //    - Decrement: num6 becomes 18
   // 3. Operation: num7 = 19 + 19 = 38

   console.log(num6, num7); // Output: 18 38
   ```

**Key Takeaway:**

The crucial difference between pre and post increment/decrement is whether the operation (increment/decrement) happens *before* or *after* the variable's value is used in the surrounding expression. This can significantly affect the result of expressions involving these operators.

---