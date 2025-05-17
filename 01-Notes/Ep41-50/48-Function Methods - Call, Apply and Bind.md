# **JavaScript Learning Notes – Episode 48**

**Topic: Function Methods – `call()`, `apply()`, & `bind()`**

---

## 🧠 **What are Function Methods?**

Function methods in JavaScript allow us to **control the execution context** of functions — specifically the value of `this` inside a function.

---

## 👀 Understanding `this` Context

### 🔹 In **Regular Functions**
`this` refers to the object **calling the function**.

```js
let employee = {
  eName: "Arun",
  eSalary: 1000,
  introYourself: function (a, b) {
    console.log(a + b, this.eName);
  },
};

employee.introYourself(4, 8); // 12 Arun
```

### 🔹 In **Arrow Functions**
`this` refers to the **lexical scope** (where the function was defined), not the calling object.

```js
let employee1 = {
  eName: "Arun",
  eSalary: 1000,
  introYourself: (a, b) => {
    console.log(a + b, this.eName); // ❌ `this` does NOT refer to employee1
  },
};

employee1.introYourself(10, 20); // 30 undefined
```

---

## 📞 `call()` Method

> Calls a function with a **specified `this` value**, and arguments provided one by one.

```js
let person = {
  pFName: "Walt",
  pLName: "Disney",
};

let person1 = {
  pId: "UQI123",
  pFName: "James",
  pLName: "Bond",
  introYourself: function (a, b) {
    console.log(this.pFName + " " + this.pLName + " " + (a + b));
  },
};

person1.introYourself.call(person, 10, 20);
// Output: Walt Disney 30
```

---

## 📦 `apply()` Method

> Same as `call()`, but arguments are passed as an **array**.

```js
person1.introYourself.apply(person, [100, 200]);
// Output: Walt Disney 300
```

---

## 🔗 `bind()` Method

> Creates a **new function** with a permanently bound `this` and optional preset arguments.

```js
let newFun = person1.introYourself.bind(person, 500, 300);
console.log(newFun()); // Walt Disney 800
```

- `bind()` does **not call** the function immediately.
- It returns a new function you can call later.

---

## 🔁 Summary: `call` vs `apply` vs `bind`

| Method   | Executes Immediately | Pass Arguments        | Returns |
|----------|----------------------|------------------------|---------|
| `call()` | ✅ Yes                | Comma-separated        | Result  |
| `apply()`| ✅ Yes                | Array of arguments     | Result  |
| `bind()` | ❌ No                 | Comma-separated or preset | New Function |

---

## ✅ Real-world Tip:

Use `call`, `apply`, or `bind` when:
- Reusing a method across multiple objects
- Maintaining context in event listeners or callbacks
- Pre-setting parameters (partial application)

---




# JavaScript Learning Notes - Episode 48: Function Methods - Call, Apply & Bind in Javascript



**Topics Covered:**

* Overview of Function Methods (`call()`, `apply()`, `bind()`)
* The `this` context in regular (anonymous) functions
* The `this` context in arrow functions
* `call()` method (invoking a function with a specified `this` value and arguments passed individually)
* `apply()` method (invoking a function with a specified `this` value and arguments passed as an array)
* `bind()` method (creating a new function with a bound `this` value and optionally preset arguments)

---

**👉 00:10 - Overview of Function Methods**

* JavaScript functions have built-in methods (`call()`, `apply()`, `bind()`) that allow you to control how the function is executed and, most importantly, what the `this` keyword refers to within the function's scope.
* These methods are crucial for managing the execution context of functions, especially in object-oriented JavaScript and when dealing with callbacks.

**👉 04:24 - `this` Context in Anonymous Function (Regular Function)**

* In a regular (non-arrow) function, the value of `this` depends on how the function is called (its invocation context).
* When a regular function is called as a method of an object, `this` refers to that object.
* When a regular function is called on its own (not as a method), in non-strict mode, `this` usually refers to the global object (`window` in browsers, `global` in Node.js`). In strict mode, `this` is `undefined` in such cases.

```javascript
let employee = {
  eName: "Arun",
  eSalary: 1000,
  introYourself: function(a, b) {
    console.log(a + b, this.eName); // 'this' refers to the 'employee' object
  }
};

console.log(employee.eName);       // Output: Arun
employee.introYourself(4, 8);     // Output: 12 Arun

// Example of 'this' in a standalone function (in non-strict mode)
function standaloneFunction() {
  console.log(this); // 'this' will be the global object (window in browser)
}
standaloneFunction();
```

**👉 06:15 - `this` Context in Arrow Function**

* Arrow functions (`=>`) have a lexical `this` binding. They do not create their own `this` context. Instead, they inherit the `this` value from the surrounding scope (the scope where the arrow function is defined).

```javascript
// var eName = "Roger"; // Using var in global scope (for browser example)
let eName = "Roger";   // Using let in global scope

let employee1 = {
  eName: "Arun",
  eSalary: 1000,
  introYourself: (a, b) => {
    console.log(a + b, this.eName); // 'this' refers to the 'this' of the surrounding scope (global in this case)
  }
};

employee1.introYourself(10, 20); // Output: 30 Roger (not Arun)
```

* In the arrow function `introYourself` within `employee1`, `this` does not refer to `employee1`. It refers to the `this` of the surrounding global scope where `employee1` is defined, which is why it accesses the global `eName`.

**👉 11:10 - `call()` Method**

* The `call()` method allows you to invoke a function with a specified `this` value and arguments provided individually (separated by commas).

**Syntax:** `functionName.call(thisArg, arg1, arg2, ...)`

* `thisArg`: The value to be used as `this` when executing the function. If `thisArg` is `null` or `undefined`, in non-strict mode, `this` will be bound to the global object. In strict mode, it will be `null` or `undefined`.
* `arg1, arg2, ...`: Arguments that should be passed to the function.

```javascript
let person = {
  pFName: "Walt",
  pLName: "Disney"
};

let person1 = {
  pId: "UQI123",
  pFName: "James",
  pLName: "Bond",
  introYourself: function(a, b) {
    console.log(this.pFName + " " + this.pLName + " " + (a + b));
    return (a + b);
  }
};

person1.introYourself.call(person, 10, 20); // Output: Walt Disney 30
// Here, 'this' inside introYourself is bound to 'person', so it uses person.pFName and person.pLName.
```

**👉 18:36 - `apply()` Method**

* The `apply()` method is similar to `call()`. It also invokes a function with a specified `this` value. However, it takes arguments as a single array (or an array-like object).

**Syntax:** `functionName.apply(thisArg, [argsArray])`

* `thisArg`: The value to be used as `this`.
* `[argsArray]`: An array (or array-like object) containing the arguments to be passed to the function. If the function does not expect any arguments, you can pass `null` or an empty array `[]`.

```javascript
person1.introYourself.apply(person, [100, 200]); // Output: Walt Disney 300
// Again, 'this' is bound to 'person', and arguments are passed as an array.
```

**Key Difference between `call()` and `apply()`:**

* `call()` accepts arguments individually.
* `apply()` accepts arguments as a single array.

**👉 19:49 - `bind()` Method**

* The `bind()` method creates a **new function** that, when called, has its `this` keyword set to the provided value. You can also pass arguments to the bound function, which will be pre-filled whenever the bound function is called.

**Syntax:** `functionName.bind(thisArg, arg1, arg2, ...)`

* `thisArg`: The value to be used as `this` in the new function.
* `arg1, arg2, ...` (optional): Arguments to be pre-pended to any arguments provided when the new function is called.

```javascript
let newFun = person1.introYourself.bind(person, 500, 300);
console.log(newFun()); // Output: Walt Disney 800
// bind() creates a new function where 'this' is permanently set to 'person', and 500 and 300 are preset as arguments a and b.
```

* The `bind()` method does not invoke the original function immediately. It returns a new function that you can call later.

**Use Cases for `call()`, `apply()`, and `bind()`:**

* **Changing `this` context:** Useful when you want a function that is a method of one object to be executed in the context of another object.
* **Borrowing methods:** An object can "borrow" a method from another object without redefining it.
* **Setting `this` for callbacks:** When passing methods as callbacks (e.g., in event listeners or array methods), `bind()` can be used to ensure the callback has the desired `this` value.
* **Pre-setting arguments (with `bind()`):** You can create a new function with some of its arguments already filled in.

---