# **JavaScript Learning Notes - Episode 6**  

---

## **Topics Covered:**  
- **Variable Re-Declaration & Re-Initialization** (var, let, const)  
- **Printing Statements** (`console.log()`, `alert()`, `document.write()`, `console.warn()`, `console.error()`)  
- **Getting Dynamic Input** using `prompt()`  

---

## **🕘 00:05 - Variable Re-Declaration & Re-Initialization**  
### **1️⃣ Using `var` (Function Scoped)**
| Feature | Allowed? |
|---------|---------|
| **Re-Declaration** | ✅ Yes |
| **Re-Initialization (Reassigning)** | ✅ Yes |

✅ **Example:**
```javascript
var age1;   // ✅ Declaration
age1 = 40;  // ✅ Initialization
var age1 = 70; // ✅ Re-declaration (allowed)
age1 = "Eighty"; // ✅ Re-initialize (allowed)

console.log(age1); // Output: "Eighty"
```
🔹 **Issues with `var`**  
- It does **not have block scope**, leading to unintended bugs.  
- Can be **redeclared** in the same scope, causing confusion.  

---

### **2️⃣ Using `let` (Block Scoped)**
| Feature | Allowed? |
|---------|---------|
| **Re-Declaration** | ❌ No (Throws an error) |
| **Re-Initialization (Reassigning)** | ✅ Yes |

✅ **Example:**
```javascript
let newAge;  // ✅ Declaration
newAge = 150; // ✅ Initialization

// let newAge = 30; ❌ Error: Cannot redeclare 'newAge' in the same scope

newAge = "Hundred"; // ✅ Reassigning is allowed

console.log(newAge); // Output: "Hundred"
```
🔹 **Benefits of `let`**  
- **Block-scoped** (Only accessible within the block `{}` it is defined in).  
- Prevents accidental re-declaration.  

---

### **3️⃣ Using `const` (Block Scoped)**
| Feature | Allowed? |
|---------|---------|
| **Re-Declaration** | ❌ No (Throws an error) |
| **Re-Initialization (Reassigning)** | ❌ No (Throws an error) |

✅ **Example:**
```javascript
const employeeName = "xyz"; // ✅ Must be initialized during declaration

// const employeeName = "abc"; ❌ Error: Cannot redeclare 'employeeName'

// employeeName = 30; ❌ Error: Cannot reassign a 'const' variable
```
🔹 **Key Points About `const`**  
- **Must be assigned a value during declaration.**  
- **Cannot be reassigned a new value.**  
- **Reference values (Objects/Arrays) can be modified**, but the reference itself cannot be changed.  

✅ **Example with Objects & Arrays**
```javascript
const person = { name: "Alice", age: 30 };

// Allowed: Modifying object properties
person.age = 35;
console.log(person); // Output: { name: "Alice", age: 35 }

// Not Allowed: Changing the entire object
// person = { name: "Bob", age: 40 }; ❌ Error: Assignment to a constant variable
```

---

## **🕘 06:00 - Printing Statements in JavaScript**
Printing statements help in debugging and checking program flow.

### **1️⃣ `console.log()` (Most Common)**
✅ Prints messages to the console  
```javascript
console.log("Hello, World!");
console.log(100);
```

### **2️⃣ `alert()` (Popup Alert Box)**
✅ Displays a pop-up alert in the browser  
```javascript
alert("Welcome to JavaScript!");
```

### **3️⃣ `document.write()` / `document.writeln()` (Writes Directly to the Page)**
✅ Outputs text **directly onto the webpage**  
```javascript
document.write("Hello, this is written on the page.");
document.writeln("This prints with a new line.");
```

🚨 **Issue:** Overwrites the entire HTML content if called after the page loads.

### **4️⃣ `console.warn()` (Warning Message)**
✅ Used for displaying warnings in the console  
```javascript
console.warn("This is a warning!");
```

### **5️⃣ `console.error()` (Error Message)**
✅ Used for displaying error messages in the console  
```javascript
console.error("This is an error message!");
```

### **6️⃣ `console.clear()` (Clears the Console)**
✅ Clears the console logs  
```javascript
console.clear();
```

---

## **🕘 07:45 - Getting Dynamic Input in JavaScript**
JavaScript provides ways to **interact with the user** dynamically.

### **1️⃣ `prompt()` - Get User Input**
✅ Asks the user to enter data, returns a string  
```javascript
let userAge = prompt("Enter your age:");
console.log(userAge);
```
🚨 **By default, `prompt()` returns a string. Convert it if needed:**
```javascript
let userAge = Number(prompt("Enter your age:"));
console.log(typeof userAge); // Output: number
```

### **2️⃣ `confirm()` - Yes/No Confirmation**
✅ Returns `true` (OK) or `false` (Cancel)  
```javascript
let isConfirmed = confirm("Do you agree?");
console.log(isConfirmed); // Output: true or false
```

---

## **📂 Full Code Examples from the Video**  

---

### ✅ **index.js**
```javascript
// ************ Variable Declaration and Reassignment ************

// Using var
var age1;  // ✅ Declaration
age1 = 40; // ✅ Initialization
var age1 = 70; // ✅ Re-declaration
age1 = "Eighty"; // ✅ Re-initialize
console.log(age1); // Output: Eighty

// Using let
let newAge; // ✅ Declaration
newAge = 150; // ✅ Initialization
// let newAge = 30; ❌ Error: Cannot redeclare 'newAge'
newAge = "Hundred"; // ✅ Re-assigning
console.log(newAge); // Output: Hundred

// Using const
const employeeName = "xyz"; // ✅ Must be initialized
// employeeName = 30; ❌ Error: Cannot reassign a 'const' variable

// ************ Printing Statements ************
console.log("Hello, World!"); // Normal output
console.warn("This is a warning!"); // Warning
console.error("This is an error!"); // Error
document.write("Document Write Example<br>");
document.writeln("This prints with a new line<br>");

// ************ Getting Dynamic Input ************
let userAge = prompt("Enter your age:");
console.log("User Age:", userAge);

let isConfirmed = confirm("Do you agree?");
console.log("User Confirmation:", isConfirmed);
```

---

## **🔹 Summary from Episode 6**  
✅ **`var` allows re-declaration and re-initialization** but is function-scoped.  
✅ **`let` does NOT allow re-declaration but allows re-initialization** (block-scoped).  
✅ **`const` does NOT allow re-declaration or re-initialization** (must be initialized at declaration).  
✅ **Printing Statements:**  
- `console.log()` → Debugging  
- `alert()` → Pop-up alert  
- `document.write()` → Writes to webpage  
- `console.warn()` → Warning  
- `console.error()` → Error  
✅ **Getting User Input:**  
- `prompt()` → Gets input from user  
- `confirm()` → Yes/No confirmation  

---

# JavaScript Learning Notes - Episode 6: JS Basics : Redeclare, Reinitialize, and Print Statement


**Topics Covered:**

* Variable Re-Declaration
* Printing Statements
* To Get dynamic value

---

**Variable Declaration, Initialization, Redeclaration, and Reinitialization**

This section focuses on the behavior of variables declared with `var`, `let`, and `const` regarding redeclaration and reinitialization (reassignment).

**`var`**

* **Declaration:** You can declare a `var` variable without immediately assigning a value (e.g., `var myVariable;`).
* **Initialization:** Assigning an initial value to a variable (e.g., `var myVariable = 10;` or `myVariable = 10;` after declaration).
* **Re-declaration:** **Possible.** You can declare a `var` variable with the same name multiple times within the same scope without causing an error (though it's generally bad practice).
* **Re-initialization (Reassignment):** **Possible.** You can change the value of a `var` variable at any point after its declaration.

   ```javascript
   var age = 30; // Declaration and Initialization
   var age;      // Declaration (again - allowed but not recommended)
   age = 40;     // Re-initialization
   var age = 70; // Re-declaration (allowed)
   age = "Eighty"; // Re-initialization with a different data type
   console.log(age); // Output: Eighty
   ```

**`let`**

* **Declaration:** You can declare a `let` variable without immediate initialization (e.g., `let counter;`).
* **Initialization:** Assigning an initial value (e.g., `let counter = 0;` or `counter = 0;` after declaration).
* **Re-declaration:** **Not possible.** Attempting to declare a `let` variable with the same name within the same scope will result in a `SyntaxError`.
* **Re-initialization (Reassignment):** **Possible.** You can change the value of a `let` variable after its initial assignment.

   ```javascript
   let newAge; // Declaration
   console.log(newAge); // Output: undefined
   newAge = 150; // Initialization
   // let newAge = 30; // Error: Identifier 'newAge' has already been declared
   newAge = "Hundred"; // Re-assignment
   console.log(newAge); // Output: Hundred
   ```

**`const`**

* **Declaration:** You **must** initialize a `const` variable at the time of declaration. You cannot declare it without assigning a value.
* **Initialization:** Assigning an initial value (e.g., `const PI = 3.14159;`).
* **Re-declaration:** **Not possible.** Similar to `let`, redeclaring a `const` variable with the same name within the same scope will cause a `SyntaxError`.
* **Re-initialization (Reassignment):** **Not possible.** Once a `const` variable is assigned a value, you cannot reassign a new value to it. This will result in a `TypeError`.
* **Data Type:** While you cannot reassign a `const` variable to a new primitive value (like changing a string to a number), if a `const` variable holds a reference type (object or array), you **can** modify the properties or elements within that object or array. The constant binding is to the object/array itself, not its contents.

   ```javascript
   const employeeName = "xyz";
   // const employeeName; // Error: Missing initializer in const declaration
   // const employeeName = "abc"; // Error: Identifier 'employeeName' has already been declared
   // employeeName = 30; // Error: Assignment to constant variable.

   const person = { name: "Alice", age: 25 };
   person.age = 26; // Allowed - modifying a property of the object
   // person = { name: "Bob", age: 30 }; // Not allowed - reassigning the 'person' variable
   console.log(person); // Output: { name: 'Alice', age: 26 }

   const numbers = [1, 2, 3];
   numbers.push(4); // Allowed - modifying the array
   // numbers = [5, 6]; // Not allowed - reassigning the 'numbers' variable
   console.log(numbers); // Output: [ 1, 2, 3, 4 ]
   ```

---

**Printing Statements (for Debugging and Output)**

Printing statements are primarily used to display values and messages, often for debugging purposes to understand the flow and state of your JavaScript code.

* **`console.log()`:** The most commonly used method. It outputs messages to the browser's developer console. You can pass multiple arguments, which will be printed with spaces in between.

   ```javascript
   console.log("The user's age is:", userAge);
   console.log(newAge);
   ```

* **`alert()`:** Displays a modal dialog box in the browser with a specified message and an "OK" button. It pauses the execution of the script until the user clicks "OK". Generally used sparingly for important notifications as it can be disruptive.

   ```javascript
   // alert(employeeName);
   ```

* **`document.write()`:** Writes content directly into the HTML document at the point where the script tag is located. **Caution:** Using `document.write()` after the initial page load can overwrite the existing HTML content. It's often used during the initial loading phase or for simple output.

   ```javascript
   // document.write(newAge);
   document.writeln(newAge); // Similar to document.write but might add a newline character (behavior can vary)
   ```

* **`confirm()`:** Displays a modal dialog box with a specified message and two buttons: "OK" and "Cancel". It returns a boolean value (`true` if the user clicks "OK", `false` if they click "Cancel").

   ```javascript
   // confirm(newAge);
   ```

* **`console.error()`:** Outputs an error message to the browser's console, often with a red indicator. Useful for indicating errors in your code.

   ```javascript
   console.error(userAge);
   ```

* **`console.warn()`:** Outputs a warning message to the browser's console, often with a yellow indicator. Used to highlight potential issues or non-critical problems.

   ```javascript
   console.warn(userAge);
   ```

* **`console.clear()`:** Clears the browser's console.

   ```javascript
   // console.clear();
   ```

---

**🕘 07:45 - To Get Dynamic Value from User**

* **`prompt()`:** Displays a dialog box that prompts the user for input. It takes an optional string argument as the message to display to the user and returns the text entered by the user as a string. If the user clicks "Cancel" or closes the dialog without entering anything, it returns `null`.

   ```javascript
   // let userAge = prompt("Enter your age:");
   // console.log(userAge); // The input will be a string
   ```

**Important Note on `prompt()`:** The value returned by `prompt()` is always a string. If you expect a number, you will need to convert it using functions like `parseInt()` or `parseFloat()`.

---