
// Checking for Empty Arrays
let myArray = [];

// Array have a length property
console.log(myArray.length);

// Mistake I've made too often!
console.log(myArray.length ? true : false);

// Here's why:
myArray = undefined; // same if null
// Error:
// console.log(myArray.length ? true : false);
