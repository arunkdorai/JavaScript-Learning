# **JavaScript Learning Notes – Episode 46**

**Topic: Math Object & Date Object in JavaScript**

---

## 🔢 **Math Object**

> The `Math` object in JavaScript provides mathematical constants and functions. It's a built-in object, so you can use it directly without creating it.

---

### ✅ **Common Math Methods**

| Method | Description | Example |
|--------|-------------|---------|
| `Math.abs(x)` | Absolute value | `Math.abs(-50)` → `50` |
| `Math.sign(x)` | Sign of a number (-1, 0, 1) | `Math.sign(10)` → `1` |
| `Math.sqrt(x)` | Square root | `Math.sqrt(36)` → `6` |
| `Math.cbrt(x)` | Cube root | `Math.cbrt(8)` → `2` |
| `Math.pow(base, exp)` | Power | `Math.pow(2, 3)` → `8` |
| `Math.min(...vals)` | Minimum value | `Math.min(1, -5, 10)` → `-5` |
| `Math.max(...vals)` | Maximum value | `Math.max(3, 28, 100)` → `100` |
| `Math.random()` | Random float between 0–1 | `Math.random()` → e.g. `0.736` |
| `Math.ceil(x)` | Round **up** | `Math.ceil(2.65)` → `3` |
| `Math.floor(x)` | Round **down** | `Math.floor(5.99)` → `5` |
| `Math.round(x)` | Round to nearest integer | `Math.round(2.49)` → `2`, `Math.round(2.5)` → `3` |
| `Math.trunc(x)` | Removes decimal part | `Math.trunc(2.3654)` → `2` |

---

### 🧪 **Random Example**
```js
let randomNum = Math.random() * 100;
console.log(randomNum.toFixed(3)); // e.g. "56.827"
```

---

## 🕓 **Date Object**

> JavaScript's `Date` object lets you work with dates and times. You can get and set different parts of a date.

```js
let date = new Date();
console.log(date); // Current date and time
```

---

### ✅ **Getting Date Info**

| Method | Description | Example |
|--------|-------------|---------|
| `getFullYear()` | Full year | `2025` |
| `getMonth()` | Month (0–11) | `0 = Jan`, so add +1 |
| `getDate()` | Day of month (1–31) | `date.getDate()` |
| `getHours()` | Hour (0–23) | `date.getHours()` |
| `getMinutes()` | Minutes (0–59) | `date.getMinutes()` |
| `getSeconds()` | Seconds (0–59) | `date.getSeconds()` |

---

### ✅ **Setting Date Info**

| Method | Description |
|--------|-------------|
| `setFullYear(y, m?, d?)` | Set year, month (0-11), and day |
| `setMonth(m, d?)` | Set month (0 = Jan) |
| `setDate(d)` | Set day of month |
| `setHours(h, m?, s?, ms?)` | Set hour |
| `setMinutes(m, s?, ms?)` | Set minutes |
| `setSeconds(s, ms?)` | Set seconds |

---

### 🧾 **Formatting Dates**

```js
console.log(date.toLocaleDateString());  // e.g., "3/31/2025"
console.log(date.toDateString());        // e.g., "Mon Mar 31 2025"
console.log(date.toLocaleString());      // e.g., "3/31/2025, 11:22:33 AM"
console.log(date.toLocaleTimeString());  // e.g., "11:22:33 AM"
```

---

## ✨ Summary

### 🔹 Math Object
- Used for calculations, random numbers, rounding, roots, powers, etc.
- Example: `Math.pow(2, 3)` → 8

### 🔹 Date Object
- Get/set date and time values.
- Example: `new Date().getFullYear()` → 2025

---



# JavaScript Learning Notes - Episode 46: Math Object & Date Object in Javascript



**Topics Covered:**

* **Math Object:**
    * Introduction and direct usage
    * `Math.abs(x)`
    * `Math.sign(x)`
    * `Math.sqrt(x)`
    * `Math.cbrt(x)`
    * `Math.pow(base, exponent)`
    * `Math.min(...values)`
    * `Math.max(...values)`
    * `Math.random()`
    * `Math.ceil(x)`
    * `Math.floor(x)`
    * `Math.round(x)`
    * `Math.trunc(x)`
* **Date Object:**
    * Introduction and creating Date objects
    * `Date.getFullYear()`
    * `Date.getMonth()` (0-indexed)
    * `Date.getDate()`
    * `Date.getHours()`
    * `Date.getMinutes()`
    * `Date.getSeconds()`
    * `Date.setFullYear(year, month, day)`
    * `Date.setMonth(month, day)`
    * `toLocaleDateString()`
    * `toDateString()`
    * `toLocaleString()`
    * `toLocaleTimeString()`
    * (Mention of other `setDate()`, `setHours()`, `setMinutes()`, `setSeconds()` methods)

---

**👉 Math Object**

* The `Math` object in JavaScript is a built-in object that provides access to mathematical functions and constants.
* You do not need to create an instance of `Math` to use its methods and properties; you can access them directly using `Math.methodName()` or `Math.propertyName`.

```javascript
// Math.abs(x) - Returns the absolute value of x
console.log(Math.abs(-50));   // Output: 50
console.log(Math.abs(0));    // Output: 0

// Math.sign(x) - Returns the sign of x (-1, 0, or 1)
console.log(Math.sign(-10));  // Output: -1
console.log(Math.sign(0));   // Output: 0
console.log(Math.sign(10));   // Output: 1

// Math.sqrt(x) - Returns the square root of x
console.log(Math.sqrt(5));    // Output: 2.23606797749979
console.log(Math.sqrt(36));   // Output: 6

// Math.cbrt(x) - Returns the cube root of x
console.log(Math.cbrt(8));    // Output: 2
console.log(Math.cbrt(9));    // Output: 2.080083823051904

// Math.pow(base, exponent) - Returns base raised to the power exponent
console.log(Math.pow(2, 3));  // Output: 8
console.log(Math.pow(6, 2));  // Output: 36

// Math.min(...values) - Returns the smallest of zero or more numbers
let arr = [1, 2, 3, 4, 5];
console.log(Math.min(...arr));             // Output: 1 (using spread syntax)
console.log(Math.min(...arr, 10, 15, 0, -5)); // Output: -5

// Math.max(...values) - Returns the largest of zero or more numbers
console.log(Math.max(...arr));          // Output: 5
console.log(Math.max(...arr, 100, 28)); // Output: 100

// Math.random() - Returns a floating-point, pseudo-random number in the range 0 (inclusive) up to but not including 1
console.log(Math.random());             // Output: (a random number between 0 and 1)
let randomNum = Math.random() * 100;
console.log(randomNum.toFixed(3));      // Output: (a random number between 0 and 100, fixed to 3 decimal places)

// Math.ceil(x) - Returns the smallest integer greater than or equal to x
console.log(Math.ceil(2.65));           // Output: 3
console.log(Math.ceil(5.01));           // Output: 6

// Math.floor(x) - Returns the largest integer less than or equal to x
console.log(Math.floor(2.65));          // Output: 2
console.log(Math.floor(5.99));          // Output: 5

// Math.round(x) - Returns the value of x rounded to the nearest integer
console.log(Math.round(2.49));          // Output: 2
console.log(Math.round(2.50));          // Output: 3 (rounds up at 0.5)
console.log(Math.round(2.51));          // Output: 3

// Math.trunc(x) - Returns the integer part of x, removing any fractional digits
console.log(Math.trunc(2.3654));        // Output: 2
console.log(Math.trunc(5));             // Output: 5
```

**👉 Date Object**

* The `Date` object in JavaScript is used to work with dates and times.
* To create a `Date` object, you use the `new Date()` constructor. There are several ways to instantiate a `Date` object:
    * `new Date()`: Creates a `Date` object with the current date and time.
    * `new Date(value)`: Creates a `Date` object from a specified number of milliseconds since the Unix Epoch (January 1, 1970, at 00:00:00 UTC).
    * `new Date(dateString)`: Creates a `Date` object from a date string.
    * `new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])`: Creates a `Date` object with the specified year, month (0-indexed), day, hours, minutes, seconds, and milliseconds.

```javascript
let date = new Date();
console.log(date); // Output: (current date and time)

// Date.getFullYear() - Gets the year (four digits) of the date
console.log(date.getFullYear()); // Output: (current year, e.g., 2025)

// Date.getMonth() - Gets the month (0-indexed: 0 for January, 11 for December)
console.log(date.getMonth());     // Output: (current month index, e.g., 3 for April)
console.log(date.getMonth() + 1); // Output: (current month, e.g., 4 for April)

// Date.getDate() - Gets the day of the month (1-31)
console.log(date.getDate());      // Output: (current day of the month, e.g., 9)

// Date.getHours() - Gets the hour (0-23)
console.log(date.getHours());     // Output: (current hour)

// Date.getMinutes() - Gets the minutes (0-59)
console.log(date.getMinutes());  // Output: (current minutes)

// Date.getSeconds() - Gets the seconds (0-59)
console.log(date.getSeconds());  // Output: (current seconds)

// Date.setFullYear(year [, month [, day]]) - Sets the full year, and optionally the month and day
// Month is 0-indexed, day is 1-indexed
// date.setFullYear(2020, 5, 30);
// console.log(date); // Output: 2020-06-30T06:51:58.123Z (example time)

// Date.setMonth(monthIndex [, day]) - Sets the month (0-indexed) and optionally the day
date.setMonth(10, 15); // Sets to November (index 10), 15th of the current year
console.log(date);

// Methods for converting Date to string based on locale
console.log(date.toLocaleDateString()); // Output: (date formatted according to the locale, e.g., 11/15/2025 in US)
console.log(date.toDateString());     // Output: (date part of the Date object in a human-readable format, e.g., Sat Nov 15 2025)
console.log(date.toLocaleString());   // Output: (date and time formatted according to the locale, e.g., 11/15/2025, 12:21:58 AM)
console.log(date.toLocaleTimeString()); // Output: (time formatted according to the locale, e.g., 12:21:58 AM)

// Other Date setting methods (mentioned in the code)
// Date.setDate(day) - Sets the day of the month (1-31)
// Date.setHours(hour [, minute [, second [, millisecond]]]) - Sets the hour
// Date.setMinutes(minute [, second [, millisecond]]) - Sets the minutes
// Date.setSeconds(second [, millisecond]) - Sets the seconds
```

---