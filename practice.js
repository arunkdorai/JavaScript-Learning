// Synchronous JS

// function f1() {
//   console.log("First");
// }
// function f2() {
//   console.log("Second");
// }
// function f3() {
//   console.log("Third");
// }

// f1();
// f2();
// f3();

// Asynchronous JS

function f1() {
  console.log("First");
}
function f2() {
  console.log("Second");
}
function f3() {
  console.log("Third");
}

f1();
setTimeout(f2, 2000);
f3();


// Event Loop -->
// Micro Task Queue - First Priority
   // Promise
// Macro Task Queue - Second Priority
   // setTimeout
   // setInterval