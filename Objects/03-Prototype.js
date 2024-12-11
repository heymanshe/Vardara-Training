/*
Object Prototypes

*/

function Person(first, last, age, eye) {
    // the this keyword is used to assign the values of the parameters to the properties of the object being created
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Creating an instance of Person
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");

  console.log(myFather.firstName);
  
/* you can not add a new property to an existing object constructor 
  Person.nationality = "English";
   To add a new property to a constructor, you must add it to the constructor function or it can be achieved by using prototype
  Person.prototype.nationality = "English";
*/


