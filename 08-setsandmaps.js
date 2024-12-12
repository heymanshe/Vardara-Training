// Create a Set
const letters = new Set(["a","b","c"]);


// Create a Set
// const letters = new Set();
// letters.add("a");
// letters.add("b");
// letters.add("c");

// Create a Set
// const letters = new Set();
// // Create Variables
// const a = "a";
// const b = "b";
// const c = "c";
// // Add Variables to the Set
// letters.add(a);
// letters.add(b);
// letters.add(c);

// console.log(letters);
// console.log(typeof letters); //object

console.log(letters.has("d")); //boolean value




// ############################################### Maps ##############################################

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
console.log(fruits);
console.log(typeof fruits);
console.log(fruits.get("apples")); // gets the value of a key in a Map
console.log(fruits instanceof Map);
console.log(fruits.size);

fruits.delete("apples")
console.log(fruits);



// Create a Map
const fruit = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
fruits.set("apples", 200); // can be used to change existing value






