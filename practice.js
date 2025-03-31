
// Post Increment

/*
    1.Substitute
    2.Operation
    3.Increment
*/

let num = 20
let num1 = num++

// num1 = 20++
// num1 = 20
// num = 21

console.log(num, num1) // (21, 20)

let numm = 20

let num2 = numm++ + numm++

// num2 = 20++ + 21++
// num2 = 41
// numm = 22

console.log(numm, num2) // (22, 41)

// Pre Increment

/*
    1.Substitute with Increment
    2.Operation
*/

let newNum = 40

let newNum1 = ++newNum

// newNum1 = ++40 = 1 + 40 = 41

console.log(newNum, newNum1) // (41, 41)

let newNumm = 50

let newNum2 = ++newNumm + ++newNumm

// newNum2 = ++50 + ++51 = (1 + 50) + (1 + 51) = 51 + 52 = 103
// newNumm = 52

console.log(newNumm, newNum2) // (52, 103)

let newNummm = 30

let newNum3 = newNummm++ + ++newNummm

// newNum3 = 30 + 32 = 62
// newNummm = 32

console.log(newNummm, newNum3) // (32, 62)

// Pre Decrement & Post Decrement

let num4 = 10

let num5 = num4-- + --num4

// num5 = 10 + 8
// num4 = 8

console.log(num4, num5) // (8, 18)

let num6 = 20

let num7 = --num6 + num6--

// num7 = 19 + 19
// num6 = 18

console.log(num6, num7) // (18, 38)