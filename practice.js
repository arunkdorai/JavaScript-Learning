// Spread Operator

// Array

// let hobbies = ["Cricket", "Tennis", "Chess"]
// let hobbies1 = ["Reader", "Writer"]

// let newArr = [...hobbies, ...hobbies1]

// hobbies[0] = "Baseball"

// console.log(newArr, hobbies)

// let newArr1 = [...newArr, "Video Editor", "Content Writer"]

// console.log(newArr1)

// Object

let empDetail = {
    empId: "ID5546",
    empName: "Arun",
    empRole: "Full Stack Developer"
}

let team2 = {...empDetail, empSalary : 1000000, team2Desig : "SDE"}

console.log(team2)

let team3 = {...empDetail, empId:"ID12345" ,empSalary : 1000000, team2Desig : "SDE"}

console.log(team3)

// Rest Parameter or Rest Operator

function restParams(...arr){
    console.log(arr)
}
restParams(1,2,3,4,5)

function restParams1(a, b, ...arr1){ // A rest parameter must be last in a parameter list.
    console.log(a, b, arr1)
}
restParams1(1,2,3,4,5)