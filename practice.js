// Uncurrying

// function add(a, b, c){
//         console.log(a+b+c)
// }
// add(1, 2, 3)

// Currying

function add1(a) {
        return function(b){
                return function(c){
                        console.log(a+b+c)
                }
        }
}

// add1(10)(20)(50)

let curry1 = add1(100)

console.log(curry1)

let curry2 = curry1(200)

console.log(curry2)

curry2(300)