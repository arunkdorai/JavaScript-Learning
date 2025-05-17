# **JavaScript Learning Notes - Episode 10**  

---

## **Topics Covered:**  
- **Assignment Operators (`=, +=, -=, *=, /=, %=`)**  
- **Relational Operators (`==, ===, !=, !==, >, <, >=, <=`)**  

---

## **🕘 00:10 - Assignment Operators**  

### **📌 Definition**  
Assignment operators **assign values to variables**.  
- The `=` operator assigns a value.  
- Combined assignment operators **perform arithmetic operations** and assign the result.  

✅ **Types of Assignment Operators**  

| Operator | Example | Equivalent To | Explanation |
|----------|--------|--------------|-------------|
| `=` | `x = 10` | `x = 10` | Assigns `10` to `x`. |
| `+=` | `x += 5` | `x = x + 5` | Adds `5` to `x`. |
| `-=` | `x -= 5` | `x = x - 5` | Subtracts `5` from `x`. |
| `*=` | `x *= 2` | `x = x * 2` | Multiplies `x` by `2`. |
| `/=` | `x /= 2` | `x = x / 2` | Divides `x` by `2`. |
| `%=` | `x %= 3` | `x = x % 3` | Stores remainder of `x / 3`. |

✅ **Example Code:**
```javascript
// Assignment Operator

let age = 20;
age += 20; // age = age + 20
console.log("Age is:", age); // 40

let age1 = 25, val = 100;
age1 += val; // age1 = 25 + 100
console.log("Age1 is:", age1); // 125

let age2 = 10;
age2 -= 5; // age2 = age2 - 5
console.log("Age2 is:", age2); // 5

let age3 = 3;
age3 *= 2; // age3 = age3 * 2
console.log("Age3 is:", age3); // 6

let age4 = 10;
age4 /= 2; // age4 = age4 / 2
console.log("Age4 is:", age4); // 5

let age5 = 10;
age5 %= 3; // age5 = age5 % 3 (Remainder)
console.log("Age5 is:", age5); // 1
```

---

## **🕘 04:45 - Relational (Comparison) Operators**  

### **📌 Definition**  
Relational operators **compare values** and return `true` or `false`.  
Used in **decision-making (if-else statements, loops, etc.)**.  

✅ **Types of Relational Operators**  

| Operator | Example | Explanation |
|----------|--------|-------------|
| `==` | `5 == '5'` → `true` | Compares only values (type conversion happens). |
| `===` | `5 === '5'` → `false` | Strict equality: Compares **value & type**. |
| `!=` | `5 != '5'` → `false` | Checks if values are **not equal**. |
| `!==` | `5 !== '5'` → `true` | Strict inequality: Checks **value & type**. |
| `>` | `10 > 5` → `true` | Greater than. |
| `<` | `10 < 5` → `false` | Less than. |
| `>=` | `10 >= 10` → `true` | Greater than or equal to. |
| `<=` | `5 <= 10` → `true` | Less than or equal to. |

✅ **Example Code:**
```javascript
// Relational Operators

console.log(5 == '5'); // true (values match, type conversion happens)
console.log(5 === '5'); // false (strict comparison: number vs. string)

console.log(10 != "10"); // false (values are equal)
console.log(10 !== "10"); // true (type is different)

console.log(20 > 10); // true (20 is greater than 10)
console.log(20 < 10); // false (20 is not less than 10)

console.log(15 >= 15); // true (equal)
console.log(8 <= 10); // true (8 is less than 10)
```

---

## **📂 Full Code Example from Episode 10**  
### ✅ **index.js**
```javascript
// ************ Assignment Operators ************

let age = 20;
age += 20;
console.log("Age is:", age); // 40

let age1 = 25, val = 100;
age1 += val;
console.log("Age1 is:", age1); // 125

let age2 = 10;
age2 -= 5;
console.log("Age2 is:", age2); // 5

let age3 = 3;
age3 *= 2;
console.log("Age3 is:", age3); // 6

let age4 = 10;
age4 /= 2;
console.log("Age4 is:", age4); // 5

let age5 = 10;
age5 %= 3;
console.log("Age5 is:", age5); // 1

// ************ Relational Operators ************

console.log(5 == '5'); // true
console.log(5 === '5'); // false

console.log(10 != "10"); // false
console.log(10 !== "10"); // true

console.log(20 > 10); // true
console.log(20 < 10); // false

console.log(15 >= 15); // true
console.log(8 <= 10); // true
```

---

## **🔹 Summary from Episode 10**  
✅ **Assignment Operators:**
- `=` Assigns a value.
- `+=` Adds and assigns.
- `-=` Subtracts and assigns.
- `*=` Multiplies and assigns.
- `/=` Divides and assigns.
- `%=` Finds remainder and assigns.

✅ **Relational Operators:**
- `==` → Compares values (loose equality).
- `===` → Compares values and types (strict equality).
- `!=` → Checks if values are **not** equal.
- `!==` → Checks if values **and** types are **not** equal.
- `> , < , >= , <=` → Compare numerical values.

---



# JavaScript Learning Notes - Episode 10: Javascript Assignment & Relational Operator

**Topics Covered:**

* Assignment Operators
* Relational Operators

---

**🕘 00:10 - Assignment Operators**

* Assignment operators are used to assign values to variables.
* The most basic assignment operator is the equals sign (`=`), which assigns the value on the right-hand side to the variable on the left-hand side.

   ```javascript
   let x = 10; // Assigns the value 10 to the variable x
   ```

* **Compound Assignment Operators:** These operators perform an arithmetic or bitwise operation and then assign the result back to the left operand. They provide a shorthand way to modify a variable's value.

    * **Addition assignment (`+=`)**: Adds the right operand to the left operand and assigns the result to the left operand (`x += y` is equivalent to `x = x + y`).
       ```javascript
       let age = 20;
       age += 20; // age = age + 20 = 40
       console.log("Age is:", age); // Output: Age is: 40

       let age1 = 25;
       let val = 100;
       age1 += val; // age1 = age1 + val = 25 + 100 = 125
       console.log("Age1 is:", age1); // Output: Age1 is: 125
       ```

    * **Subtraction assignment (`-=`)**: Subtracts the right operand from the left operand and assigns the result to the left operand (`x -= y` is equivalent to `x = x - y`).
       ```javascript
       let age2 = 10;
       age2 -= 5; // age2 = age2 - 5 = 5
       console.log("Age2 is:", age2); // Output: Age2 is: 5
       ```

    * **Multiplication assignment (`*=`)**: Multiplies the left operand by the right operand and assigns the result to the left operand (`x *= y` is equivalent to `x = x * y`).
       ```javascript
       let age3 = 3;
       age3 *= 2; // age3 = age3 * 2 = 6
       console.log("Age3 is:", age3); // Output: Age3 is: 6
       ```

    * **Division assignment (`/=`)**: Divides the left operand by the right operand and assigns the quotient to the left operand (`x /= y` is equivalent to `x = x / y`).
       ```javascript
       let age4 = 10;
       age4 /= 2; // age4 = age4 / 2 = 5
       console.log("Age4 is:", age4); // Output: Age4 is: 5
       ```

    * **Modulus assignment (`%=`)**: Performs a modulus operation on the left operand with the right operand and assigns the remainder to the left operand (`x %= y` is equivalent to `x = x % y`).
       ```javascript
       let age5 = 10;
       age5 %= 3; // age5 = age5 % 3 = 1
       console.log("Age5 is:", age5); // Output: Age5 is: 1
       ```

    * **Exponentiation assignment (`**=`)**: Raises the left operand to the power of the right operand and assigns the result to the left operand (`x **= y` is equivalent to `x = x ** y`).
       ```javascript
       let base = 2;
       base **= 3; // base = base ** 3 = 2 ** 3 = 8
       console.log("Base is:", base); // Output: Base is: 8
       ```

---

**🕘 04:45 - Relational Operators**

* Relational (or comparison) operators compare two operands and return a boolean value (`true` or `false`) based on the relationship between them.

    * **Equal to (`==`)**: Checks if the values of two operands are equal. It performs type coercion if the operands are of different types.
       ```javascript
       console.log(5 == 5);     // Output: true
       console.log(5 == '5');   // Output: true (string '5' is coerced to a number)
       console.log(true == 1);  // Output: true (boolean true is coerced to 1)
       console.log(false == 0); // Output: true (boolean false is coerced to 0)
       ```

    * **Not equal to (`!=`)**: Checks if the values of two operands are not equal. It also performs type coercion.
       ```javascript
       console.log(5 != 5);     // Output: false
       console.log(5 != '5');   // Output: false (due to type coercion, they are considered equal in value)
       console.log(true != 1);  // Output: false
       console.log(false != 0); // Output: false
       ```

    * **Strict equal to (`===`)**: Checks if the values of two operands are equal **and** if their data types are the same. No type coercion is performed.
       ```javascript
       console.log(5 === 5);     // Output: true
       console.log(5 === '5');   // Output: false (different data types: number vs. string)
       console.log(true === 1);  // Output: false (different data types: boolean vs. number)
       console.log(false === 0); // Output: false (different data types: boolean vs. number)
       ```

    * **Strict not equal to (`!==`)**: Checks if the values of two operands are not equal **or** if their data types are different. No type coercion is performed.
       ```javascript
       console.log(5 !== 5);     // Output: false
       console.log(5 !== '5');   // Output: true (different data types)
       console.log(true !== 1);  // Output: true (different data types)
       console.log(false !== 0); // Output: true (different data types)
       ```

    * **Greater than (`>`)**: Checks if the value of the left operand is greater than the value of the right operand.
       ```javascript
       console.log(10 > 5);   // Output: true
       console.log(5 > 10);   // Output: false
       console.log(5 > 5);    // Output: false
       console.log('b' > 'a'); // Output: true (compares based on Unicode values)
       ```

    * **Less than (`<`)**: Checks if the value of the left operand is less than the value of the right operand.
       ```javascript
       console.log(10 < 5);   // Output: false
       console.log(5 < 10);   // Output: true
       console.log(5 < 5);    // Output: false
       console.log('a' < 'b'); // Output: true
       ```

    * **Greater than or equal to (`>=`)**: Checks if the value of the left operand is greater than or equal to the value of the right operand.
       ```javascript
       console.log(10 >= 5);  // Output: true
       console.log(5 >= 10);  // Output: false
       console.log(5 >= 5);   // Output: true
       ```

    * **Less than or equal to (`<=`)**: Checks if the value of the left operand is less than or equal to the value of the right operand.
       ```javascript
       console.log(10 <= 5);  // Output: false
       console.log(5 <= 10);  // Output: true
       console.log(5 <= 5);   // Output: true
       ```

**Important Note on `==` vs `===`:** It is generally recommended to use the strict equality (`===`) and strict inequality (`!==`) operators in most cases to avoid unexpected behavior due to type coercion. This leads to more predictable and maintainable code.

---