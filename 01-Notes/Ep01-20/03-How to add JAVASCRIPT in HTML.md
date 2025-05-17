# JavaScript Learning Notes - Episode 3: How to add JAVASCRIPT in HTML

**Topics Covered:**

* Write Js code in Browser Console
* VS Code Installation & Folder SetUp
* Add Script in html
* Static Content to Dynamic Content
* Where to use Script Tag in Html

---

**Browser Developer Tools - Console**

* The browser's developer tools provide a powerful environment for web development and debugging.
* **Accessing the Console:** Typically opened by pressing `F12` or by right-clicking on a web page and selecting "Inspect" (or "Inspect Element"), then navigating to the "Console" tab.
* **Using the Console:**
    * **Direct Code Execution:** You can type JavaScript code directly into the console and press Enter to execute it immediately. The result will be displayed in the console.
    * **Inspecting Variables:** If you have JavaScript code running on a page, you can type the name of a variable in the console to see its current value.
    * **Checking for Errors:** JavaScript errors that occur on the page are usually logged in the console, providing information about the error and its location in the code.
    * **Viewing Output:** `console.log()` statements in your JavaScript code will output messages to the console, useful for debugging and understanding program flow.

---

**🕘 00:10 - Write Js code in Browser Console**

* This timestamp emphasizes the direct execution of JavaScript code within the browser's developer console as a quick way to test snippets and see immediate results.

---

**🕘 02:00 - VS Code Installation & Folder SetUp**

* This section likely covered the process of installing Visual Studio Code (VS Code), a popular code editor, and setting up a project folder to organize your HTML and JavaScript files.
* **Key steps might include:**
    * Downloading and installing VS Code from its official website.
    * Creating a new folder on your computer for your JavaScript projects.
    * Opening this folder in VS Code.

---

**🕘 04:55 - Add Script in html**

* JavaScript code can be embedded directly within an HTML document using the `<script>` tag.
* **Placement of `<script>` tags:**
    * `<script>` tags can be placed within the `<head>` section or the `<body>` section of the HTML document. The placement can affect when the JavaScript code is executed relative to the HTML content.

---

**Code Example:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>I'm gonna make you dynamic</h1>
    <script>
      //   alert("Hi");
      setTimeout(() => {
        document.querySelector("h1").innerHTML = "I'm changed";
      }, 4000);
      console.log(100)
      console.log("JavaScript")
      document.write("Javascript intro")
    </script>
  </body>
</html>
```

* **`<script>` tag:** This tag tells the browser that the content within it should be interpreted as JavaScript code.
* `// alert("Hi");`: This line is commented out. `alert()` is a function that displays a pop-up message in the browser.
* `setTimeout(() => { ... }, 4000);`:
    * `setTimeout()` is a JavaScript function that executes a provided function or code snippet once after a specified delay (in milliseconds).
    * The arrow function `() => { document.querySelector("h1").innerHTML = "I'm changed"; }` is the code that will be executed after 4000 milliseconds (4 seconds).
    * `document.querySelector("h1")`: This uses the `querySelector()` method to select the first HTML element with the tag name `h1` in the document.
    * `.innerHTML = "I'm changed";`: This property is used to set or get the HTML content of an element. Here, it changes the text content of the `<h1>` element to "I'm changed".
* `console.log(100)`: This will output the number `100` to the browser's console.
* `console.log("JavaScript")`: This will output the string `"JavaScript"` to the browser's console.
* `document.write("Javascript intro")`: This method writes the provided string directly into the HTML document at the point where the `<script>` tag is located. **Note:** Using `document.write()` after the initial page load can overwrite the existing HTML content, so it's generally used sparingly.

---

**🕘 06:10 - Static Content to Dynamic Content**

* The example code demonstrates how JavaScript can make static HTML content dynamic.
* Initially, the `<h1>` element has the text "I'm gonna make you dynamic".
* After a 4-second delay, the JavaScript code uses `document.querySelector("h1").innerHTML = "I'm changed";` to dynamically update the content of the `<h1>` element.

---

**🕘 07:05 - Where to use Script Tag in Html**

* **Placement Considerations:**
    * **`<head>`:** Placing `<script>` tags in the `<head>` can be useful for including external JavaScript files or for code that needs to run early in the page loading process. However, if the script manipulates the DOM (Document Object Model), it might encounter elements that haven't been loaded yet, potentially causing errors. It's often recommended to place scripts that modify the DOM just before the closing `</body>` tag.
    * **`<body>` (typically at the end):** Placing `<script>` tags just before the closing `</body>` tag is a common best practice. This ensures that the HTML structure and content are fully loaded and parsed before the JavaScript code that interacts with them is executed, preventing errors related to accessing non-existent elements.

---

# **JavaScript Learning Notes - Episode 3**  

**Based on YouTube Tutorial (Approx. 61 Episodes)**  

---

### **Topics Covered:**  
- Writing JavaScript code in the browser console  
- Installing VS Code & setting up a project  
- Adding JavaScript in an HTML file  
- Changing static content to dynamic content  
- Best practices for placing `<script>` tags in HTML  

---

### **🕘 00:10 - Writing JavaScript Code in Browser Console**  
- Open the **developer tools** by pressing **F12** or right-clicking the page and selecting **"Inspect"**.  
- Navigate to the **Console tab** to execute JavaScript commands directly.  
- The Console allows you to:  
  - **Run JavaScript commands** in real-time.  
  - **Check for errors** in scripts.  
  - **Inspect variables and debug** your code.  

Example:  
```javascript
console.log("Hello from the Console!");
let x = 10;
console.log(x * 2); // Output: 20
```

---

### **🕘 02:00 - VS Code Installation & Folder Setup**  
- Install **Visual Studio Code (VS Code)** for writing JavaScript efficiently.  
- Create a new **project folder** and open it in VS Code.  
- Save JavaScript files with the `.js` extension.  
- **Recommended extensions for JavaScript:**  
  - **ESLint** (for code quality)  
  - **Live Server** (for running HTML files dynamically)  
  - **Prettier** (for code formatting)  

---

### **🕘 04:55 - Adding JavaScript in an HTML File**  
- JavaScript can be added inside an **HTML file** using the `<script>` tag.  
- There are **three ways** to include JavaScript:  

1️⃣ **Inline JavaScript (Inside HTML Elements)**  
```html
<button onclick="alert('Button Clicked!')">Click Me</button>
```

2️⃣ **Internal JavaScript (Inside `<script>` tag in HTML file)**  
```html
<script>
  console.log("Hello from JavaScript!");
</script>
```

3️⃣ **External JavaScript (Using a `.js` file)**  
```html
<script src="script.js"></script>
```
Example **script.js** file:  
```javascript
console.log("This is from an external JS file!");
```

---

### **🕘 06:10 - Static Content to Dynamic Content**  
- JavaScript can **modify HTML content dynamically** using `document.querySelector()` and `innerHTML`.  
- Example:  
```html
<h1 id="title">I'm gonna make you dynamic</h1>

<script>
  setTimeout(() => {
    document.querySelector("#title").innerHTML = "I'm changed!";
  }, 4000);
</script>
```
✅ **After 4 seconds**, the `<h1>` content changes to **"I'm changed!"**.  

---

### **🕘 07:05 - Where to Use `<script>` Tag in HTML**  
1️⃣ **Inside `<head>` (Not Recommended for UI Updates)**  
```html
<head>
  <script>
    console.log("Script in Head");
  </script>
</head>
```
🚨 **Issue**: The script runs before the HTML content loads.  

2️⃣ **Before `</body>` (Best Practice)**  
```html
<body>
  <h1>Dynamic Content</h1>
  <script>
    console.log("Script at the end of the body");
  </script>
</body>
```
✅ **Advantage**: Ensures that the **HTML is fully loaded before JavaScript executes**.  

3️⃣ **Using `defer` Attribute (For External JS)**  
```html
<script src="script.js" defer></script>
```
✅ **Advantage**: Ensures the script loads **after** the HTML is fully parsed.  

---

### **Full Code Example from the Video:**  
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript Basics</title>
  </head>
  <body>
    <h1>I'm gonna make you dynamic</h1>
    
    <script>
      // Alert Message
      // alert("Hi");

      // Change HTML content after 4 seconds
      setTimeout(() => {
        document.querySelector("h1").innerHTML = "I'm changed";
      }, 4000);

      // Console Logging
      console.log(100);
      console.log("JavaScript");

      // Write directly to the page
      document.write("JavaScript intro");
    </script>
  </body>
</html>
```
✅ **Features in this example:**  
- Displays an **alert (commented out)**.  
- Changes the **text inside `<h1>`** after 4 seconds.  
- Logs values to the **Console**.  
- Writes text directly to the **web page**.  

---

### **Summary from Episode 3:**  
- The **browser console** allows you to test JavaScript quickly.  
- Install **VS Code** and set up a project for JavaScript development.  
- JavaScript can be included in HTML using **Inline, Internal, or External** scripts.  
- Use `document.querySelector()` and `innerHTML` to dynamically **change webpage content**.  
- The `<script>` tag should be placed **before `</body>`** or use `defer` for best performance.  

---