const d = new Date()
console.log(d);

//JavaScript counts months from 0 to 11

//6 numbers specify year, month, day, hour, minute, second:

const day = new Date(2018, 11, 24, 10, 33, 30);

// But if you supply only one parameter it will be treated as milliseconds.

// const day1 = new Date(2018);
// console.log(day1);

console.log(d.getFullYear());
console.log(d.getMonth());	
console.log(d.getDate());	
console.log(d.getDay());
console.log(d.getHours()); 
// getMinutes()	
// getSeconds()	
// getMilliseconds()	
// getTime()	 // milliseconds since January 1, 1970

