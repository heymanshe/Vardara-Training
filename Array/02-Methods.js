const marvelHeroes = ["Spiderman", "Ironman", "Hulk", "Thor"]

// console.log(marvelHeroes.length);
// console.log(marvelHeroes[marvelHeroes.length-1]); // Accessing the Last Array Element
// console.log(marvelHeroes.toString());
// console.log(marvelHeroes.at(2));


//console.log(marvelHeroes.join(" * ")); //behaves just like toString(), but in addition you can specify the separator

// marvelHeroes.pop()
// console.log(marvelHeroes);

// marvelHeroes.push("Dr.Strange");
// console.log(marvelHeroes);


// marvelHeroes.shift(); //logs will return the value Spiderman 
// console.log(marvelHeroes);

// marvelHeroes.unshift("Captain America")
// console.log(marvelHeroes.unshift("Captain America")); //unshift() method returns the new array length
// console.log(marvelHeroes);

// marvelHeroes.splice(3, 0, "Orange", "Lemon");
// console.log(marvelHeroes);

// const months = ["Jan", "Feb", "Mar", "Apr"];
// const spliced = months.toSpliced(0, 1);
// console.log(spliced); //creates a new array


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3); // slice creates a new array
// console.log(citrus);

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);




// forEach()
function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function(item, index) {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]);


// map()
// function mapExample(arr) {
//     console.log("Original Array:", arr);
  
//     let newArr = arr.map(function(item) {
//       return item * 2;
//     });
//     console.log("After map:", newArr);
//   }
// mapExample([1, 2, 3]);
  

// filter()
// function filterExample(arr) {
//     console.log("Original Array:", arr);
  
//     let newArr = arr.filter(function(item) {
//       return item > 3;
//     });
//     console.log("After filter:", newArr);
//   }
// filterExample([1, 2, 3, 4, 5]);
  

// // find()
// function findExample(arr) {
//     console.log("Original Array:", arr);
  
//     let found = arr.find(function(item) {
//       return item > 3;
//     });
//     console.log("After find:", found);
//   }
// findExample([1, 2, 3, 4, 5]);
  

// sort()
function sortExample(arr) {
    console.log("Original Array:", arr);
  
    arr.sort(function(a, b) {
      return a - b;
    });
    console.log("After sort:", arr);
  }
sortExample([5, 2, 3, 4, 1]);

