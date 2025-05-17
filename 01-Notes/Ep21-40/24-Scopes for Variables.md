# **JavaScript Learning Notes - Episode 24**  

---

## **Topics Covered:**  
- **Introduction to Scopes in JavaScript**  
- **Function Scope (var) vs Block Scope (let, const)**  
- **Global Scope**  
- **Global vs Local Variables**  
- **Scope Chain**  

---

## **🕘 00:09 - Introduction to Scope in JavaScript**  

✅ **Definition:**  
- **Scope** determines where a variable can be accessed in the code.  
- There are three main types of scopes in JavaScript:  
  1. **Global Scope** – Variables accessible anywhere in the program.  
  2. **Function Scope** – Variables declared inside a function are accessible only within that function.  
  3. **Block Scope** – Variables declared inside a block `{}` are accessible only within that block.  

---

## **🕘 00:50 - Function Scope (`var`)**  

🚀 **`var` is function-scoped, meaning:**  
- A `var` variable **declared inside a function** is only accessible inside that function.  
- A `var` variable **declared inside a block** `{}` is still accessible outside the block.  

### **📌 Example: Function Scope (`var`)**  

```javascript
function outerFunction() {
    if (true) {
        var functionVar = "I'm a Variable";
        console.log(functionVar); // ✅ Accessible here
    }
    console.log(functionVar); // ✅ Still accessible here (not block-scoped)
}

outerFunction();
console.log(functionVar); // ❌ Error: functionVar is not defined (function-scoped)
```

✔ `var` variables inside a **function** are **not accessible outside** the function.  
✔ But inside the function, they ignore block `{}` boundaries.  

---

## **🕘 02:12 - Block Scope (`let`, `const`)**  

🚀 **`let` and `const` are block-scoped, meaning:**  
- They are **only accessible within the block `{}`** in which they are declared.  

### **📌 Example: Block Scope (`let` and `const`)**  

```javascript
function blockScoped() {
    if (true) {
        let blockVariable = "I'm a Block scoped variable";
        console.log(blockVariable); // ✅ Accessible inside block
    }
    console.log(blockVariable); // ❌ Error: blockVariable is not defined
}

blockScoped();
```

✔ **`let` and `const` are only accessible inside the block `{}` where they are declared.**  
✔ Trying to access them outside the block results in an **error**.  

---

## **🕘 06:17 - Global Scope**  

🚀 **A variable is in the global scope if it is declared outside any function or block.**  
- Global variables can be accessed **anywhere** in the program.  

### **📌 Example: Global Scope**  

```javascript
var globalScopedVar = "I'm accessible throughout the global context";
let blockScoped = "I'm a let variable";
const blockScoped1 = "I'm a const variable";

console.log(globalScopedVar); // ✅ Accessible
console.log(blockScoped); // ✅ Accessible
console.log(blockScoped1); // ✅ Accessible

// Accessing global variable using window object
console.log(window.globalScopedVar); // ✅ Works for var
console.log(window.blockScoped); // ❌ Undefined (let & const are not in window object)
console.log(window.blockScoped1); // ❌ Undefined
```

✔ `var` variables become properties of the `window` object in browsers.  
✔ `let` and `const` **do not become window properties** and are not accessible via `window.variableName`.  

---

## **🕘 11:15 - Global vs Local Variables**  

🚀 **Local variables override global variables inside functions.**  
- If a local variable has the same name as a global variable, JavaScript **uses the local variable inside the function**.  

### **📌 Example: Local vs Global Variable**  

```javascript
var a = 10;
let b = 20;
const c = 30;

function accessGlobalLocalVar() {
    var a = 101; // Local variable (overrides global `a`)
    let b = 201; // Local variable (overrides global `b`)
    const c = 301; // Local variable (overrides global `c`)

    function innerFunction() {
        var a = 100;
        let b = 200;
        const c = 300;
        console.log(a, b, c); // Output: 100 200 300
    }

    innerFunction();
    console.log(a, b, c); // Output: 101 201 301
}

accessGlobalLocalVar();
console.log(a, b, c); // Output: 10 20 30 (Global scope remains unchanged)
```

✔ JavaScript **first checks local scope**, then moves outward to the global scope.  

---

## **🕘 Scope Chain**  

🚀 **Scope Chain:**  
- If a variable is **not found in the current scope**, JavaScript **looks in the outer scopes** until it finds the variable or reaches the global scope.  

### **📌 Example: Scope Chain**  

```javascript
var globalVar = "I'm Global";

function outerFunction() {
    var outerVar = "I'm in Outer Function";

    function innerFunction() {
        var innerVar = "I'm in Inner Function";
        console.log(innerVar); // ✅ Found in innerFunction scope
        console.log(outerVar); // ✅ Found in outerFunction scope (via scope chain)
        console.log(globalVar); // ✅ Found in global scope (via scope chain)
    }

    innerFunction();
}

outerFunction();
```

✔ **If JavaScript doesn’t find a variable in the current scope, it looks in parent scopes.**  
✔ This is called **Scope Chain Resolution**.  

---

## **🔹 Summary from Episode 24**  
✅ **Global Scope** → Variables declared outside any function/block. Accessible everywhere.  
✅ **Function Scope (`var`)** → Variables declared with `var` inside a function are only accessible within that function.  
✅ **Block Scope (`let`, `const`)** → Variables declared with `let` or `const` inside a block `{}` are only accessible within that block.  
✅ **Global vs Local Variables** → Local variables override global ones inside functions.  
✅ **Scope Chain** → JavaScript looks for variables in **inner to outer scopes** until it reaches the global scope.  

---



# JavaScript Learning Notes - Episode 24: Scopes for variables in Javascript



**Topics Covered:**

* Introduction to Scope
* `var` - function scope
* `let`, `const` - block scope
* Global Scope
* Global Variable & Local Variable

---

**🕘 00:09 - Introduction to Scope**

* **Scope** in JavaScript refers to the accessibility or visibility of variables and functions in different parts of your code.
* It determines where you can access and use a particular variable or function.
* Understanding scope is crucial for writing well-organized and bug-free JavaScript code.

---

**🕘 00:50 - `var` - function scope**

* Variables declared with the `var` keyword have **function scope**.
* This means that a `var` variable declared inside a function is only accessible within that function and any nested functions.
* If a `var` variable is declared outside any function, it has **global scope**.

```javascript
function outerFunction() {
  if (true) {
    var functionVar = "I'm a Variable";
    console.log(functionVar); // Accessible here
  }
  console.log(functionVar); // Also accessible here due to function scope
}
outerFunction(); // Output: I'm a Variable \n I'm a Variable
```

* In this example, `functionVar` is declared inside the `if` block using `var`, but because `var` has function scope, it is accessible throughout the entire `outerFunction`.

---

**🕘 02:12 - `let`, `const` - block scope**

* Variables declared with the `let` and `const` keywords have **block scope**.
* This means that a `let` or `const` variable is only accessible within the block of code (defined by curly braces `{}`) where it is declared. This includes `if` statements, `for` loops, and any other block.

```javascript
function blockScoped() {
  if (true) {
    let blockVariable = "I'm a let variable";
    console.log(blockVariable); // Accessible here
  }
  // console.log(blockVariable); // Error: blockVariable is not defined here
}
blockScoped(); // Output: I'm a let variable \n (Error will occur if the commented line is uncommented)

function blockScopedConst() {
  if (true) {
    const blockVariable1 = "I'm a const variable";
    console.log(blockVariable1); // Accessible here
  }
  // console.log(blockVariable1); // Error: blockVariable1 is not defined here
}
blockScopedConst(); // Output: I'm a const variable \n (Error will occur if the commented line is uncommented)
```

* In both `blockScoped` and `blockScopedConst` functions, the `let` and `const` variables are only accessible within the `if` block where they are declared. Trying to access them outside this block results in an error.

---

**🕘 06:17 - Global Scope**

* Variables declared outside of any function or block have **global scope**.
* Global variables can be accessed from anywhere in your JavaScript code, including inside functions.

```javascript
var globalScopedVar = "I'm accessible through the global context (var)";
let blockScopedLet = "I'm a let variable in global scope";
const blockScopedConst = "I'm a const variable in global scope";

console.log(globalScopedVar); // Output: I'm accessible through the global context (var)
console.log(blockScopedLet); // Output: I'm a let variable in global scope
console.log(blockScopedConst); // Output: I'm a const variable in global scope

function accessGlobals() {
  console.log(globalScopedVar);
  console.log(blockScopedLet);
  console.log(blockScopedConst);
}
accessGlobals();
/*
Output:
I'm accessible through the global context (var)
I'm a let variable in global scope
I'm a const variable in global scope
I'm accessible through the global context (var)
I'm a let variable in global scope
I'm a const variable in global scope
*/
```

* In a browser environment, global `var` variables are added as properties to the `window` object. Global `let` and `const` variables are also in the global scope but are not added as direct properties of the `window` object (although they are still accessible through the global scope).

```javascript
var globalVarWindow = "I'm a global var on window";
let globalLetWindow = "I'm a global let (not directly on window)";
const globalConstWindow = "I'm a global const (not directly on window)";

console.log(window.globalVarWindow); // Output: I'm a global var on window
console.log(window.globalLetWindow); // Output: undefined
console.log(window.globalConstWindow); // Output: undefined
```

---

**🕘 11:15 - Global Variable & Local Variable**

* **Global Variable:** A variable declared in the global scope (outside any function or block). It is accessible from anywhere in the code.
* **Local Variable:** A variable declared within a function (using `var`, `let`, or `const`) or within a block (using `let` or `const`). It is only accessible within that function or block.

```javascript
var a = 10; // Global variable
let b = 20; // Global variable
const c = 30; // Global variable

function accessGloblaLocalVar() {
  var a = 101; // Local variable (shadows the global 'a')
  let b = 201; // Local variable (shadows the global 'b')
  const c = 301; // Local variable (shadows the global 'c')

  function innerFunction() {
    var a = 100; // Local to innerFunction
    let b = 200; // Local to innerFunction
    const c = 300; // Local to innerFunction
    console.log("Inside innerFunction:", a, b, c); // Output: Inside innerFunction: 100 200 300
  }
  innerFunction();
  console.log("Inside outerFunction:", a, b, c); // Output: Inside outerFunction: 101 201 301
}
accessGloblaLocalVar();
console.log("In global scope:", a, b, c); // Output: In global scope: 10 20 30
```

* **Shadowing:** When a local variable has the same name as a global variable, the local variable takes precedence within its scope. The global variable is "shadowed" and cannot be directly accessed by its name within that local scope.

**Scope Chain:** JavaScript uses a mechanism called the **scope chain** to determine which variables are accessible in a particular part of the code. When JavaScript tries to access a variable, it first looks in the current scope. If the variable is not found there, it moves up to the outer (enclosing) scope, and so on, until it reaches the global scope. If the variable is not found in the global scope, a `ReferenceError` occurs.

**Best Practices:**

* Use `let` and `const` for variable declarations whenever possible, as their block scope helps prevent variable hoisting issues and makes your code more predictable.
* Minimize the use of global variables to avoid potential naming conflicts and make your code more modular.
* Be mindful of variable shadowing, as it can sometimes lead to confusion if not managed carefully.

---