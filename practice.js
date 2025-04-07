// charAt - returns the string present in the given index

// let str = "Hello World"

// console.log(str.charAt(1), str.charAt(str.length-1))

// charCodeAt - returns the ASCII/unicode value of the string present in the given index

// let str1 = "Javascript"

// console.log(str1.charCodeAt(2))

// concat - Returns a string that contains the concatenation of two or more strings.

// let newStr = str.concat(" ",str1)

// console.log(newStr)

// includes - Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.

// let str2 = "Single Threaded"

// console.log(str2.includes("i", 1))
// console.log(str2.includes("j"))

//indexOf - Returns the position of the first occurrence of a substring.

// let newStr1 = "Reactjs"

// console.log(newStr1.indexOf("e"))
// console.log(newStr1.indexOf("t", 3))

// lastIndexOf - Returns the last occurrence of a substring in the string.

// let newStr1 = "Reactjs"

// console.log(newStr1.lastIndexOf("e"))
// console.log(newStr1.lastIndexOf("t", 5))

// repeat - number of copies to append
// Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.

// let newStr = "Javascript"

// console.log(newStr.repeat(2))

// replace - Replaces text in a string, using a regular expression or search string.
// replaceAll - Replace all instances of a substring in a string, using a regular expression or search string.

// let str = "Js is a Script language - Js"

// console.log(str.replace("Js", "Javascript"))

// console.log(str.replaceAll("Js", "Javascript"))

// slice - Returns a section of a string.

// let newStr = "Single Thread"

// console.log(newStr.slice(3))
// console.log(newStr.slice(3, 9))
// console.log(newStr.slice(-3, -1))

// substring - Returns the substring at the specified location within a String object.

// let newStr1 = "Single Thread"

// console.log(newStr1.substring(3))
// console.log(newStr1.substring(3,9))
// console.log(newStr1.substring(-3))
// console.log(newStr1.substring(8,0))

// Split - Split a string into substrings using the specified separator and return them as an array.

// let words = "My Name is Iron-Man"

// console.log(words.split(" "))
// console.log(words.split(" ", 2))
// console.log(words.split("-"))
// console.log(words.split("-", 1))

// startsWith

let words = "My Name is Iron-Man"

// console.log(words.startsWith("M"))
// console.log(words.startsWith("N",3))
// console.log(words.startsWith("N",4))
// console.log(words.startsWith("Name",3))

// endsWith

// console.log(words.endsWith("n"))
// console.log(words.endsWith("e", 7))
// console.log(words.endsWith("Iron", words.length-4))

// toLowerCase

console.log(words.toLowerCase())

// toUpperCase

console.log(words.toUpperCase())

// trim - Removes the leading and trailing white space and line terminator characters from a string.

let newWords = "   My Name is Iron-Man   "

console.log(newWords.trim())

// trimStart / trimLeft

console.log(newWords.trimStart())

// trimEnd / trimRight

console.log(newWords.trimEnd())