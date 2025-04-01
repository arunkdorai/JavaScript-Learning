// Logical Operator

// Logical AND (&&)

/* cond1 cond2 Result
    True  True  True
    True  False False
    False True  False
    False False False
*/
/*
let age = 18;

console.log(age >= 18 && age<=30) // true && true

age = 35;
console.log(age >= 18 && age <= 30); // true && false
age = 16;
console.log(age >= 18 && age <= 30); // false && true - Short Circuit Evaluation

let idProof = "Aadhaar";

console.log(idProof == "Pancard" && idProof == "Driving License"); // false && false
*/

// Logical OR (||)

/* cond1 cond2 Result
    True  True  True
    True  False True
    False True  True
    False False False
*/

/*
let pwd_input = "12345"

console.log(pwd_input == "12345" || pwd_input == "54321") // True || False

pwd_input = "54321"

console.log(pwd_input == "12345" || pwd_input == "54321") // False || True

let userName = "abc"

console.log(pwd_input == "54321" || userName == "abc") // True || True

console.log(pwd_input == "12345" || userName == "xyz") // False || False
*/

// Logical Not (!)

console.log(!(10 > 4))

console.log(!false)