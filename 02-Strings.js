const myName = "Himanshi" //string is initialized using string literal, creates a primitive string
const repoCount = 20
console.log(myName[0]);
console.log(myName.__proto__); // String object prototype (exposes the methods and properties)
console.log(myName.length)  
console.log(myName.toUpperCase()); //functions or methods
console.log(myName.charAt(4));
console.log(myName.indexOf('n'));
console.log(myName.charCodeAt(0));


//console.log(name + repoCount + " Value")
//instead of this we use String interpolation in which we make placeholder and inject out variable is that

console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`);


//string using constructor, it creates sting object which is a wrapper object for primitive strings(not advisible)
const gameName = new String('thehineko')  


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4) //can give negative value as well
console.log(anotherString);

const newStringOne = " Himanshi "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://himanshi.com/himanshi%50sharma"
console.log(url.replace('%50', '-'));
console.log((url.includes('laalu')));

const discordName = new String('the-hineko-com')
console.log(discordName.split('-'));