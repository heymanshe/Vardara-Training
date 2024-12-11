function objectMethods(obj) {
    console.log("Original Object:", obj);
  

  // returns an array of the keys
    let keys = Object.keys(obj);
    console.log("After Object.keys():", keys);
  

  // returns an array of the values
    let values = Object.values(obj);
    console.log("After Object.values():", values);

    
  // returns an array of the key/value pairs in an object
    let entries = Object.entries(obj);
    console.log("After Object.entries():", entries);
  

    let hasProp = obj.hasOwnProperty("property");
    console.log("After hasOwnProperty():", hasProp);
  

  // copies properties from one or more source objects to a target object
    let newObj = Object.assign({}, obj, { newProperty: "newValue" });
    console.log("After Object.assign():", newObj);
  

  // Creates an object from an existing object 
    let newObj2 = Object.create(obj);
    console.log("After Object.create()", newObj2);
    console.log("Prototype of newObj2:", Object.getPrototypeOf(newObj2));
    console.log("Accessing inherited property key1:", newObj2.key1);
  
  }
  
  // Example Usage for Object Methods
  const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  };
  
  objectMethods(sampleObject);


// Creates an object from a list of keys/values(arrays of key-value pairs, Map objects, or other iterable objects)
const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
  ];
  
const myObj = Object.fromEntries(fruits);
console.log("After Object.fromEntries():", myObj);
