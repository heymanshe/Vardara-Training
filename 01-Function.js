function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result  //if we log something after retrun in function it will never print
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);


// function can also be defined using an expression
const x = function (a, b) {return a * b};
let z = x(4, 3);


// JavaScript functions can be called before they are declared
myFunction(5);
function myFunction(y) {
  return y * y;
}


// Function expressions will execute automatically if the expression is followed by ()- self-invoking function
(function () {
   let x = "Hello!!";  
})();


// Functions Can Be Used as Values
function myFunction(a, b) {
    return a * b;
  }
  
let w = myFunction(4, 3);