// Math Objects

// Math.abs(x) - Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5.

// console.log(Math.abs(-50))
// console.log(Math.abs(0))

// Math.sign(x) - Returns the sign of the x, indicating whether x is positive, negative or zero.

// console.log(Math.sign(-10))
// console.log(Math.sign(0))
// console.log(Math.sign(10))

// Math.sqrt(x) - Returns the square root of a number.

// console.log(Math.sqrt(5))
// console.log(Math.sqrt(36))

// Math.cbrt(x) - Returns an implementation-dependent approximation to the cube root of number.

// console.log(Math.cbrt(8))
// console.log(Math.cbrt(9))

// Math.pow(base, exponent) - Returns the value of a base expression taken to a specified power.

// console.log(Math.pow(2, 3))
// console.log(Math.pow(6, 2))

// Math.min(...values) - Returns the smaller of a set of supplied numeric expressions.

// let arr = [1,2,3,4,5]

// console.log(Math.min(...arr))
// console.log(Math.min(...arr, 10, 15, 0, -5))

// Math.max(...values) - Returns the larger of a set of supplied numeric expressions.

// console.log(Math.max(...arr))
// console.log(Math.max(...arr, 100, 28))

// Math.random() - Returns a pseudorandom number between 0 and 1.

// console.log(Math.random())

// let randomNum = Math.random()*100

// console.log(randomNum.toFixed(3))

// Math.ceil(x) - Returns the smallest integer greater than or equal to its numeric argument.

// console.log(Math.ceil(2.65))
// console.log(Math.ceil(5.01))

// Math.floor(x) - Returns the greatest integer less than or equal to its numeric argument.

// console.log(Math.floor(2.65))
// console.log(Math.floor(5.99))

// Math.round(x) - Returns a supplied numeric expression rounded to the nearest integer.

// console.log(Math.round(2.49))
// console.log(Math.round(2.50))
// console.log(Math.round(2.51))

// Math.trunc(x) - Returns the integral part of the a numeric expression, x, removing any fractional digits. If x is already an integer, the result is x.

// console.log(Math.trunc(2.3654))
// console.log(Math.trunc(5))


// Date Objects

let date = new Date()

console.log(date)

// Date.getFullYear() - Gets the year, using local time.

console.log(date.getFullYear())

// Date.getMonth() - Gets the month, using local time - provides index 0 to 11

console.log(date.getMonth())
console.log(date.getMonth()+1) // correct month

// Date.getDate() - Gets the day-of-the-month, using local time.

console.log(date.getDate())

// Date.getHours() - Gets the hours in a date, using local time.

console.log(date.getHours())

// Date.getMinutes() - Gets the minutes of a Date object, using local time.

console.log(date.getMinutes())

// Date.getSeconds() - Gets the seconds of a Date object, using local time.

console.log(date.getSeconds())

// Date.setFullYear(year, month, day) - Sets the year of the Date object using local time.
// month — A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified.

// date.setFullYear(2020, 5, 30)

// console.log(date)

// Date.setMonth(month, day) - A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
// Sets the month value in the Date object using local time.

date.setMonth(10, 15)

console.log(date)

console.log(date.toLocaleDateString()) // Converts a date to a string by using the current or specified locale.
console.log(date.toDateString()) // Returns a date as a string value.
console.log(date.toLocaleString()) // Converts a date and time to a string by using the current or specified locale.
console.log(date.toLocaleTimeString()) // Converts a time to a string by using the current or specified locale.

// Date.setDate(day)

// Date.setHours(hour, minute, second, millisecond)

// Date.setMinutes(minute, second, millisecond)

// Date.setSeconds(second, millisecond)