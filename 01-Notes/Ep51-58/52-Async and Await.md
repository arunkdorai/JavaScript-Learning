
---

## 📘 Episode 52 - **Async & Await in JavaScript**

---

### ✅ **What is `async` and `await`?**

`async` and `await` are **modern features** in JavaScript (introduced in ES8) that help write **asynchronous code** in a **synchronous-looking way**.

They are syntactic sugar over **Promises**, making code:
- More readable
- Easier to write and debug
- Better than chained `.then()` calls

---

### 🧠 **Why Use `async/await` Instead of `.then()`?**

- `.then()` leads to chaining → still readable, but not very linear.
- With `await`, code executes **top to bottom** like synchronous code.
- Easier to manage complex async flows (like fetching data, processing, then saving).

---

### 🧪 **Basic Syntax**

```js
async function myFunction() {
  try {
    let result = await somePromise();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
```

| Keyword | Purpose |
|---------|---------|
| `async` | Declares an asynchronous function that always returns a Promise |
| `await` | Pauses the execution of the function until the Promise is resolved/rejected |

---

### 🔍 **Code Walkthrough**

```js
let newPromise = new Promise((fulfilled, failure) => {
  let dataReceived = false;

  if (dataReceived) {
    fulfilled("Data Fetched Successfully");
  } else {
    throw new Error("Search Proper Data"); // Also triggers `catch`
  }
});

async function executePromise() {
  try {
    let message = await newPromise;

    let newMessage = await newPromise;

    console.log(message); // Won’t be called if error is thrown
    console.log(`Next Message: ${newMessage}`);
  } catch (error) {
    console.log(error.message); // Search Proper Data
  } finally {
    console.log("End");
  }
}

executePromise();

console.log("Last");
```

---

### 📂 **How Execution Works**

```text
Main Thread
↓
Calls async function → starts running
↓
Hits `await newPromise` → pauses until resolved/rejected
↓
If rejected → jumps to catch
↓
finally always runs
↓
Rest of the code continues in parallel (like `console.log("Last")`)
```

---

### ⚠️ **Common Mistakes to Avoid**

| Mistake | Explanation |
|--------|-------------|
| Using `await` outside an `async` function | Not allowed — `await` works **only inside async functions** |
| Forgetting `try...catch` block | Rejected promises will cause **uncaught errors** |
| Misunderstanding order of execution | `await` pauses execution of the `async` function, **not the whole program** |

---

### 🧱 `try...catch` in Async Functions

- Use to **handle rejected promises** or thrown errors
- `catch` block catches both `reject()` and `throw`

```js
try {
  let data = await getData();
} catch (err) {
  console.error(err.message);
}
```

---

### 🔥 Bonus: Explicit `Error` Object

Instead of calling `reject("Something went wrong")`, you can **throw an actual error**:

```js
throw new Error("Custom Error Message");
```

Why?  
- It provides a **stack trace**
- Makes error handling more precise and informative

---

### 🧠 Real-Life Analogy

Think of `async/await` like:
- You're **waiting in line** at a coffee shop.
- `await` is like standing in the queue.
- When your order is ready (Promise resolved), you move forward.
- If they run out of coffee (Promise rejected), you handle the situation (try...catch).

---

### ✅ Summary Table

| Feature       | Purpose / Use                                          |
|---------------|--------------------------------------------------------|
| `async`       | Declares an async function that returns a Promise      |
| `await`       | Pauses execution until the Promise is resolved         |
| `try...catch` | Handles any thrown errors or rejections                |
| `finally`     | Runs always, whether resolved or rejected              |
| `throw Error` | Use for creating explicit, stack-traceable errors      |

---

### 🧠 Interview Tips

- Explain the difference between async/await and Promise chaining
- Explain what happens if you forget `await`
- Be able to write a function with multiple `await` calls
- Know that `await` only blocks **inside the async function**, not the whole program

---




# JavaScript Learning Notes - Episode 52: Async & Await



**Topics Covered:**

* Overview of Async-Await in JavaScript
* Purpose of the `await` keyword
* Using `try...catch` for error handling with `async/await`
* Purpose of the `async` keyword
* Explicit Error Object in Promise

---

**👉 00:23 - Overview of Async-Await**

* `async` and `await` are keywords introduced in ECMAScript 2017 (ES8) that provide a more elegant and synchronous-looking way to work with asynchronous JavaScript code, particularly Promises.
* They are built on top of Promises and make asynchronous code easier to write, read, and understand by abstracting away some of the complexities of Promise chaining.
* `async/await` allows you to write asynchronous logic that resembles synchronous code, making it more intuitive.

**👉 04:15 - Purpose of `await` Keyword**

* The `await` keyword can only be used inside an `async` function.
* When `await` is placed before a Promise, it pauses the execution of the `async` function until that Promise settles (either resolves or rejects).
* If the Promise resolves, the `await` expression returns the resolved value.
* If the Promise rejects, the `await` expression will throw the rejection reason as an error (which can be caught using `try...catch`).

```javascript
let newPromise = new Promise((fulfilled, failure) => {
  let dataReceived = true; // Simulating an asynchronous operation

  if (dataReceived) {
    fulfilled("Data Fetched Successfully");
  } else {
    failure("Data Not Found");
  }
});

async function executePromise() {
  let message = await newPromise; // Pauses until newPromise resolves
  console.log(message);          // Will be executed after the Promise resolves
}

executePromise();
console.log("Last");

// Output (if dataReceived is true):
// Last
// Data Fetched Successfully
```

* In this example, the `executePromise` function pauses at the `await newPromise` line until `newPromise` resolves. Only then does it proceed to the `console.log(message)` line. The "Last" log might appear before the Promise result because `executePromise` itself is asynchronous.

**👉 10:15 - `try & catch`**

* To handle potential errors (Promise rejections) when using `await`, you should wrap the `await` expression in a `try...catch` block.
* If the awaited Promise rejects, the error will be caught in the `catch` block.

```javascript
let newPromise = new Promise((fulfilled, failure) => {
  let dataReceived = false; // Simulating a failed operation

  if (dataReceived) {
    fulfilled("Data Fetched Successfully");
  } else {
    failure("Data Not Found");
  }
});

async function executePromise() {
  try {
    let message = await newPromise;
    console.log(message);
  } catch (error) {
    console.log("Error: " + error); // Will catch the "Data Not Found" rejection
  } finally {
    console.log("End"); // Will always execute
  }
}

executePromise();
console.log("Last");

// Output (if dataReceived is false):
// Last
// Error: Data Not Found
// End
```

**👉 11:48 - `async` Keyword**

* The `async` keyword is used to define an asynchronous function.
* An `async` function implicitly returns a Promise.
    * If the function returns a regular value, JavaScript automatically wraps that value in a resolved Promise.
    * If the function throws an error, JavaScript automatically returns a rejected Promise.
    * If the function explicitly returns a Promise, that Promise will be the result of the `async` function.
* The primary purpose of `async` is to enable the use of the `await` keyword within the function body.

```javascript
async function greet() {
  return "Hello!"; // Returns Promise.resolve("Hello!") implicitly
}

greet().then(message => console.log(message)); // Output: Hello!

async function fetchData() {
  try {
    const result = await Promise.reject("Failed to fetch");
    return result;
  } catch (error) {
    throw new Error("Custom error: " + error); // Returns a rejected Promise
  }
}

fetchData().catch(error => console.log(error.message)); // Output: Custom error: Failed to fetch
```

**👉 17:00 - Explicit Error Object in Promise**

* It's good practice to reject Promises with an `Error` object (or an instance of a subclass of `Error`) to provide more context and information about the error.

```javascript
let newPromise = new Promise((fulfilled, failure) => {
  let dataReceived = false;

  if (dataReceived) {
    fulfilled("Data Fetched Successfully");
  } else {
    failure(new Error("Search Proper Data")); // Rejecting with an Error object
  }
});

async function executePromise() {
  try {
    let message = await newPromise;
    console.log(message);
  } catch (error) {
    console.log(error.message); // Accessing the error message from the Error object
  } finally {
    console.log("End");
  }
}

executePromise();
console.log("Last");

// Output (if dataReceived is false):
// Last
// Search Proper Data
// End
```

* By rejecting with `new Error("...")`, the `catch` block receives an `Error` object, allowing you to access properties like `message`, `name`, and `stack` for more detailed error handling.

**Benefits of Async/Await:**

* **Improved Readability:** Asynchronous code looks more like synchronous code, making it easier to follow the flow of execution.
* **Simplified Error Handling:** Uses standard `try...catch` blocks for handling both synchronous and asynchronous errors.
* **Easier Debugging:** Stepping through asynchronous code in a debugger becomes more straightforward.
* **Cleaner Code:** Reduces the verbosity and nesting associated with Promise chains.

**In Summary:**

* `async` declares an asynchronous function that implicitly returns a Promise.
* `await` pauses the execution of an `async` function until a Promise settles, returning the resolved value or throwing the rejection reason.
* Use `try...catch` to handle errors from awaited Promises.
* Reject Promises with `Error` objects for better error information.

---