
// let arr = [10, 5, 100,30,6, 2]

// let newArr = arr.sort((a,b)=>{return a-b})

// a-b (ascending)=> positive, a>b => swapping
// a-b (ascending)=> negative, a<b => no swapping
// b-a (descending)=> positive, b>a => swapping
// b-a (descending)=> negative, b<a => no swapping

// console.log(newArr)

// let newArr1 = [10,20,30, 1,4, true, "100"]

// let descendingSort = newArr1.sort((a, b)=> b-a)

// b-a => "100" - true => 100 - 1 => 90 => swapping

//b-a => "100A" - true => NaN - true => NaN => no swap

// console.log(descendingSort)

// Some and Every

let arr1 = [1,2,3,4,5]

let value = arr1.some((ele, index, arr)=>{
    return ele%2 == 0
})

console.log(value)

let value1 = arr1.every((ele, index, arr)=>{
    return ele%2 == 0
})

console.log(value1)