// class Animal {
//   constructor(name, legCount) {
//     this.name = name
//     this.legCount = legCount
//   }
//   describe() {
//     return `${this.name} has ${this.legCount} legs`
//   }
// }


// Classes let you put bunch of properties of a certain type together
// Classes are gave out a structure a of something that is reusable just can be used in multiple places
// Classes can have attributes as well as functions

class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
    }
  static myType() {  // static function on class, associated to the class itself 
    console.log("Animal");
  }
  speak() {
    console.log("hi there " + this.speaks); //function of class animal, function are something that is happening on object of class
  }
}
  
Animal.myType(); // call static function/ method on animal class
// Animal.speak(); // TypeError: Animal.speak is not a function
let dog = new Animal("dog", 4, "bhow bhow"); //object of class animal
let cat = new Animal("cat", 4, "meow");
cat.speak(); //call function on object