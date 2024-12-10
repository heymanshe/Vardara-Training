// if loop statement
if (new Date().getHours() < 18) {
    greeting = "Good day";
}
console.log(greeting);

// if-else statement
const hour = new Date().getHours();
// if (hour < 18) {
//     greeting = "Good day";
//   } else {
//     greeting = "Good evening";
//   }
// console.log(greeting);

// else-if statement
if (hour < 10) {
    greeting = "Good morning";
  } else if (hour < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
console.log(greeting);
  

// switch statement
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
    default:
      day = "Looking forward to the Weekend";
  }
console.log(day);
