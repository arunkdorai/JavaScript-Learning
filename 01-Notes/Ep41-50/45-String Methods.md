# **JavaScript Learning Notes – Episode 45**

**Topic: String Methods in JavaScript**

---

## 🕘 **Timestamps Overview**
- `00:08` – Purpose of String methods  
- `00:48` – `charAt()`  
- `02:33` – `charCodeAt()`  
- `04:50` – `concat()`  
- `06:21` – `includes()`  
- `08:30` – `indexOf()`  
- `11:13` – `lastIndexOf()`  
- `12:20` – `repeat()`  
- `13:11` – `replace()` / `replaceAll()`  
- `15:15` – `slice()`  
- `18:32` – `substring()`  
- `22:30` – `split()`  
- `26:45` – `startsWith()`  
- `29:30` – `endsWith()`  
- `33:57` – `toLowerCase()`  
- `34:35` – `toUpperCase()`  
- `34:56` – `trim()`  
- `36:00` – `trimStart()` / `trimEnd()`  

---

## ✨ **Commonly Used String Methods**

### ✅ `charAt(index)`
- Returns character at specified index.
```js
"Hello".charAt(1); // "e"
```

### ✅ `charCodeAt(index)`
- Returns **Unicode (ASCII)** of character at index.
```js
"A".charCodeAt(0); // 65
```

### ✅ `concat()`
- Joins two or more strings.
```js
"Hello".concat(" World"); // "Hello World"
```

### ✅ `includes(substring, position?)`
- Checks if substring exists.
```js
"Single Threaded".includes("Thread"); // true
```

### ✅ `indexOf(substring, position?)`
- First position of substring.
```js
"Reactjs".indexOf("t"); // 4
```

### ✅ `lastIndexOf(substring, position?)`
- Last occurrence of substring.
```js
"Reactjs".lastIndexOf("t"); // 4
```

### ✅ `repeat(count)`
- Repeats the string.
```js
"JS".repeat(3); // "JSJSJS"
```

### ✅ `replace(search, replacement)`
- Replaces **first match**.
```js
"Js is cool - Js".replace("Js", "JavaScript"); // "JavaScript is cool - Js"
```

### ✅ `replaceAll(search, replacement)`
- Replaces **all matches**.
```js
"Js is cool - Js".replaceAll("Js", "JavaScript"); // "JavaScript is cool - JavaScript"
```

---

## 🪓 Extracting Strings

### ✅ `slice(start, end?)`
- Extracts part of the string.
```js
"Single Thread".slice(3, 9); // "gle Th"
```

### ✅ `substring(start, end?)`
- Similar to `slice()` but doesn't accept negative indexes.
```js
"Single Thread".substring(3, 9); // "gle Th"
```

---

## 🧱 Splitting Strings

### ✅ `split(separator, limit?)`
- Splits string into array.
```js
"My Name is Iron-Man".split(" "); 
// ["My", "Name", "is", "Iron-Man"]
```

---

## ✅ Starts/Ends With

### `startsWith(search, position?)`
```js
"My Name".startsWith("N", 3); // true
```

### `endsWith(search, length?)`
```js
"My Name".endsWith("e"); // true
```

---

## 🔠 Case Conversion

### `toLowerCase()` / `toUpperCase()`
```js
"Hello".toUpperCase(); // "HELLO"
"Hello".toLowerCase(); // "hello"
```

---

## ✂️ Trimming Spaces

### `trim()` – Removes both start and end spaces  
### `trimStart()` / `trimEnd()` – Removes only one side
```js
"  Hello  ".trim();       // "Hello"
"  Hello  ".trimStart();  // "Hello  "
"  Hello  ".trimEnd();    // "  Hello"
```

---

## 🔚 Summary Table

| Method         | Purpose                                 |
|----------------|------------------------------------------|
| `charAt()`     | Get character by index                  |
| `charCodeAt()` | Get Unicode value                       |
| `concat()`     | Combine strings                         |
| `includes()`   | Check substring                         |
| `indexOf()`    | First match index                       |
| `lastIndexOf()`| Last match index                        |
| `repeat()`     | Repeat string                           |
| `replace()`    | Replace first match                     |
| `replaceAll()` | Replace all matches                     |
| `slice()`      | Extract with support for negative index |
| `substring()`  | Extract (no negative index)             |
| `split()`      | String to array                         |
| `startsWith()` | Starts with given substring             |
| `endsWith()`   | Ends with given substring               |
| `toLowerCase()`| Convert to lowercase                    |
| `toUpperCase()`| Convert to uppercase                    |
| `trim()`       | Remove whitespace (both sides)          |

---



# JavaScript Learning Notes - Episode 45: String Methods in Javascript



**Topics Covered:**

* Purpose of String Methods
* `charAt()` Method
* `charCodeAt()` Method
* `concat()` Method
* `includes()` Method
* `indexOf()` Method
* `lastIndexOf()` Method
* `repeat()` Method
* `replace()` & `replaceAll()` Method
* `slice()` Method
* `substring()` Method
* `split()` Method
* `startsWith()` Method
* `endsWith()` Method
* `toLowerCase()` Method
* `toUpperCase()` Method
* `trim()` Method
* `trimStart()` & `trimEnd()` Method

---

**👉 00:08 - Purpose of String Methods**

* String methods in JavaScript provide built-in functionalities to manipulate and work with text data.
* They allow you to perform operations like accessing characters, searching for substrings, modifying case, extracting parts of strings, and more.
* These methods make string manipulation easier and more efficient.

**👉 00:48 - `charAt()` Method**

* The `charAt()` method returns the character at a specified index (position) in a string.
* The index is zero-based (the first character is at index 0).
* If the provided index is out of the bounds of the string, it returns an empty string (`""`).

```javascript
let str = "Hello World";
console.log(str.charAt(1)); // Output: e
console.log(str.charAt(str.length - 1)); // Output: d (last character)
console.log(str.charAt(15)); // Output: "" (index out of bounds)
```

**👉 02:33 - `charCodeAt()` Method**

* The `charCodeAt()` method returns the Unicode (UTF-16) value of the character at a specified index in a string.
* It's similar to `charAt()` but returns a number representing the Unicode value.
* If the index is out of bounds, it returns `NaN`.

```javascript
let str1 = "Javascript";
console.log(str1.charCodeAt(2)); // Output: 118 (Unicode value of 'v')
console.log(str1.charCodeAt(15)); // Output: NaN (index out of bounds)
```

**👉 04:50 - `concat()` Method**

* The `concat()` method is used to join two or more strings together.
* It returns a new string that is the result of combining the original strings.
* The original strings are not modified.
* The `+` operator is generally preferred for string concatenation as it is more concise.

```javascript
let str = "Hello";
let str1 = "Javascript";
let newStr = str.concat(" ", str1);
console.log(newStr); // Output: Hello Javascript
```

**👉 06:21 - `includes()` Method**

* The `includes()` method determines whether one string may be found within another string, returning `true` or `false` as appropriate.
* It is case-sensitive.
* You can provide an optional second argument specifying the starting position for the search within the string.

```javascript
let str2 = "Single Threaded";
console.log(str2.includes("i", 1)); // Output: true (starts searching from index 1)
console.log(str2.includes("j")); // Output: false
```

**👉 08:30 - `indexOf()` Method**

* The `indexOf()` method returns the index within the calling `String` object of the first occurrence of the specified substring, starting the search at `fromIndex`. Returns `-1` if the substring is not found.
* It is case-sensitive.
* The optional second argument `fromIndex` indicates the index to begin the search from (default is 0).

```javascript
let newStr1 = "Reactjs";
console.log(newStr1.indexOf("e")); // Output: 1
console.log(newStr1.indexOf("t", 3)); // Output: 4 (starts searching from index 3)
console.log(newStr1.indexOf("E")); // Output: -1 (case-sensitive)
```

**👉 11:13 - `lastIndexOf()` Method**

* The `lastIndexOf()` method returns the index of the last occurrence of a specified substring within the calling `String` object, searching backwards from `fromIndex`. Returns `-1` if the substring is not found.
* It is case-sensitive.
* The optional second argument `fromIndex` indicates the index to begin the backward search from (default is `string.length - 1`).

```javascript
let newStr1 = "Reactjs";
console.log(newStr1.lastIndexOf("e")); // Output: 1
console.log(newStr1.lastIndexOf("t", 5)); // Output: 4 (searches backwards from index 5)
console.log(newStr1.lastIndexOf("s")); // Output: 6
```

**👉 12:20 - `repeat()` Method**

* The `repeat()` method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
* If the `count` is 0, an empty string is returned.
* If the `count` is negative or `Infinity`, it will throw a `RangeError`.

```javascript
let newStr = "Javascript";
console.log(newStr.repeat(2)); // Output: JavascriptJavascript
console.log(newStr.repeat(0)); // Output: ""
```

**👉 13:11 - `replace()` & `replaceAll()` Method**

* The `replace()` method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a `RegExp`.
    * If the pattern is a string, only the **first occurrence** will be replaced.
* The `replaceAll()` method returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a `RegExp`.
    * If the pattern is a string, **all occurrences** will be replaced. If the pattern is a global `RegExp`, all matches will also be replaced.

```javascript
let str = "Js is a Script language - Js";
console.log(str.replace("Js", "Javascript")); // Output: Javascript is a Script language - Js (first occurrence replaced)
console.log(str.replaceAll("Js", "Javascript")); // Output: Javascript is a Script language - Javascript (all occurrences replaced)

let strRegExp = "Js is a Script language - Js";
console.log(strRegExp.replace(/Js/g, "Javascript")); // Using RegExp with global flag for replaceAll-like behavior
```

**👉 15:15 - `slice()` Method**

* The `slice()` method extracts a section of a string and returns it as a new string, without modifying the original string.
* It takes two optional arguments: `beginIndex` (inclusive) and `endIndex` (exclusive).
* If `endIndex` is omitted, `slice()` extracts to the end of the string.
* Indices can be negative, indicating an offset from the end of the string.

```javascript
let newStr = "Single Thread";
console.log(newStr.slice(3)); // Output: gle Thread (from index 3 to the end)
console.log(newStr.slice(3, 9)); // Output: gle Th (from index 3 up to index 9, excluding 9)
console.log(newStr.slice(-3, -1)); // Output: ad (from 3rd last to 1st last, excluding 1st last)
```

**👉 18:32 - `substring()` Method**

* The `substring()` method returns a new string containing the characters of the calling string from the specified index (or indices).
* It takes two arguments: `indexStart` and optional `indexEnd` (exclusive).
* If `indexEnd` is omitted, `substring()` extracts to the end of the string.
* If `indexStart` is equal to `indexEnd`, an empty string is returned.
* If `indexStart` is greater than `indexEnd`, `substring()` will swap the two arguments.
* If either argument is negative or `NaN`, it is treated as `0`.

```javascript
let newStr1 = "Single Thread";
console.log(newStr1.substring(3)); // Output: gle Thread (from index 3 to the end)
console.log(newStr1.substring(3, 9)); // Output: gle Th (from index 3 up to index 9, excluding 9)
console.log(newStr1.substring(-3)); // Output: Single Thread (negative index treated as 0)
console.log(newStr1.substring(8, 0)); // Output: Single Th (arguments are swapped: substring(0, 8))
```

**Key Differences between `slice()` and `substring()`:**

* Handling of negative indices: `slice()` treats them as offsets from the end, while `substring()` treats them as 0.
* Behavior when `startIndex` > `endIndex`: `slice()` returns an empty string, while `substring()` swaps the indices.

**👉 22:30 - `split()` Method**

* The `split()` method divides a string into an ordered list of substrings, puts these substrings into an array, and returns the array.
* It takes an optional separator argument, which specifies the point at which to split the string. This can be a string or a regular expression.
* An optional second argument `limit` can be provided to limit the number of splits.

```javascript
let words = "My Name is Iron-Man";
console.log(words.split(" ")); // Output: [ 'My', 'Name', 'is', 'Iron-Man' ] (split by space)
console.log(words.split(" ", 2)); // Output: [ 'My', 'Name' ] (split by space, limit 2)
console.log(words.split("-")); // Output: [ 'My Name is Iron', 'Man' ] (split by hyphen)
console.log(words.split("-", 1)); // Output: [ 'My Name is Iron' ] (split by hyphen, limit 1)
console.log(words.split("")); // Output: [ 'M', 'y', ' ', 'N', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'I', 'r', 'o', 'n', '-', 'M', 'a', 'n' ] (split by each character)
```

**👉 26:45 - `startsWith()` Method**

* The `startsWith()` method determines whether a string begins with the characters of a specified string, returning `true` or `false` as appropriate.
* It is case-sensitive.
* An optional second argument `position` specifies the index at which to begin searching (default is 0).

```javascript
let words = "My Name is Iron-Man";
console.log(words.startsWith("M")); // Output: true
console.log(words.startsWith("N", 3)); // Output: true (starts checking from index 3)
console.log(words.startsWith("N", 4)); // Output: false
console.log(words.startsWith("Name", 3)); // Output: true
```

**👉 29:30 - `endsWith()` Method**

* The `endsWith()` method determines whether a string ends with the characters of a specified string, returning `true` or `false` as appropriate.
* It is case-sensitive.
* An optional second argument `length` specifies how much of the string to search (as if the string were only that long).

```javascript
let words = "My Name is Iron-Man";
console.log(words.endsWith("n")); // Output: true
console.log(words.endsWith("e", 7)); // Output: true (checks if the first 7 characters end with "e")
console.log(words.endsWith("Iron", words.length - 4)); // Output: true (checks if the string up to "Iron" ends with "Iron")
```

**👉 33:57 - `toLowerCase()` Method**

* The `toLowerCase()` method returns the calling string value converted to lower case.
* The original string is not modified.

```javascript
let words = "My Name is Iron-Man";
console.log(words.toLowerCase()); // Output: my name is iron-man
```

**👉 34:35 - `toUpperCase()` Method**

* The `toUpperCase()` method returns the calling string value converted to upper case.
* The original string is not modified.

```javascript
let words = "My Name is Iron-Man";
console.log(words.toUpperCase()); // Output: MY NAME IS IRON-MAN
```

**👉 34:56 - `trim()` Method**

* The `trim()` method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
* It returns a new string representing the calling string stripped of both leading and trailing whitespace. The original string is not modified.

```javascript
let newWords = "   My Name is Iron-Man   ";
console.log(newWords.trim()); // Output: My Name is Iron-Man
```

**👉 36:00 - `trimStart()` & `trimEnd()` Method**

* `trimStart()` (or `trimLeft()` - alias) removes whitespace from the beginning of a string.
* `trimEnd()` (or `trimRight()` - alias) removes whitespace from the end of a string.
* They both return a new string, and the original string is not modified.

```javascript
let newWords = "   My Name is Iron-Man   ";
console.log(newWords.trimStart()); // Output: My Name is Iron-Man
console.log(newWords.trimEnd()); // Output:    My Name is Iron-Man
```

---