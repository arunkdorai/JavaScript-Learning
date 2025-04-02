function normalFun() {
  console.log("Executed whenever called");
}

normalFun();
normalFun();
normalFun();

// Self Invoked Function (IIFE)

(function () {
  console.log("Self Invoked Function");
})();

(function (userName, age) {
  console.log("Self Invoked Function ", userName+age);
})("Virat", 36);


// Closure

function outerFunction() {
        let outerVariable = "I'm from outer scope"
        function innerFunction() {
                console.log(outerVariable)
        }
        return innerFunction
}

let inFunc = outerFunction()

inFunc()