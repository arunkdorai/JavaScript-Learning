# **JavaScript Learning Notes - Episode 7** 

---

## **Topics Covered:**  
- **What are Data Types?**  
- **Primitive Data Types** (`Number`, `String`, `Boolean`, `Undefined`, `Null`)  
- **Non-Primitive Data Types** (`Array`, `Object`)  
- **Single-line & Multi-line Comments**  

---

## **🕘 00:00 - What are Data Types?**  
### **📌 Definition**  
- **Data types** define the kind of data a variable can hold.  
- JavaScript is **dynamically typed** → The data type is determined at runtime.  

### **📌 Categories of Data Types**
1. **Primitive Data Types** (Single value storage)  
   - `Number`, `String`, `Boolean`, `Undefined`, `Null`  
2. **Non-Primitive Data Types** (Complex structures)  
   - `Array`, `Object`  

---

## **🕘 01:35 - Primitive Data Types**  

### **1️⃣ Number (Numeric Values)**
- Stores both integers and floating-point numbers.  
✅ **Example:**
```javascript
var num = 120;  // Integer
var num = 1.25; // Float

console.log(num); // Output: 1.25
```
🔹 **Note:** `Number` data type can store integers and decimal values.

---

### **2️⃣ String (Text Values)**
- Used to store text.  
- Can be written in:
  - **Double quotes** `(" ")`
  - **Single quotes** `(' ')`
  - **Backticks** `` (` `) `` (Template Literals)

✅ **Example:**
```javascript
let userName = "Javascript is a scripting language"; // Double Quotes
userName = 'Javascript is a Single-threaded language'; // Single Quotes
userName = `ECMAScript`; // Backticks

console.log(userName); // Output: ECMAScript
```
🔹 **Template literals (` `` `)** allow embedding variables inside strings:  
```javascript
let lang = "JavaScript";
console.log(`I am learning ${lang}`); // Output: I am learning JavaScript
```

---

### **3️⃣ Boolean (True/False Values)**
- Represents **true** or **false** values.  

✅ **Example:**
```javascript
let condition = true;
condition = false; // Re-assigning a boolean value

console.log(condition); // Output: false
```
🔹 **Use case:**  
- Boolean values are often used in **conditions and loops**.

---

### **4️⃣ Undefined (Variable Declared but Not Assigned a Value)**
- A variable is `undefined` if declared but not assigned a value.  

✅ **Example:**
```javascript
let noValue;  // Not assigned a value
let nValue = undefined; // Explicitly set as undefined

console.log(noValue, nValue); // Output: undefined undefined
```
🔹 **Best Practice:**  
- Avoid explicitly assigning `undefined`. Let JavaScript handle it.

---

### **5️⃣ Null (Represents an Empty Value)**
- Used when a variable should have "no value".  

✅ **Example:**
```javascript
let emptyValue = null;
console.log(emptyValue); // Output: null
```
🔹 **Difference Between `null` and `undefined`:**
| **Concept**  | **Undefined**  | **Null** |
|-------------|--------------|----------|
| Default value when a variable is declared but not assigned | ✅ Yes | ❌ No |
| Needs to be manually assigned | ❌ No | ✅ Yes |
| Type of value | `undefined` | `object` (weird JavaScript behavior) |

---

## **🕘 09:05 - Non-Primitive Data Types (Reference Types)**  
Unlike primitive types, non-primitive types store multiple values.  

### **1️⃣ Arrays (Ordered Collection of Values)**
- Stores multiple values in an **ordered list**.  
✅ **Example:**
```javascript
let multipleUsers = ["React JS", "JavaScript", "MongoDB", "Node JS"];

console.log(multipleUsers); // Output: ["React JS", "JavaScript", "MongoDB", "Node JS"]

console.log(multipleUsers[0]); // Output: React JS
console.log(multipleUsers[1]); // Output: JavaScript

console.log(multipleUsers.length); // Output: 4

console.log(multipleUsers[multipleUsers.length - 1]); // Output: Node JS
```
🔹 **Arrays store multiple items and can be accessed using indexes.**  
- **Indexing starts from `0`** → First element is `multipleUsers[0]`.

---

### **2️⃣ Objects (Key-Value Pairs)**
- Used to store structured data in **key-value** format.  

✅ **Example:**
```javascript
let vehicle = {
    vehicleType: "Four Wheeler",
    brand: "Hyundai",
    price: 1000000,
    fuelType: "Petrol"
};

console.log(vehicle);

// Access specific properties
console.log(vehicle.price);  // Output: 1000000
console.log(vehicle.brand);  // Output: Hyundai
```
🔹 **Key Points:**
- **Objects are useful for storing multiple related properties together.**
- Properties are accessed using `objectName.propertyName`.

---

## **🕘 07:55 - Comments in JavaScript**
Comments are used to write **notes inside the code**. They are **ignored by JavaScript** during execution.

### **1️⃣ Single-line Comments (`//`)**
✅ **Example:**
```javascript
// This is a single-line comment
console.log("Hello World");
```

### **2️⃣ Multi-line Comments (`/* ... */`)**
✅ **Example:**
```javascript
/*  
    This is a multi-line comment
    Used for explaining longer sections of code
*/
console.log("Hello World");
```
🔹 **Use Case:**  
- **Single-line comments** are for **quick explanations**.  
- **Multi-line comments** are for **detailed descriptions**.  

---

## **📂 Full Code Examples from Episode 7**  
### ✅ **index.js**
```javascript
// ************ Primitive Data Types ************

// Number
var num = 120;
var num = 1.25;

console.log(num); // Output: 1.25

// String
let userName = "Javascript is a scripting language";
userName = 'Javascript is a Single-threaded language';
userName = `ECMAScript`;

console.log(userName); // Output: ECMAScript

// Boolean
let condition = true;
condition = false;

console.log(condition); // Output: false

// Undefined
let noValue;
let nValue = undefined;

console.log(noValue, nValue); // Output: undefined undefined

// Null
let emptyValue = null;
console.log(emptyValue); // Output: null

// ************ Non-Primitive Data Types ************

// Arrays
let multipleUsers = ["React JS", "JavaScript", "MongoDB", "Node JS"];
console.log(multipleUsers); 
console.log(multipleUsers[0], multipleUsers[1], multipleUsers[2]); // Output: React JS JavaScript MongoDB
console.log(multipleUsers.length); // Output: 4
console.log(multipleUsers[multipleUsers.length - 1]); // Output: Node JS

// Objects
let vehicle = {
    vehicleType: "Four Wheeler",
    brand: "Hyundai",
    price: 1000000,
    fuelType: "Petrol"
};

console.log(vehicle);
console.log(vehicle.price);  // Output: 1000000
console.log(vehicle.brand);  // Output: Hyundai

// ************ Comments ************

// Single-line comment
// This is a JavaScript tutorial

/* 
    Multi-line comment
    Explains multiple lines of code
*/
```

---

## **🔹 Summary from Episode 7**  
✅ **Primitive Data Types:**  
- `Number`, `String`, `Boolean`, `Undefined`, `Null`  
✅ **Non-Primitive Data Types:**  
- `Array` (Ordered collection), `Object` (Key-Value pairs)  
✅ **Comments in JavaScript:**  
- `//` → Single-line comment  
- `/* ... */` → Multi-line comment  

---

# JavaScript Learning Notes - Episode 7: Datatypes in Javascript

**Based on YouTube Tutorial (Approx. 61 Episodes)**

**Topics Covered:**

* What is Datatypes
* how it is defined in other programming language
* Types of Datatypes overview
* Primitive Datatypes
* Single LIne & Multiline Comments
* Non-Primitive Datatypes

---

**🕘 00:00 - What is Datatypes**

* Data types classify the kind of data that a variable can hold.
* They define the possible values, operations that can be performed on the data, and how the data is stored in memory.

---

**🕘 00:10 - how it is defined in other programming language**

* In many statically-typed programming languages (e.g., Java, C++), you need to explicitly declare the data type of a variable when you create it. This is done at compile time, and the type of a variable is fixed.
* JavaScript, being a dynamically-typed language, determines the data type of a variable at runtime based on the value assigned to it. You don't need to explicitly declare the type. A variable can even hold values of different types during its execution.

---

**🕘 01:00 - Types of Datatypes overview**

* JavaScript data types are broadly categorized into two main groups:
    * **Primitive Data Types:** Represent single, immutable values.
    * **Non-Primitive (Reference) Data Types:** Can hold collections of values and are passed by reference.

---

**🕘 01:35 - Primitive Datatypes**

Primitive data types are fundamental and represent the simplest forms of data.

* **Number:** Represents numeric values, including integers and floating-point numbers.
    ```javascript
    var num = 120;
    var num = 1.25;
    console.log(num); // Output: 1.25 (last assigned value)
    ```

* **String:** Represents textual data, enclosed in single quotes (`'`), double quotes (`"`), or backticks (`` ` ``). Backticks allow for template literals (string interpolation).
    ```javascript
    let userName = "Javascript is a Scription Language";
    userName = 'Javascript is a Single threaded Language';
    userName = `ECMA Script`;
    console.log(num, userName); // Output: 1.25 ECMA Script
    ```

* **Boolean:** Represents a logical value, which can be either `true` or `false`.
    ```javascript
    let condition = true;
    condition = false;
    console.log(condition); // Output: false
    ```

* **Undefined:** Represents a variable that has been declared but has not been assigned a value.
    ```javascript
    let noValue;
    let nValue = undefined;
    console.log(noValue, nValue); // Output: undefined undefined
    ```

* **Null:** Represents the intentional absence of a value. It's a special value that indicates that a variable should not have any value.
    ```javascript
    let emptyValue = null;
    console.log(emptyValue); // Output: null
    ```

---

**🕘 07:55 - Single LIne & Multiline Comments**

Comments are used to add explanatory notes to your code, making it more readable. They are ignored by the JavaScript interpreter.

* **Single-line comments:** Start with double slashes (`//`). Any text after `//` on the same line is considered a comment.
    ```javascript
    // This is a single-line comment
    let x = 10; // This is also a single-line comment
    ```

* **Multi-line comments:** Enclosed between `/*` and `*/`. All text within these delimiters, spanning multiple lines if needed, is considered a comment.
    ```javascript
    /*
        This is a
        multi-line comment.
        It can span across several lines.
    */
    ```

    ```javascript
    /*
        Multi Line Comment
        JavaScript
        React JS
    */
    ```

---

**🕘 09:05 - Non-Primitive Datatypes**

Non-primitive data types can hold collections of values and are often referred to as reference types because variables of these types store references (memory addresses) to the actual data.

* **Array:** An ordered collection of items (elements). Arrays in JavaScript can hold elements of different data types. Array elements are accessed using their index, starting from 0.
    ```javascript
    let multipleUsers = ["React JS", "JavaScript", "MongoDB", "Node JS"];
    console.log(multipleUsers); // Output: [ 'React JS', 'JavaScript', 'MongoDB', 'Node JS' ]
    console.log(multipleUsers[0], multipleUsers[1], multipleUsers[2]); // Output: React JS JavaScript MongoDB
    console.log(multipleUsers.length); // Output: 4 (number of elements in the array)
    console.log(multipleUsers[multipleUsers.length - 1]); // Output: Node JS (accessing the last element)
    ```

* **Object:** A collection of key-value pairs. Each value is associated with a key (which is typically a string). Objects are used to represent entities with properties and their corresponding values.
    ```javascript
    let vehicle = {
        vehicleType : "Four Wheeler",
        brand : "Hyundai",
        price : 1000000,
        fuelType: "Petrol"
    };
    console.log(vehicle);
    /*
    Output:
    {
      vehicleType: 'Four Wheeler',
      brand: 'Hyundai',
      price: 1000000,
      fuelType: 'Petrol'
    }
    */
    console.log(vehicle.price); // Output: 1000000 (accessing value by key)
    console.log(vehicle.brand); // Output: Hyundai
    ```

**Key Differences between Primitive and Non-Primitive Datatypes:**

* **Storage:** Primitive values are stored directly in the memory location associated with the variable. Non-primitive values are stored as references (addresses) to the actual data stored elsewhere in memory.
* **Mutability:** Primitive values are immutable; when you perform an operation that seems to modify a primitive value, you are actually creating a new value. Non-primitive values are mutable; you can change their properties or elements directly.
* **Comparison:** Primitive values are compared by their actual value. Non-primitive values are compared by reference; two objects or arrays are considered equal only if they refer to the exact same location in memory.

---