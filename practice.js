// Var - function scope

/*
function outerFunction() {
        if(true){
                var functionVar = "I'm a Variable"
                console.log(functionVar)
        }
        console.log(functionVar)
}
outerFunction()

function blockScoped() {
        if(true){
                let blockVariable = "I'm a Block scoped variable"
                console.log(blockVariable)
        }
        console.log(blockVariable)
}
blockScoped()


function blockScoped() {
        if(true){
                const blockVariable1 = "I'm a const variable"
                console.log(blockVariable1)
        }
        console.log(blockVariable1)
}
blockScoped()


var globalScopedVar = "I'm accessible throught the global context"
let blockScoped = "I'm a let variable"
const blockScoped1 = "I'm a const variable"

console.log(window.globalScopedVar)
console.log(window.blockScoped)
console.log(window.blockScoped1)
*/

var a = 10
let b = 20
const c = 30

function accessGloblaLocalVar() {
        var a = 101
        let b = 201
        const c = 301

        function innerFunction(){
                var a = 100
                let b = 200
                const c = 300
                console.log(a, b, c)
        }
        innerFunction()
        console.log(a, b, c)
}
accessGloblaLocalVar()

console.log(a, b, c)

// Scope chain