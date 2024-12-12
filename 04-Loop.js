// for loop
// const cars = ["BMW ", "Volvo ", "Saab ", "Ford ", "Fiat ", "Audi "];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] ;
// }
// console.log(text);



//for...in loops through the properties of an object
// const person = {
//     fname:" John",
//     lname:" Doe ",
//     age: 25
//   };

// let txt = "";
// for (let x in person) {
//     txt += person[x];
// }
// console.log(txt);



// for-in loops through the properties of an array
// const numbers = [45, 4, 9, 16, 25];
// let num = "";
// for (let x in numbers) {
//   num += numbers[x] ;
// }
// console.log(num);




//forEach() loop calls a function (a callback function) once for each array element.
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index) {
  txt += `At index ${index}, value is ${value}. \n `;
}
console.log(txt);


// for-of looping over array
// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let x of cars) {
//   text += x + "\n";
// }
// console.log(text);


// for-of looping over string
const language = "JAVASCRIPT";

let result = "";
for (let x of language) {
    result += x + "\n"
}
console.log(result);


// for-in: When working with objects (not arrays) to get property names (keys).
// for-of: When you need to iterate over values in arrays, strings, sets, etc.
// forEach(): When you want to perform side effects (e.g., logging, modifying external variables) on each element of an array.
// for: When you need full control over iteration, including the ability to use break, continue, or modify the loop index.
// while/do-while: When the number of iterations is not known beforehand and you need to repeat code while a condition is true.
