// For In loop

// Object


let person1 = {
    uName : "Arun",
    hobbies : ["Cricket", "Web Development", "Gaming"],
    familyDetails : {
        totalMembers : 6,
        siblings : ["a", "b", "c", "d"]
    },
    walk(){
        console.log("I'm going to home")
    }
}


// syntax of for in loop : for(let key in object){
//     console.log(key)
// }

    for(let key in person1){
        console.log(key)
    }

    for(let key in person1){
        console.log(person1[key])
    }

    // Array

    let arr = [120, 130, 140, 150]

    for(let key in arr){
        console.log(key)
    }

    for(let key in arr){
        console.log(arr[key])
    }

    // String

    let str = "ECMA Script"

    for(let key in str){
        console.log(key)
    }

    for(let key in str){
        console.log(str[key])
    }