```markdown
#   JavaScript Learning Notes - Episode 5: Keywords and Identifiers in Javascript

**Topics Covered:**

* What is Keywords
* Purpose of Keywords
* What is Identifier
* Internal vs External Script
* Identifier Rules
* Naming Conventions for developers

---

**🕘 00:00 - What is Keywords**

* Keywords are reserved words in JavaScript that have predefined meanings and specific purposes within the language.
* They are part of the syntax of JavaScript and cannot be used as identifiers (names for variables, functions, etc.).

---

**🕘 00:10 - Purpose of Keywords**

* Keywords are used to define the structure and control the behavior of JavaScript code.
* Examples include:
    * **Variable declaration:** `var`, `let`, `const`
    * **Control flow:** `if`, `else`, `for`, `while`, `switch`, `return`
    * **Functions:** `function`
    * **Classes:** `class`, `extends`
    * **Other operations:** `new`, `this`, `typeof`, `instanceof`

---

**🕘 01:20 - What is Identifier**

* Identifiers are names given to variables, functions, classes, objects, and other elements in JavaScript code.
* They allow developers to refer to and manipulate these elements throughout the program.

---

**🕘 02:05 - Internal vs External Script**

* **Internal Scripts:** JavaScript code that is embedded directly within an HTML file using the `<script>` tag.
    * Useful for small amounts of JavaScript code or when the script is specific to a particular HTML page.
* **External Scripts:** JavaScript code that is stored in a separate file with a `.js` extension.
    * Linked to the HTML file using the `<script>` tag with the `src` attribute, which specifies the path to the external JavaScript file.
    * Best practice for larger projects and reusable code, as it promotes better organization, maintainability, and caching of JavaScript files by the browser.

---

**Code Examples from the Episode:**

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1> Im gonna make you dynamic </h1>
    <script>
        // alert("hii")
        // setTimeout( ()=>{
        //     document.querySelector( "h1" ).innerHTML = "IM changed"
        // }, 4000 )
        // console.log( 100 )
        // console.log( "Javascript" )
        // document.write(  "Javascript INTRO" )

        //Variable Declaration

        // keyword variable_name = value ;
        var user1 = "Front End Development";
        let email = "abc@gmail.com";
        const age = 25;

        console.log( user1 )
        console.log( email )
    </script>
    <script src="index.js">

    </script>
</body>
</html>
```

**index.js**

```javascript
let uName = "ECMAScript";

console.log(uName);

let lName = "JavaScript";
let LName = "Dynamically Typed";

console.log(lName, LName);

let $lName = "Single Page Application";
let _lName = "SPA";
// let 0lName = "SPA"; Numeric value is not allowed as a first letter

let l$Name1 = "abc";

console.log($lName, _lName);

//Camel Case
//Pascal Case
//Under Case

let newemployeeid = 10;

let newEmployeeId = 10 // Camel Case

let NewEmployeeId = 10 // Pascal Case

let New_Employee_Id = 10 // Under_Case

let new_employee_id = 10 // Under_Case
```

---

**🕘 04:30 - Identifier Rules**

* Identifiers must follow specific rules to be valid in JavaScript:
    * **Start with:** A letter (a-z, A-Z), an underscore (\_), or a dollar sign ($).
    * **Subsequent characters:** Can include letters, numbers (0-9), underscores, or dollar signs.
    * **Cannot start with:** A number.
    * **Case-sensitive:** JavaScript is case-sensitive, so `myVar` and `myvar` are considered different identifiers.
    * **Cannot be a keyword:** Identifiers cannot have the same name as any JavaScript keyword.
* **Examples:**
    * Valid identifiers: `myVariable`, `_tempValue`, `$price`, `user123`, `userName`
    * Invalid identifiers: `123variable` (starts with a number), `my-variable` (contains a hyphen), `for` (is a keyword)

---

**🕘 08:05 - Naming Conventions for developers**

* Naming conventions are guidelines that developers follow to choose consistent and readable names for identifiers.
* They improve code readability, maintainability, and collaboration.
* Common naming conventions in JavaScript:
    * **camelCase:** The most common convention for naming variables and functions. It starts with a lowercase letter, and subsequent words are capitalized (e.g., `myVariableName`, `calculateTotal`).
    * **PascalCase (UpperCamelCase):** Used for naming constructor functions and classes. The first letter of each word is capitalized (e.g., `MyClassName`, `Person`).
    * **snake_case:** Words are separated by underscores, and all letters are lowercase (e.g., `my_variable_name`). Often used in other languages like Python, but less common in JavaScript.
    * **UPPER_SNAKE_CASE:** Used for naming constants, where words are separated by underscores, and all letters are uppercase (e.g., `MAX_VALUE`).

---

# **JavaScript Learning Notes - Episode 5**  

---

## **Topics Covered:**  
- What are **Keywords** in JavaScript?  
- Purpose of Keywords  
- What are **Identifiers**?  
- **Internal vs. External Scripts**  
- **Rules for Identifiers**  
- **Naming Conventions for Developers**  

---

## **🕘 00:00 - What are Keywords in JavaScript?**  
🔹 **Keywords** are **reserved words** in JavaScript that have predefined meanings.  
🔹 They **cannot** be used as variable, function, or object names.  

✅ **Examples of Keywords:**  
| Category        | Keywords Example |
|---------------|----------------|
| **Variable Declaration** | `var`, `let`, `const` |
| **Control Flow** | `if`, `else`, `switch`, `case` |
| **Loops** | `for`, `while`, `do` |
| **Functions** | `function`, `return` |
| **Objects & Classes** | `class`, `this`, `new`, `extends` |
| **Miscellaneous** | `true`, `false`, `null`, `undefined` |

🚨 **Example (Incorrect Usage of Keywords):**  
```javascript
let function = "Test"; // ❌ Error: 'function' is a reserved keyword
const if = "Hello";    // ❌ Error: 'if' is a reserved keyword
```

---

## **🕘 00:10 - Purpose of Keywords**  
- Keywords **define** the structure of JavaScript programs.  
- They help in **declaring variables, writing conditions, looping, and defining objects/functions**.  
- Using keywords **incorrectly** will cause **syntax errors**.  

✅ **Correct Usage Example:**  
```javascript
let age = 25;  // ✅ let is a keyword for variable declaration
if (age > 18) {
    console.log("You are an adult.");  // ✅ if is a control flow keyword
}
```

---

## **🕘 01:20 - What are Identifiers?**  
🔹 **Identifiers** are the **names we give to variables, functions, classes, and objects**.  
🔹 They help in **managing and accessing elements in JavaScript**.  

✅ **Examples of Identifiers:**  
```javascript
let firstName = "John";  // ✅ Valid identifier
function calculateSum() {  // ✅ Valid identifier
    return 10 + 20;
}
```

🚨 **Invalid Identifier Examples:**  
```javascript
let 1number = 100;  // ❌ Cannot start with a number
let break = "stop"; // ❌ 'break' is a reserved keyword
```

---

## **🕘 02:05 - Internal vs External Script**  
🔹 **Internal Script**  
- JavaScript code is written **inside the HTML file** using `<script>` tags.  
- Used for **small scripts**.  

✅ **Example (Internal Script):**  
```html
<script>
  console.log("This is an internal script");
</script>
```

🔹 **External Script**  
- JavaScript code is written in a **separate `.js` file** and linked in HTML.  
- Used for **better organization** and **code reusability**.  

✅ **Example (External Script - `index.js`):**  
```javascript
console.log("This is an external script");
```
✅ **Linking in `index.html`:**  
```html
<script src="index.js"></script>
```

🚨 **Best Practice:** Always use **external scripts** for larger projects to maintain clean code.  

---

## **🕘 04:30 - Identifier Rules in JavaScript**  
### ✅ **Valid Identifiers:**
✔ Must **start** with a **letter (`A-Z`, `a-z`)**, an **underscore (`_`)**, or a **dollar sign (`$`)**.  
✔ Can contain **letters, digits (`0-9`), underscores (`_`), or dollar signs (`$`)**.  
✔ JavaScript is **case-sensitive** (`userName` and `UserName` are different).  

✅ **Valid Examples:**  
```javascript
let userName = "Alice";
let _id = 1001;
let $price = 500;
let user123 = "John";
```

🚨 **Invalid Examples:**  
```javascript
let 123user = "Alice";  // ❌ Cannot start with a number
let break = "Stop";     // ❌ 'break' is a reserved keyword
let user-name = "John"; // ❌ Hyphens are not allowed
```

---

## **🕘 08:05 - Naming Conventions for Developers**  
To maintain **readability and consistency**, developers follow specific naming styles:

### **1️⃣ Camel Case (Recommended for Variables & Functions)**
- **First word starts with lowercase, next words start with uppercase**.  
✅ Example:  
```javascript
let myVariable = "Hello";
function calculateTotal() {}
```

### **2️⃣ Pascal Case (Used for Class Names)**
- **Every word starts with uppercase**.  
✅ Example:  
```javascript
class MyClass {}
let NewEmployeeId = 10;
```

### **3️⃣ Snake Case (Less Common, Used in Constants or Databases)**
- **Words are separated by underscores (`_`)**.  
✅ Example:  
```javascript
let new_employee_id = 10;
const MAX_LIMIT = 500;
```

🚨 **Avoid Mixing Cases in the Same Project** to maintain code clarity.  

---

## **📂 Full Code Examples from the Video**  
### ✅ **index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Keywords & Identifiers</title>
</head>
<body>
    <h1>I'm gonna make you dynamic</h1>

    <script>
        // Internal Script Example
        console.log("Hello from Internal Script!");

        // Changing H1 text after 4 seconds
        setTimeout(() => {
            document.querySelector("h1").innerHTML = "I'm changed!";
        }, 4000);
    </script>

    <!-- Linking External Script -->
    <script src="index.js"></script>
</body>
</html>
```

---

### ✅ **index.js**
```javascript
// Variable Names (Identifiers)
let uName = "ECMAScript";
console.log(uName);

let lName = "JavaScript";
let LName = "Dynamically Typed";

console.log(lName, LName);

// Using $ and _
let $lName = "Single Page Application";
let _lName = "SPA";
// let 0lName = "SPA"; ❌ Error: Cannot start with a number

let l$Name1 = "abc";
console.log($lName, _lName);

// Naming Conventions Examples
let newemployeeid = 10; // ❌ Not recommended

let newEmployeeId = 10; // ✅ Camel Case (Recommended)
let NewEmployeeId = 10; // ✅ Pascal Case (Used for Class Names)
let new_employee_id = 10; // ✅ Snake Case (Used in Constants)

console.log(newEmployeeId, NewEmployeeId, new_employee_id);
```

---

## **🔹 Summary from Episode 5**  
✅ **Keywords** are **reserved words** with special meanings (e.g., `var`, `if`, `return`).  
✅ **Identifiers** are **names given to variables, functions, and classes**.  
✅ **Rules for Identifiers:** Cannot start with a **number** or use **keywords**.  
✅ **Internal Scripts** are inside HTML, while **External Scripts** are linked `.js` files.  
✅ **Naming Conventions:**  
- `camelCase` for **variables & functions**.  
- `PascalCase` for **classes**.  
- `snake_case` for **constants and databases**.  

---