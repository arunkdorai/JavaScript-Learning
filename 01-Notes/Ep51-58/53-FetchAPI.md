
---

## 📦 Episode 53 - **Fetch API in JavaScript**

---

### 🔍 What is Fetch API?

The **Fetch API** provides a modern, promise-based way to make **HTTP requests** from the browser. It is used to:
- Retrieve data (GET)
- Send data (POST, PUT)
- Delete data (DELETE)

✅ It **replaces older methods** like `XMLHttpRequest` with a **cleaner, simpler syntax**.

---

### 🌐 What is an API?

An **API (Application Programming Interface)** is a set of rules that allow two software applications to communicate.

For example:
- You → send request to server (API)
- Server → sends back response (JSON)

---

### 🚀 What is a REST API?

A **REST API** uses HTTP methods to perform actions on resources:
| HTTP Method | Purpose       |
|-------------|---------------|
| GET         | Retrieve data |
| POST        | Create data   |
| PUT/PATCH   | Update data   |
| DELETE      | Remove data   |

---

### 🧾 What is JSON?

**JSON (JavaScript Object Notation)** is a lightweight data format used to exchange data between client and server in a structured, human-readable format.

Example:
```json
{
  "name": "John",
  "age": 30
}
```

---

### 🧪 Fetch with Promises

```js
fetch("https://fakestoreapi.com/users/abcd", { method: "GET" })
  .then((response) => {
    if (!response.ok) {
      throw new Error("Data Not Found");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message); // "Data Not Found"
  });
```

#### ⚙️ Breakdown:

- `fetch(url, options)` returns a **Promise**
- `response.ok` checks HTTP status (true for 2xx codes)
- `response.json()` parses the response body as JSON
- `.catch()` handles **network or HTTP errors**

---

### ⚠️ Error Handling with Fetch

Fetch will only **reject the Promise** if there’s a **network error** (e.g., server down or bad internet).

➡️ You must **manually check** for unsuccessful HTTP statuses:
```js
if (!response.ok) {
  throw new Error("Something went wrong");
}
```

---

### 🧠 Fetch Using Async/Await

```js
async function fetchData() {
  try {
    let response = await fetch("https://fakestoreapi.com/users", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Data Not Found");
    }

    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

fetchData();
```

#### 💡 Why Use Async/Await?

- Makes code **look synchronous**
- Easier to read and debug
- Handles Promises **sequentially** using `await`

---

### ⚠️ Key Differences

| Feature             | Promise Chain (`.then()`) | `async/await` Syntax        |
|---------------------|---------------------------|-----------------------------|
| Readability         | Can get nested            | Clean and readable          |
| Error Handling      | `.catch()`                | `try...catch` block         |
| Execution Flow      | Chained steps             | Step-by-step, like sync     |

---

### 🔥 Real-Life Use Cases

- Fetching products list from API
- Submitting form data to a backend
- Updating user profile
- Loading JSON data from external sources

---

### 📌 Summary Table

| Concept              | Description |
|----------------------|-------------|
| `fetch()`            | Performs HTTP request, returns a Promise |
| `response.ok`        | True if response status is in 200–299 |
| `response.json()`    | Converts response body into JavaScript object |
| `.then()`/`.catch()` | Handles success/failure with Promises |
| `async/await`        | Syntactic sugar for Promises |
| `try...catch`        | Handles errors in async/await |

---

### ✅ Interview Prep Checklist

- Explain the Fetch API and how it differs from `XMLHttpRequest`
- Write code using both `.then()` and `async/await`
- Handle errors correctly using `response.ok` and `try...catch`
- Explain what `json()` does and why it returns a Promise

---




# JavaScript Learning Notes - Episode 53: Fetch API in Javascript



**Topics Covered:**

* Overview of the Fetch API in JavaScript
* What is an API (Application Programming Interface)
* HTTP Requests (GET, POST, etc.)
* REST API (Representational State Transfer API)
* What is JSON (JavaScript Object Notation)
* Using `fetch` with Promises (`.then()`, `.catch()`)
* Error handling in `fetch` requests (checking `response.ok`)
* Using `fetch` with `async/await`

---

**👉 00:06 - Overview of Fetch Method**

* The Fetch API is a modern, promise-based interface in JavaScript for making asynchronous HTTP requests to servers.
* It provides a more powerful and flexible alternative to the older `XMLHttpRequest` object.
* It allows you to retrieve resources from a server (e.g., data, images, HTML) and send data to a server.
* The `fetch()` method returns a Promise that resolves to the `Response` to that request, whether it is successful or not.

**👉 00:42 - What is API (Application Programming Interface)**

* An API is a set of rules and protocols that allows different software applications to communicate and exchange data with each other.
* It defines the methods and data formats that applications can use to request and share information.
* In the context of web development, APIs often allow frontend applications (like websites) to interact with backend servers.

**👉 01:30 - HTTP Request**

* HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the World Wide Web.
* An HTTP request is a message sent by a client (e.g., a web browser) to a server to request a resource or action.
* Common HTTP request methods include:
    * **GET:** Retrieves data from a server.
    * **POST:** Sends data to a server to create a new resource.
    * **PUT:** Sends data to a server to update an existing resource.
    * **DELETE:** Deletes a resource on the server.

**👉 02:25 - REST API (Representational State Transfer API)**

* REST is an architectural style for designing networked applications. RESTful APIs are commonly used for web services.
* Key principles of REST include:
    * **Stateless:** Each request from a client to a server contains all the information needed to understand the request. The server does not store any client state between requests.
    * **Resource-based:** Everything is treated as a resource that can be identified by a unique URL.
    * **Standard HTTP methods:** Uses standard HTTP methods (GET, POST, PUT, DELETE) for different operations on resources.
    * **Representation:** Resources can have multiple representations (e.g., JSON, XML).

**👉 03:30 - What is JSON (JavaScript Object Notation)**

* JSON is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate.
* It is often used to transmit data between a server and a web application, as it is based on JavaScript object syntax.
* JSON data is structured as key-value pairs, where keys are strings and values can be primitive types (string, number, boolean, null), arrays, or other JSON objects.

**👉 05:32 - Fetch with normal promise**

* The `fetch()` function returns a Promise that resolves to a `Response` object. This `Response` object contains metadata about the server's reply, including headers and the status code. To get the actual data, you need to use methods like `.json()` (to parse the response body as JSON) or `.text()` (to get the body as text), which themselves also return Promises.

```javascript
fetch("[https://fakestoreapi.com/users/abcd](https://fakestoreapi.com/users/abcd)", { method: "GET" })
  .then((response) => {
    if (!response.ok) {
      throw new Error("Data Not Found");
    } else {
      return response.json(); // Returns a Promise that resolves with the JSON data
    }
  })
  .then((data) => {
    console.log(data); // Process the JSON data
  })
  .catch((error) => {
    console.log(error.message); // Handle any errors during the fetch or processing
  });
```

* **`fetch("url", { options })`:** Initiates the HTTP request to the specified URL. The `options` object can include properties like `method` (GET, POST, etc.), `headers`, `body`, etc.
* **`.then((response) => { ... })`:** This callback is executed when the `fetch` Promise resolves (i.e., the server has responded).
* **`response.ok`:** A boolean property of the `Response` object that indicates whether the HTTP response was successful (status code in the range 200-299).
* **`response.json()`:** A method of the `Response` object that reads the response body and parses it as JSON, returning another Promise that resolves with the resulting JavaScript object.
* **`.catch((error) => { ... })`:** This callback is executed if there is an error during the `fetch` process (e.g., network issues) or if an error is thrown in the `.then()` block.

**👉 13:45 - Error Handling in Fetch Method**

* Proper error handling is crucial when making network requests.
* The `fetch` Promise itself only rejects on network errors or if something prevents the request from completing. It does not reject on HTTP error status codes (like 404 or 500).
* To handle HTTP errors, you need to check the `response.ok` property in the first `.then()` block and throw an error if it's `false`. This will cause the Promise chain to jump to the `.catch()` block.

```javascript
fetch("[https://fakestoreapi.com/nonexistent-resource](https://fakestoreapi.com/nonexistent-resource)", { method: "GET" })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message); // Will log "HTTP error! status: 404" (or similar)
  });
```

**👉 22:09 - Fetch with async-await**

* Using `async/await` simplifies the syntax for working with Promises, including those returned by `fetch()`.

```javascript
async function fetchData() {
  try {
    let response = await fetch("[https://fakestoreapi.com/users](https://fakestoreapi.com/users)", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Data Not Found");
    } else {
      let data = await response.json(); // Await the parsing of the JSON response
      console.log(data);
    }
  } catch (error) {
    console.log(error.message);
  }
}

fetchData();
```

* The `async` keyword marks `fetchData` as an asynchronous function, allowing the use of `await`.
* `await fetch(...)` pauses the execution of `fetchData` until the `fetch` Promise resolves with the `Response` object.
* `await response.json()` pauses further execution until the Promise returned by `response.json()` resolves with the actual JSON data.
* Errors during the `fetch` or JSON parsing process, as well as any errors thrown based on `response.ok`, will be caught in the `catch` block.

**Key Concepts of Fetch API:**

* **Promises:** Fetch is promise-based, making asynchronous operations easier to manage.
* **Request and Response Objects:** `fetch()` returns a `Response` object, and you can create a `Request` object to configure the request further.
* **Headers:** You can work with HTTP headers using the `Headers` object.
* **Body:** For requests that send data (e.g., POST, PUT), you can include a body (often as a JSON string).

The Fetch API provides a powerful and flexible way to handle network requests in JavaScript, making it a fundamental tool for web development.

---