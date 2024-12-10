/* Hoisting is applied to var, let and const but var differs from let and const 

Var- var is hoisted and initialized to undefined, basically moved to the top of the scope, so it can be accessed before its declaration.

let and const - The variable is placed in a "temporal dead zone" (TDZ) from the start of the block until the line where it is declared and initialized. 
let and const are hoisted but remain in the TDZ until the interpreter encounters their declaration and initialization. 
Accessing const before initialization will give syntax error because const requires immediate initialization a variable declared with 
const must be initialized at the time of declaration while let If you try to access the variable before its declaration (or initialization), a ReferenceError will be thrown. 
*/