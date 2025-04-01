// let person1 = {
//     name1: "John",
//     age: 40
// }

// function printUserName(){
//     console.log("Hello Everyone", person1.name1, person1.age)
// }
// printUserName()

/*
function printUserName(uName, uAge){
    console.log(`Hi ${uName}, your age is ${uAge} `)
}
printUserName("John", 32)
printUserName("Willian", 28)
printUserName("David", 25)
*/

function printUserName(uName, uAge){
    if(uAge<40){
        console.log(`Hi ${uName}, your age is ${uAge} `)
    }
}

printUserName("John", 60)
printUserName("Willian", 28)
printUserName("David", 25)