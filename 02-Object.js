/* 
# Define a JavaScript Object
-Using an Object Literal
-Using the new Keyword
-Using an Object Constructor
-Using Object.assign()
-Using Object.create()
-Using Object.fromEntries()

# Objects are mutable: They are addressed by reference, not by value.
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




// Object constructor- acts as a blueprint for creating multiple objects with similar properties and methods
function objectMethods(obj) {
  console.log("Original Object:", obj);

//   let keys = Object.keys(obj);
//   console.log("After Object.keys():", keys);

//   let values = Object.values(obj);
//   console.log("After Object.values():", values);

//   let entries = Object.entries(obj);
//   console.log("After Object.entries():", entries);

//   let hasProp = obj.hasOwnProperty("property");
//   console.log("After hasOwnProperty():", hasProp);

//   let newObj = Object.assign({}, obj, { newProperty: "newValue" });
//   console.log("After Object.assign():", newObj);

//   let newObj2 = Object.create(obj);
//   console.log("After Object.create()", newObj2);
//   console.log("Prototype of newObj2:", Object.getPrototypeOf(newObj2));
//   console.log("Accessing inherited property key1:", newObj2.key1);

}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);