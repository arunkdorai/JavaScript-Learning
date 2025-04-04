# **JavaScript Learning Notes - Episode 29**  

**Topic: Generator Functions in JavaScript**  

---

## **🕘 Timestamps Covered**
- **00:10** - Flow of generator  
- **00:55** - Example  
- **03:10** - Accessing values in generator  
- **08:38** - Example  

---

## **🔄 What is a Generator Function?**

A **generator function** is a special type of function in JavaScript that:
- **Can pause** its execution using `yield`
- **Can resume** where it left off
- **Returns an iterator** object when invoked

---

## **🧠 Key Concepts**
| Concept | Description |
|--------|-------------|
| `function*` | Declares a generator function |
| `yield` | Pauses execution and sends a value |
| `.next()` | Resumes execution and returns an object `{ value, done }` |
| `done` | `false` until the generator is finished, then `true` |

---

## **⚙️ How It Works**

```javascript
function* generatorFunction() {
    yield "First val";
    yield "Second val";
    yield "Third val";
    return "Final Val";
}

let generator = generatorFunction();

console.log(generator.next());      // { value: "First val", done: false }
console.log(generator.next().value); // "Second val"
console.log(generator.next().done);  // false
console.log(generator.next());       // { value: "Final Val", done: true }
console.log(generator.next());       // { value: undefined, done: true }
```

📝 **Note**:
- After the `return`, `done` becomes `true`.
- Once all `yield` statements are done, `.next()` returns `{ value: undefined, done: true }`.

---

## **⛓ Use Case Example**

### 📦 Example 2 - Building URL with Generator
```javascript
function* url() {
    yield "https:/";
    yield "www.google.com";
    yield "homePage";
}

let origin1 = url();

console.log(origin1.next().value); // https:/
console.log(origin1.next().value); // www.google.com
console.log(origin1.next().value); // homePage
console.log(origin1.next());       // { value: undefined, done: true }
```

---

## ✅ Why Use Generator Functions?

✔ They allow **pausable execution**  
✔ Ideal for working with **streams** or **sequential data**  
✔ Useful in **asynchronous workflows**  
✔ Simplify the handling of **iterative or lazy-loaded data**

---

## 🔄 Comparison with Regular Function

| Regular Function | Generator Function |
|------------------|--------------------|
| Runs fully when called | Runs step-by-step with `.next()` |
| Cannot pause/resume | Can pause using `yield` |
| Returns a value once | Can return multiple values over time |

---

## 🧪 Practice Ideas:
- Create a generator that yields numbers from 1 to 5  
- Build a generator that breaks a string into words  
- Use generators in async data fetching (advanced)

---

## ✅ Summary

- Use `function*` to define a generator
- Use `yield` to pause and `next()` to resume
- Generator functions help manage **sequences**, **asynchronous code**, and **data streams** efficiently

---




# JavaScript Learning Notes - Episode 29: Generator Function in Javascript



**Topics Covered:**

* Flow of generator
* Example of basic generator function
* Accessing Values in generator using `next()`
* Example of a practical generator function

---

**Introduction to Generator Functions**

* A **generator function** in JavaScript is a special type of function that can pause its execution and resume later, allowing it to produce a sequence of values over time.
* They are defined using the `function*` syntax.
* The `yield` keyword is used within a generator function to pause its execution and return a value to the caller. The state of the function is saved, so it can be resumed from where it left off.

**🕘 00:10 - Flow of generator**

1. **Invocation:** When a generator function is called, it does not execute its body immediately. Instead, it returns a special object called a **generator object** (which is also an iterator).
2. **`next()` Method:** The generator object has a `next()` method. When `next()` is called:
   - The generator function's execution starts (or resumes if it was paused).
   - It continues until it encounters a `yield` keyword.
   - The expression after `yield` is evaluated, and an object is returned by `next()` with two properties:
     - `value`: The yielded value.
     - `done`: A boolean indicating whether the generator has finished yielding all its values (`true` if done, `false` otherwise).
   - The generator function's state is saved, including the values of local variables and the current execution point.
3. **Resumption:** Subsequent calls to `next()` resume the generator function's execution from the point immediately after the `yield` statement where it last paused.
4. **`return` Statement:** If the generator function encounters a `return` statement, the `done` property of the object returned by `next()` will be set to `true`, and the `value` property will contain the value specified in the `return` statement (if any). Once `done` is `true`, further calls to `next()` will not execute any more of the generator's code and will return `{ value: undefined, done: true }`.

**🕘 00:55 - Example of basic generator function**

```javascript
function* generatorFunction() {
  yield "First val";
  yield "Second val";
  yield "Third val";
  return "Final Val";
}

let generator = generatorFunction();
```

* Here, `generatorFunction` is a generator function. When called, it returns a generator object, which is stored in the `generator` variable.

**🕘 03:10 - Accessing Values in generator**

```javascript
console.log(generator.next());
// Output: { value: 'First val', done: false }
console.log("I'm executing after first yield statement");
// Output: I'm executing after first yield statement
console.log(generator.next().value);
// Output: Second val
console.log("I'm executing after second yield statement");
// Output: I'm executing after second yield statement
console.log(generator.next().done);
// Output: false
console.log(generator.next());
// Output: { value: 'Final Val', done: true }
console.log(generator.next());
// Output: { value: undefined, done: true }
```

* **`generator.next()` (first call):** Execution starts at the beginning of `generatorFunction` and runs until the first `yield "First val";`. It returns an object where `value` is `"First val"` and `done` is `false` (because there are more `yield` statements).
* **`console.log("I'm executing after first yield statement");`:** This line outside the generator is executed.
* **`generator.next().value` (second call):** Execution resumes after the first `yield`. It continues to the next `yield "Second val";`. `generator.next()` returns `{ value: 'Second val', done: false }`, and we access its `value` property.
* **`console.log("I'm executing after second yield statement");`:** This line outside the generator is executed.
* **`generator.next().done` (third call):** Execution resumes after the second `yield`. It continues to the third `yield "Third val";`. `generator.next()` returns `{ value: 'Third val', done: false }`. We access its `done` property, which is `false`.
* **`generator.next()` (fourth call):** Execution resumes after the third `yield`. It reaches the `return "Final Val";` statement. This causes `next()` to return an object where `value` is `"Final Val"` and `done` is `true`, indicating that the generator has finished.
* **`generator.next()` (fifth call):** Since the generator has already finished (done is `true`), any subsequent calls to `next()` will return `{ value: undefined, done: true }`.

**Key Concepts:**

* **`function*`:** The syntax for declaring a generator function.
* **`yield`:** Pauses the generator function's execution and returns the value that follows it.
* **Generator Object (Iterator):** The object returned by calling a generator function. It has a `next()` method.
* **`next()`:** Executes the next segment of the generator function (until the next `yield` or `return`) and returns an object with `value` and `done` properties.
* **`done: false`:** Indicates that the generator has more values to yield.
* **`done: true`:** Indicates that the generator has finished yielding values. The `value` property in this case might contain the return value of the generator function.

**🕘 08:38 - Example of a practical generator function**

```javascript
function* url() {
  yield "https:/";
  yield "[www.google.com](https://www.google.com)";
  yield 'homePage';
}

let origin1 = url();

console.log(origin1.next().value); // Output: https:/
console.log(origin1.next().value); // Output: [www.google.com](https://www.google.com)
console.log(origin1.next().value); // Output: homePage
console.log(origin1.next());       // Output: { value: undefined, done: true }
```

* This example demonstrates how a generator function can be used to produce a sequence of parts of a URL. Each call to `origin1.next().value` retrieves the next part of the URL. Once all `yield` statements have been executed, subsequent calls to `next()` will have `done` as `true` and `value` as `undefined`.

**Use Cases for Generator Functions:**

* **Iterating over custom data structures.**
* **Implementing iterators and iterables.**
* **Simplifying asynchronous code (when used with `async`/`await`).**
* **Generating sequences of values on demand, which can be memory-efficient for large or infinite sequences.**
* **Implementing cooperative multitasking or coroutines.**

---