# **JavaScript Learning Notes - Episode 11**  

---

## **Topics Covered:**  
- **Logical Operators (`&&, ||, !`)**  
- **Short-Circuit Evaluation**  

---

## **🕘 00:05 - What is a Logical Operator?**  

### **📌 Definition**  
Logical operators **combine or modify boolean values** (`true/false`). They are used in **decision-making** and **control flow** in JavaScript.  

✅ **Types of Logical Operators:**  
1. **Logical AND (`&&`)** → Returns `true` **only if both** conditions are `true`.  
2. **Logical OR (`||`)** → Returns `true` if **at least one** condition is `true`.  
3. **Logical NOT (`!`)** → Reverses a boolean value (`true` → `false`, `false` → `true`).  

---

## **🕘 00:30 - Logical AND (`&&`)**  

### **📌 Explanation**  
✅ **Returns `true` only if both conditions are `true`**  
✅ **Otherwise, returns `false`**  

| Condition 1 | Condition 2 | Result (`&&`) |
|------------|------------|--------------|
| `true`     | `true`     | `true`       |
| `true`     | `false`    | `false`      |
| `false`    | `true`     | `false`      |
| `false`    | `false`    | `false`      |

✅ **Example Code:**
```javascript
let age = 18;

console.log(age >= 18 && age <= 30); // true && true → true

age = 35;
console.log(age >= 18 && age <= 30); // true && false → false

age = 16;
console.log(age >= 18 && age <= 30); // false && true → false (Short Circuit)

let idProof = "Aadhaar";
console.log(idProof == "Pancard" && idProof == "Driving License"); // false && false → false
```

---

## **🕘 04:30 - Short-Circuit Evaluation**  
**📌 What is it?**  
Short-circuit evaluation **stops evaluating expressions** as soon as the result is determined.  

✅ **For `&&`:**  
- If **first condition is `false`**, second condition **won’t be checked** (because `false && anything = false`).  

✅ **For `||`:**  
- If **first condition is `true`**, second condition **won’t be checked** (because `true || anything = true`).  

Example:
```javascript
let x = 10;
console.log(x > 5 && x < 20 && x > 50); // false (stops after x < 20)
console.log(x > 5 || x < 20 || x > 50); // true (stops after x > 5)
```

---

## **🕘 04:55 - Logical OR (`||`)**  

### **📌 Explanation**  
✅ **Returns `true` if at least one condition is `true`**  
✅ **Returns `false` only if both conditions are `false`**  

| Condition 1 | Condition 2 | Result (`||`) |
|------------|------------|--------------|
| `true`     | `true`     | `true`       |
| `true`     | `false`    | `true`       |
| `false`    | `true`     | `true`       |
| `false`    | `false`    | `false`      |

✅ **Example Code:**
```javascript
let pwd_input = "12345";

console.log(pwd_input == "12345" || pwd_input == "54321"); // true || false → true

pwd_input = "54321";
console.log(pwd_input == "12345" || pwd_input == "54321"); // false || true → true

let userName = "abc";

console.log(pwd_input == "54321" || userName == "abc"); // true || true → true

console.log(pwd_input == "12345" || userName == "xyz"); // false || false → false
```

---

## **🕘 09:13 - Logical NOT (`!`)**  

### **📌 Explanation**  
✅ **Reverses a boolean value (`true` → `false`, `false` → `true`)**  

| Condition | Result (`!`) |
|----------|------------|
| `true`   | `false`     |
| `false`  | `true`     |

✅ **Example Code:**
```javascript
console.log(!(10 > 4)); // !(true) → false
console.log(!false); // true
```

---

## **📂 Full Code Example from Episode 11**  
### ✅ **index.js**
```javascript
// ************ Logical AND (&&) ************

let age = 18;
console.log(age >= 18 && age <= 30); // true

age = 35;
console.log(age >= 18 && age <= 30); // false

age = 16;
console.log(age >= 18 && age <= 30); // false (Short Circuit)

let idProof = "Aadhaar";
console.log(idProof == "Pancard" && idProof == "Driving License"); // false

// ************ Logical OR (||) ************

let pwd_input = "12345";
console.log(pwd_input == "12345" || pwd_input == "54321"); // true

pwd_input = "54321";
console.log(pwd_input == "12345" || pwd_input == "54321"); // true

let userName = "abc";
console.log(pwd_input == "54321" || userName == "abc"); // true
console.log(pwd_input == "12345" || userName == "xyz"); // false

// ************ Logical NOT (!) ************

console.log(!(10 > 4)); // false
console.log(!false); // true
```

---

## **🔹 Summary from Episode 11**  
✅ **Logical AND (`&&`):**  
- Returns `true` **only if both conditions** are `true`.  
- Stops checking if the first condition is `false` (Short Circuiting).  

✅ **Logical OR (`||`):**  
- Returns `true` **if at least one condition** is `true`.  
- Stops checking if the first condition is `true` (Short Circuiting).  

✅ **Logical NOT (`!`):**  
- **Reverses** a boolean value.  

---



# JavaScript Learning Notes - Episode 11: Javascript Logical Operators

**Topics Covered:**

* What is Logical Operator
* Logical AND (&&)
* Short Circuit Evaluation
* Logical OR ( || )
* Logical NOT ( ! )

---

**🕘 00:05 - What is Logical Operator**

* Logical operators are used in JavaScript to combine or manipulate boolean values (true or false).
* They are essential for creating conditions that involve multiple factors and for controlling the flow of execution in your code.

---

**🕘 00:30 - Logical AND (`&&`)**

* The logical AND operator (`&&`) returns `true` if and only if **both** of its operands are `true`. If either operand is `false`, or both are `false`, the result is `false`.

   | `cond1` | `cond2` | `Result (cond1 && cond2)` |
   |---------|---------|---------------------------|
   | `true`  | `true`  | `true`                    |
   | `true`  | `false` | `false`                   |
   | `false` | `true`  | `false`                   |
   | `false` | `false` | `false`                   |

   ```javascript
   let age = 18;
   console.log(age >= 18 && age <= 30); // true && true -> true

   age = 35;
   console.log(age >= 18 && age <= 30); // true && false -> false

   age = 16;
   console.log(age >= 18 && age <= 30); // false && true -> false (due to short-circuiting)

   let idProof = "Aadhaar";
   console.log(idProof == "Pancard" && idProof == "Driving License"); // false && false -> false
   ```

---

**🕘 04:30 - Short Circuit Evaluation**

* The `&&` operator exhibits **short-circuit evaluation**. This means that if the left operand evaluates to `false`, the right operand is **not** evaluated at all.
* Since the result of the `&&` operation will be `false` regardless of the right operand's value when the left operand is `false`, there's no need to evaluate the right side.
* This can be useful for performance optimization and for preventing errors if the right operand's evaluation depends on the left operand being true.

   ```javascript
   let age = 16;
   let hasLicense = false;

   // If age is less than 18, the second condition (hasLicense) is not even checked.
   if (age >= 18 && hasLicense) {
       console.log("Can drive");
   } else {
       console.log("Cannot drive"); // Output: Cannot drive
   }
   ```

---

**🕘 04:55 - Logical OR (`||`)**

* The logical OR operator (`||`) returns `true` if **at least one** of its operands is `true`. It returns `false` only if **both** operands are `false`.

   | `cond1` | `cond2` | `Result (cond1 || cond2)` |
   |---------|---------|---------------------------|
   | `true`  | `true`  | `true`                    |
   | `true`  | `false` | `true`                    |
   | `false` | `true`  | `true`                    |
   | `false` | `false` | `false`                   |

   ```javascript
   let pwd_input = "12345";
   console.log(pwd_input == "12345" || pwd_input == "54321"); // true || false -> true

   pwd_input = "54321";
   console.log(pwd_input == "12345" || pwd_input == "54321"); // false || true -> true

   let userName = "abc";
   console.log(pwd_input == "54321" || userName == "abc"); // true || true -> true

   console.log(pwd_input == "12345" || userName == "xyz"); // false || false -> false
   ```

* The `||` operator also exhibits **short-circuit evaluation**. If the left operand evaluates to `true`, the right operand is **not** evaluated because the result of the `||` operation will be `true` regardless of the right operand's value.

   ```javascript
   function alwaysTrue() {
       console.log("Right operand evaluated");
       return true;
   }

   let result = true || alwaysTrue();
   console.log(result); // Output: true (and "Right operand evaluated" is NOT printed)
   ```

---

**🕘 09:13 - Logical NOT (`!`)**

* The logical NOT operator (`!`) is a unary operator that operates on a single operand. It reverses the boolean value of its operand. If the operand is `true`, `!` returns `false`, and if the operand is `false`, `!` returns `true`.

   | `operand` | `Result (!operand)` |
   |-----------|--------------------|
   | `true`    | `false`            |
   | `false`   | `true`             |

   ```javascript
   console.log(!(10 > 4)); // !(true) -> false
   console.log(!false);     // true

   let isLoggedIn = false;
   if (!isLoggedIn) {
       console.log("Please log in."); // Output: Please log in.
   }
   ```

**Summary of Logical Operators:**

* `&&` (AND): Returns `true` if both operands are `true`. Short-circuits if the left operand is `false`.
* `||` (OR): Returns `true` if at least one operand is `true`. Short-circuits if the left operand is `true`.
* `!` (NOT): Reverses the boolean value of its operand.

---