# **JavaScript Learning Notes - Episode 17** 

---

## **Topics Covered:**  
- **Nested `if-else` Statements**  
- **Real-World Scenario for Nested `if`**  
- **Ternary Operator (`? :`) in JavaScript**  
- **Syntax and Usage of Ternary Operator**  
- **Example: Login Password Validation**  

---

## **🕘 00:10 - Real Scenario for Nested `if`**  

✅ **What is a Nested `if` Statement?**  
- A **nested `if-else`** is an `if` statement inside another `if` statement.  
- It **allows checking multiple conditions step by step**.  
- Used when a **decision depends on multiple factors**.  

---

## **🕘 00:15 - Example of Nested `if` (Selection Criteria)**  

### **📌 Problem Statement:**  
A person must meet **all three conditions** to be selected:  
1️⃣ Age should be **18 or above**.  
2️⃣ Height should be **150 cm or more**.  
3️⃣ Weight should be **45 kg or more**.  

### **📌 Code:**
```javascript
let age = 20;
let height = 160;
let weight = 75;

if (age >= 18) {
    if (height >= 150) {
        if (weight >= 45) {
            console.log("You are selected");
        } else {
            console.log("Weight is not matched");
        }
    } else {
        console.log("Height is not matched");
    }
} else {
    console.log("Age is not valid");
}
```

### **📌 Output:**  
```plaintext
You are selected
```

---

## **🕘 06:16 - Flow of Ternary Operator**  

✅ **What is a Ternary Operator?**  
- **A short way to write `if-else` statements**.  
- Uses **`condition ? trueStatement : falseStatement;`**  
- Works well for **simple decisions** like checking login credentials.  

---

## **🕘 06:40 - Syntax of Ternary Operator**  

```javascript
condition ? "Statement if True" : "Statement if False";
```

**Example:**  
```javascript
let isAdult = age >= 18 ? "You are an adult" : "You are a minor";
```

---

## **🕘 07:30 - Example: Login Password Validation**  

### **📌 Problem Statement:**  
If the user enters the correct password, **show a welcome message**. Otherwise, **show an error**.  

### **📌 Code:**
```javascript
let pwd_input = false;

pwd_input ? console.log("Welcome to website") : console.log("Password is incorrect");
```

### **📌 Output:**  
```plaintext
Password is incorrect
```
(If `pwd_input = true`, it prints `"Welcome to website"`)

---

## **🔹 Summary from Episode 17**  
✅ **Nested `if-else`** is used for complex conditions.  
✅ **Each `if` is checked step by step inside the previous `if`.**  
✅ **Ternary operator (`? :`)** is a shorter way to write `if-else`.  
✅ **Ternary is useful for quick conditions but not for complex logic.**  

---



# JavaScript Learning Notes - Episode 17: Control Statement - Nested if statement & Ternary Operator


**Topics Covered:**

* Real Scenario for Nested-If
* Nested If - Example Coding
* Flow of Ternary Operator
* Syntax - ternary
* Example with Login Password

---

**Nested If-Else Statements**

* A **nested if-else statement** occurs when an `if` statement or an `if-else` statement is placed inside another `if` or `else` block.
* Nesting allows you to create more complex decision-making structures by checking multiple conditions in a hierarchical manner.

**🕘 00:10 - Real Scenario for Nested-If**

* Nested `if` statements are useful in scenarios where you need to evaluate a primary condition, and only if that condition is true (or false), you need to check further sub-conditions.
* Examples include:
    * Checking if a user is logged in, and then checking their role to determine their access level.
    * Validating multiple input fields where the validation of one field might depend on the value of another.
    * Implementing a multi-level menu or decision tree.

**🕘 00:15 - Nested If - Example Coding**

```javascript
let age = 20;
let height = 160;
let weight = 75;

if (age >= 18) {
    // First level: Check if age is 18 or older
    if (height >= 150) {
        // Second level: If age is valid, check if height is at least 150
        if (weight >= 45) {
            // Third level: If age and height are valid, check if weight is at least 45
            console.log("You are selected");
        } else {
            console.log("Weight is not matched");
        }
    } else {
        console.log("Height is not matched");
    }
} else {
    console.log("Age is not valid");
}
// Output: You are selected (because age >= 18, height >= 150, and weight >= 45 are all true)

age = 17;
height = 165;
weight = 50;
if (age >= 18) {
    if (height >= 150) {
        if (weight >= 45) {
            console.log("You are selected");
        } else {
            console.log("Weight is not matched");
        }
    } else {
        console.log("Height is not matched");
    }
} else {
    console.log("Age is not valid");
}
// Output: Age is not valid (because the first condition, age >= 18, is false)
```

* In this example, the program first checks if the `age` is 18 or greater.
* If the age condition is true, it then proceeds to check if the `height` is 150 or greater.
* Only if both `age` and `height` conditions are true, does it finally check if the `weight` is 45 or greater.
* The `else` blocks at each level handle the cases where the respective condition is false.

**Considerations for Nested If Statements:**

* **Readability:** Deeply nested `if` statements can become difficult to read and understand. It's often better to simplify complex conditions using logical operators (`&&`, `||`) or by restructuring your code (e.g., using multiple `if` statements with `return` or `break`).
* **Complexity:** Excessive nesting can increase the complexity of your code and make it harder to debug.

---

**Ternary Operator**

* The **ternary operator** (also known as the conditional operator) is a shorthand way of writing a simple `if-else` statement in a single line.

**🕘 06:16 - Flow of Ternary Operator**

1. The `condition` is evaluated.
2. If the `condition` is `true`, the expression after the `?` (question mark) is executed, and its result is returned.
3. If the `condition` is `false`, the expression after the `:` (colon) is executed, and its result is returned.

**🕘 06:40 - Syntax - ternary**

```javascript
condition ? expressionIfTrue : expressionIfFalse
```

* `condition`: An expression that evaluates to `true` or `false`.
* `?`: The question mark that follows the condition.
* `expressionIfTrue`: The expression to be evaluated and returned if the `condition` is `true`.
* `:`: The colon that separates the true and false expressions.
* `expressionIfFalse`: The expression to be evaluated and returned if the `condition` is `false`.

**🕘 07:30 - Example with Login Password**

```javascript
let pwd_input = false;

pwd_input ? console.log("Welcome to website") : console.log("Password is incorrect");
// Output: Password is incorrect (because pwd_input is false, so the expression after the ':' is executed)

pwd_input = true;

pwd_input ? console.log("Welcome to website") : console.log("Password is incorrect");
// Output: Welcome to website (because pwd_input is true, so the expression after the '?' is executed)

let message = pwd_input ? "Login successful" : "Login failed";
console.log(message); // Output: Login successful (because pwd_input is true)

pwd_input = false;
message = pwd_input ? "Login successful" : "Login failed";
console.log(message); // Output: Login failed (because pwd_input is false)
```

* The ternary operator can be used to conditionally execute statements or to conditionally assign values to variables in a concise way.

**Limitations of the Ternary Operator:**

* **Readability for Complex Logic:** For complex `if-else` logic with multiple conditions or nested structures, the ternary operator can become difficult to read. In such cases, a traditional `if-else` statement might be more appropriate for clarity.
* **Executing Multiple Statements:** The ternary operator is designed for single expressions after the `?` and `:`. If you need to execute multiple statements based on the condition, you should generally use an `if-else` block.

**When to Use the Ternary Operator:**

* For simple, single-line conditional assignments or executions.
* When the `if-else` logic is straightforward and easy to understand at a glance.

---