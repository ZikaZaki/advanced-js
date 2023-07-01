
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

// So we have learned to do this:
console.log(myArray && myArray.length ? true : false);

// We now have a more concise way!
myArray = [];

// Optional Chaining
console.log(myArray?.length ? true : false);
// ?. is the optaional chaining operator
