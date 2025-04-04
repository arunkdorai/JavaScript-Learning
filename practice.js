// Object

/*
let userProfile = {
    userName : "Arun",
    age : 32,
    hairColor : "black",
    eyeColor : "brown",
    eat : function () {
        console.log("I'm gonna eat ice cream")
        return "Vanilla Ice Cream"
    }
}

console.log(userProfile.userName)
console.log(userProfile.hairColor, userProfile.age)
console.log(userProfile.eat)

let iceCreamType = userProfile.eat()
console.log(iceCreamType)

// Property in string type
let vehicle = {
    "vehicleType" : "four-wheeler",
    "price" : 200000,
    fuelType : "petrol",
    "seater type" : ["two", "three", "four"]
}

console.log(vehicle["vehicleType"])
console.log(vehicle["price"])
console.log(vehicle.fuelType)
console.log(vehicle["seater type"])
console.log(vehicle["seater type"][2])
*/




let uName = "Arun"
let age = 30

let person1 = {
    uName : uName,
    age : age
}

// Shorthand Assigned Property
let person2 = {
    uName,
    age
}

console.log(person1, person2)


// Dynamic Property

let dynamicProp = "employeeId"
let person3 = {
    uName,
    age,
    ['dynamicProp'] : "UEQ2343",
    [dynamicProp] : "IFS246"
}
console.log(person3)
console.log(person3.dynamicProp, person3[dynamicProp])