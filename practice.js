// Generator Function

function* generatorFunction(){
    yield "First val"
    yield "Second val"
    yield "Third val"
    return "Final Val"
}

let generator = generatorFunction()

console.log(generator.next())

console.log("I'm executing after first yield statement")

console.log(generator.next().value)

console.log("I'm executing after second yield statement")

console.log(generator.next().done)

console.log(generator.next())


function* url(){
    yield "https:/"
    yield "www.google.com"
    yield 'homePage'
}

let origin1 = url()

console.log(origin1.next().value)
console.log(origin1.next().value)
console.log(origin1.next().value)
console.log(origin1.next())