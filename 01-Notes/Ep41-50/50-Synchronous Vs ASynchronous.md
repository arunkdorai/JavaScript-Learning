# **JavaScript Learning Notes – Episode 50**

**Topic: Synchronous vs Asynchronous JavaScript**

---

## 🕰️ Synchronous vs Asynchronous

### 🔹 Synchronous
- Executes code **line by line**.
- Blocks further execution until current task is complete.
- Example: `console.log()`, normal function calls.

```js
function f1() { console.log("First"); }
function f2() { console.log("Second"); }
function f3() { console.log("Third"); }

f1();
f2();
f3();

// Output:
// First
// Second
// Third
```

### 🔸 Asynchronous
- Allows **non-blocking** code execution.
- Code continues running while waiting for an asynchronous task to complete (like a timer, API request, etc.).

```js
function f1() { console.log("First"); }
function f2() { console.log("Second"); }
function f3() { console.log("Third"); }

f1();
setTimeout(f2, 2000); // Executes after 2 seconds
f3();

// Output:
// First
// Third
// Second (after 2 seconds)
```

---

## ⚙️ How Async Works in JS

### 1. **Call Stack**
- Handles synchronous operations.
- Executes one function at a time (Last In, First Out - LIFO).

### 2. **Web APIs**
- Provided by the browser (not JS itself).
- Handles asynchronous tasks like `setTimeout()`, DOM events, AJAX.

### 3. **Callback Queue**
- Stores **macrotasks** like:
  - `setTimeout()`
  - `setInterval()`
  - DOM events

### 4. **Microtask Queue**
- Stores **microtasks** like:
  - `Promises`
  - `queueMicrotask()`

### 5. **Event Loop**
- Constantly checks:
  - Is the Call Stack empty?
  - If yes, pushes the first task from **Microtask Queue**, then from **Callback Queue**.

---

## 🔄 Task Priority

| Task Type        | Queue Name        | Priority |
|------------------|-------------------|----------|
| `Promise`        | Microtask Queue   | ✅ High     |
| `setTimeout`     | Macrotask Queue   | ⏳ Low      |
| `setInterval`    | Macrotask Queue   | ⏳ Low      |

---

## 🧠 Recap with Flow
```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout"); // Goes to Callback Queue
}, 0);

Promise.resolve().then(() => {
  console.log("Promise"); // Goes to Microtask Queue
});

console.log("End");
```

### 🧾 Output:
```
Start
End
Promise
Timeout
```

✅ `Promise` runs **before** `setTimeout`, even with 0 ms delay, due to microtask priority.

---

## 📌 Summary

| Concept        | Synchronous                     | Asynchronous                              |
|----------------|----------------------------------|-------------------------------------------|
| Execution      | Blocking                         | Non-blocking                              |
| Examples       | Function calls, logs             | setTimeout, fetch, event listeners        |
| Engine Flow    | Line-by-line                     | Uses Web APIs, Event Loop, Queues         |
| Code Example   | `f1(); f2();`                    | `setTimeout(f2, 2000);`                   |

---




# JavaScript Learning Notes - Episode 50: Synchronous Vs ASynchronous



**Topics Covered:**

* Overview of Synchronous and Asynchronous JavaScript
* Synchronous JavaScript example (blocking execution)
* Introduction to `setTimeout()` for asynchronous behavior
* Explanation of the Call Stack
* Introduction to Web APIs (in browser environments)
* Introduction to the Callback Queue (Task Queue)
* Explanation of the Event Loop and its role in handling asynchronous tasks
* Introduction to Micro Task Queue and Macro Task Queue (Task Queue) and their priorities

---

**👉 00:10 - Overview of Synchronous & Asynchronous**

* **Synchronous:** In a synchronous model, tasks are executed one after another in a sequential order. Each operation must complete before the next one can start. This can lead to blocking if a task takes a long time, as the entire program will wait for it to finish.
* **Asynchronous:** In an asynchronous model, tasks can be started, and the program can continue executing other tasks without waiting for the initial task to complete. When the asynchronous task finishes, it notifies the program, and its result is processed. This prevents blocking and allows for more responsive applications, especially for operations like network requests, file I/O, and timers.

**👉 00:45 - Synchronous Js example**

* The provided code demonstrates synchronous JavaScript execution:

```javascript
// Synchronous JS

function f1() {
  console.log("First");
}
function f2() {
  console.log("Second");
}
function f3() {
  console.log("Third");
}

f1(); // "First" is logged immediately
f2(); // "Second" is logged immediately after f1 completes
f3(); // "Third" is logged immediately after f2 completes
```

* In this synchronous flow, `f1()`, `f2()`, and `f3()` are executed in the order they appear. The program waits for each function to finish its execution before moving to the next.

**👉 02:20 - `setTimeout()`**

* `setTimeout()` is a Web API function (provided by the browser environment, or similar environments like Node.js) that allows you to execute a function or a code snippet once after a specified delay (in milliseconds). It introduces asynchronous behavior.

```javascript
function f1() {
  console.log("First");
}
function f2() {
  console.log("Second");
}
function f3() {
  console.log("Third");
}

f1();                     // "First" is logged immediately
setTimeout(f2, 2000);   // f2 is scheduled to be executed after 2000 milliseconds (2 seconds)
f3();                     // "Third" is logged immediately after f1 and the scheduling of f2
```

* In this asynchronous example:
    1. `f1()` executes and "First" is logged.
    2. `setTimeout(f2, 2000)` schedules `f2` to be executed after a 2-second delay. Importantly, `setTimeout` itself finishes almost immediately, and the JavaScript engine doesn't wait for the timer.
    3. `f3()` executes and "Third" is logged.
    4. After 2 seconds, the timer expires, and `f2` is eventually executed, logging "Second".

* The output will be:
  ```
  First
  Third
  (after 2 seconds) Second
  ```

**👉 05:46 - Call Stack**

* The **Call Stack** is a data structure that JavaScript uses to keep track of the execution of functions. When a function is called, it's pushed onto the stack. When the function finishes executing, it's popped off the stack. JavaScript is single-threaded, meaning it has only one call stack, and therefore, it can do only one thing at a time.

* In the synchronous example, `f1`, `f2`, and `f3` are pushed onto and popped off the call stack sequentially.

* In the asynchronous example with `setTimeout`:
    1. `f1` is pushed, executed, and popped.
    2. `setTimeout` is pushed, executed (which starts a timer in the Web API environment), and popped. The callback function `f2` is registered to be executed later.
    3. `f3` is pushed, executed, and popped.

**👉 07:10 - Web API**

* **Web APIs** are a set of functionalities provided by web browsers (or similar environments) that are accessible to JavaScript. These APIs allow JavaScript to interact with the outside world and perform tasks that the single-threaded JavaScript engine cannot handle efficiently or in a non-blocking way, such as:
    * Timers (`setTimeout`, `setInterval`)
    * DOM manipulation
    * Event handling
    * HTTP requests (`fetch`, `XMLHttpRequest`)
    * Geolocation
    * Local Storage

* When an asynchronous operation like `setTimeout` is initiated in JavaScript, the browser's Web API handles the timer in the background, without blocking the main JavaScript thread (the call stack).

**👉 07:22 - Callback Queue (Task Queue)**

* The **Callback Queue** (also known as the Task Queue or Message Queue) is a queue data structure where callback functions of completed asynchronous operations are placed. For example, when the timer set by `setTimeout` expires, the callback function (`f2` in the example) is moved from the Web API environment to the Callback Queue.

**👉 08:06 - Event Loop**

* The **Event Loop** is the mechanism that allows JavaScript to be non-blocking despite being single-threaded. It constantly monitors two things:
    1. The **Call Stack:** If the call stack is empty.
    2. The **Callback Queue:** If there are any functions waiting to be executed.

* **How it works:**
    1. The Event Loop continuously checks if the Call Stack is empty.
    2. If the Call Stack is empty and there are callbacks in the Callback Queue, the Event Loop takes the first callback from the queue and pushes it onto the Call Stack for execution.
    3. This process repeats.

* In the `setTimeout` example:
    1. Initially, the call stack has `f1`, then `setTimeout`, then `f3`, all executed and popped. The call stack becomes empty.
    2. After 2 seconds, the `f2` callback is moved to the Callback Queue.
    3. The Event Loop sees that the Call Stack is empty and the Callback Queue has `f2`.
    4. The Event Loop takes `f2` from the queue and pushes it onto the Call Stack for execution, which logs "Second".

**👉 11:36 - Micro Task Queue & Macro Task Queue**

* To further manage the priority of asynchronous tasks, JavaScript uses two types of queues:
    * **Micro Task Queue:** This queue has a higher priority than the Macro Task Queue. Microtasks are typically related to promises and `MutationObserver`. Promises' `then`, `catch`, and `finally` handlers are queued as microtasks.
    * **Macro Task Queue:** This queue (which is what was referred to as the Callback Queue earlier) is used for other asynchronous tasks like `setTimeout`, `setInterval`, `setImmediate` (Node.js), and I/O operations.

* **Event Loop with Micro and Macro Task Queues:**
    1. When the Call Stack is empty, the Event Loop first checks the Micro Task Queue.
    2. If there are any microtasks, they are executed one by one until the Micro Task Queue is empty.
    3. Only after the Micro Task Queue is empty does the Event Loop check the Macro Task Queue.
    4. If there are any macrotasks, the first one is moved to the Call Stack for execution.
    5. After a macrotask is executed and the Call Stack becomes empty again, the process repeats, starting with checking the Micro Task Queue.

* **Priority:** Microtasks have higher precedence over macrotasks. This means that if both queues have tasks waiting, all microtasks will be executed before the next macrotask is taken from the Macro Task Queue.

* **Example (Conceptual):**

```javascript
console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve().then(() => console.log("Promise 1"));

setTimeout(() => console.log("Timeout 2"), 0);

Promise.resolve().then(() => console.log("Promise 2"));

console.log("End");

// Expected Output:
// Start
// End
// Promise 1
// Promise 2
// Timeout 1
// Timeout 2

// Explanation:
// 1. "Start" is logged (synchronous).
// 2. The first setTimeout callback is queued as a macrotask.
// 3. The first Promise resolution callback is queued as a microtask.
// 4. The second setTimeout callback is queued as a macrotask.
// 5. The second Promise resolution callback is queued as a microtask.
// 6. "End" is logged (synchronous).
// 7. The Call Stack is now empty. The Event Loop first processes the Micro Task Queue, executing "Promise 1" and then "Promise 2".
// 8. After the Micro Task Queue is empty, the Event Loop takes the first macrotask ("Timeout 1") from the Macro Task Queue, executes it.
// 9. Then, it takes the second macrotask ("Timeout 2") and executes it.
```

---