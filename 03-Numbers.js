const score = 400 
// console.log(score);
// console.log(typeof score);    

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length); //there are other properties too, that can be used with this method
// console.log(balance.toFixed(2));
//console.log(typeof balance);    // Output: "object"

//returns a string
const otherNumber = 23.8755
// console.log(otherNumber.toPrecision(3));

const exampleNumber = 123.8755
// console.log(exampleNumber.toPrecision(3));

const exampleNumberTwo = 1123.8755
// console.log(exampleNumberTwo.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());  //follows US digits system
// console.log(hundreds.toLocaleString('en-IN'));



//###################### Number Propertites #######################

/*
EPSILON	The difference between 1 and the smallest number > 1.
MAX_VALUE	The largest number possible in JavaScript
MIN_VALUE	The smallest number possible in JavaScript
MAX_SAFE_INTEGER	The maximum safe integer (253 - 1)
MIN_SAFE_INTEGER	The minimum safe integer -(253 - 1)
POSITIVE_INFINITY	Infinity (returned on overflow)
NEGATIVE_INFINITY	Negative infinity (returned on overflow)
NaN	A "Not-a-Number" value
*/

// Number properties belong to the JavaScript Number Object. Cannot be used on number variables
let x = 6;
console.log(x.MAX_VALUE);
let y = Number.MAX_VALUE;
console.log(Number.MAX_VALUE);
