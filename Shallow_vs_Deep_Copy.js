// Foundational knowledge for writing Pure Functions

// JavaScrpt Data Types

// Primitive vs Structural

/* Primitive:
  1) undefined
  2) Boolean
  3) Number
  4) String
  5) BigInt
  6) Symbol
*/


/* Structural:
  1) Object: (new) Object, Array, Map, Set, weakMap, Date
  2) function
*/

// Value vs Reference
// Primitives pass values:
let x = 2;
let y = x;
y += 1;
console.log(y);
console.log(x);

// Structural types use references:
let xArray = [1, 2, 3];
let yArray = xArray;
yArray.push(4);
console.log(yArray);
console.log(xArray);


// Mutable vs Immutable

// Primitives are immutable
let myName = "Dave";
// myName[0] = "W"; // nope!
console.log(myName);

// Reassignment is not the same as being mutable or immutable
myName = "David";
console.log(myName);

// Structures contain mutable data
yArray[0] = 9;
console.log(yArray);
console.log(xArray);
// still shares the same reference

// Pure Functions require you to avoid
// mutating the data

// Inpure function that mutates the data
const addToScoreHistory = (array, score) => {
  array.push(score);
  return array;
}

const scoreArray = [44, 23, 32, 12];
console.log(addToScoreHistory(scoreArray, 14));
// This mutates the original array.
// This is considered to be a side-effect.

// Notice: "const" does not make the array immutable

// we need to modify our function so it does not
// mutate the original data.

