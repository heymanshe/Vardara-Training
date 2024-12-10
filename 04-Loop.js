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
