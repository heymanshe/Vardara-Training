const marvelHeroes = ["Spiderman", "Ironman", "Hulk", "Thor"]

//or

const dcHeroes = [];
dcHeroes[0] = "Batman";
dcHeroes[1] = "Aquaman";
dcHeroes[2] = "Superman";
dcHeroes[3] = "Nightwing";

//or

const points = new Array();



const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
console.log(typeof cars); //object

cars[0] = "Audi"; //allowed because const protects the variable reference,not the data
//cars = ["Audi", "Mercedes"]; // will throw error 
console.log(cars);


//const points = [40];
//is not the same as:
const point = new Array(40);


//How to Recognize an Array- The problem is that the JavaScript operator typeof returns "object"
/*
Solution-1 Array.isArray(fruits); returns boolean value

Solution-2 (instanceof operator returns true if an object is an instance of a specified object type)
const fruits = ["Banana", "Orange", "Apple"];
(fruits instanceof Array);
*/