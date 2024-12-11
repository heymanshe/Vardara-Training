/* 
# Define a JavaScript Object
-Using an Object Literal
-Using the new Keyword
-Using an Object Constructor
-Using Object.assign()
-Using Object.create()
-Using Object.fromEntries()

# Objects are mutable: They are addressed by reference, not by value.
# Comparing two JavaScript objects always returns false.
*/



// Object literals
const JsUser = {
    name: "Himanshi",   // all keys are stored as string here
    "full name": "Himanshi Sharma",
    age: 18,
    location: "Jaipur",
    email: "himanshi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser[email]); //will give error email is undefined because it is an string and we have to tell that to logs
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]); //we can never access it using.(dot)


JsUser.email = "himanshi@outlook.com"
// Object.freeze(JsUser) //prevents any modifications to its properties 
JsUser.email = "himanshi@chatgpt.com"
console.log(JsUser);



// Object using new keywords
const person = new Object();

person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";




//Object constructor-object constructor- acts as a blueprint for creating multiple objects with similar properties and methods
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
const myFather = new Person("Ram", "Lakhan", 50, "blue");
console.log(myFather);


