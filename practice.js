// let employee = {
//     eName : "Arun",
//     eSalary : 1000,
//     introYourself : function(a, b){
//         console.log(a + b, this.eName)
//     }
// }

// console.log(employee.eName)
// employee.introYourself(4, 8)

// eName = "Roger";
// let eName = "Roger";
// var eName = "Roger";

// let employee1 = {
//   eName: "Arun",
//   eSalary: 1000,
//   introYourself: (a, b) => {
//     console.log(a + b, this.eName);
//   },
// };

// employee1.introYourself(10, 20);

// call() method - Calls a method of an object, substituting another object for the current object.

let person = {
    pFName : "Walt",
    pLName : "Disney"
}

let person1 = {
    pId : "UQI123",
    pFName : "James",
    pLName : "Bond",
    introYourself : function(a, b){
        console.log(this.pFName + " " + this.pLName + " " + (a + b))
        return (a+b)
    }
}

person1.introYourself.call(person, 10, 20)

// apply() method - Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.

person1.introYourself.apply(person, [100, 200])

// bind() method - For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters.

let newFun = person1.introYourself.bind(person, 500, 300)

console.log(newFun())