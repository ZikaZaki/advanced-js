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

// You can use more than one!
myArray = [{ "id": 1 }];

console.log(myArray?.[0]?.id ? true : false);
console.log(myArray?.[0]?.name ? true : false);

// You can use it with the null coalescing operator, too.
console.log(myArray?.[0]?.id ?? "No id property");
console.log(myArray?.[0]?.name ?? "No name property");
console.log(myArray ?? "Empty array");

// If need to find out if it is an array
myArray = "Dave";

// This does not work. It'll return true cause string has a length property.
console.log(myArray && myArray.length ? true : false);

// Neither does this work
console.log(myArray?.length ? true : false);

// This is the way to be sure!
console.log(Array.isArray(myArray));

// So if you are completely unsure...
myArray = [{ "id": 1 }];
console.log(Array.isArray(myArray) && myArray.length ? true : false);

// or to check for a propery also...
console.log(Array.isArray(myArray) && myArray[0]?.id ? true : false);
console.log(Array.isArray(myArray) && myArray[0]?.name ? true : false);
