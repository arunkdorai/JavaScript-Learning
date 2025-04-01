// While loop

/*
    initialization
    while(condition){
        statement
        counter
    }
*/

// let val = 10

// while(val>=1){
//     console.log(val)
//     val--
// }

let num = 1234
let sum = 0
// 1 + 2 + 3 + 4 = 10

while(num>0){
    let last = num%10 // 1234%10 = 4
    num = parseInt(num/10)
    sum = sum + last
}
console.log(sum)