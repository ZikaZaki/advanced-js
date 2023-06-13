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

// Sahllow copy vs. Deep copy (clones)

// Sahllow Copy
// 1) with spread operator
const zArray = [...yArray, 10];
console.log(zArray);
console.log(yArray);
console.log(xArray === yArray);
console.log(yArray === zArray);

// 2) with Object.assign()
const tArray = Object.assign([], zArray);
tArray.push(11);
console.log(tArray);
console.log(zArray);
console.log(tArray === zArray);

// But if there are nested arrays or objects...
yArray.push([8, 9, 10]);
const vArray = [...yArray];
console.log(vArray);
console.log(vArray === yArray);
vArray[4].push(5);
console.log(vArray);
console.log(yArray);
vArray.push(11);
console.log(vArray);
console.log(yArray);
// nested strctural data types still share a reference!
// Problem: Shallow Copy does not go levels deep when it comes to nested structural data types. Therefore, the nested structural data stypes, still share the same reference, although the rest are not.
// Note: Array.from() and slice() create shallow copies, too.

// When it comes to objects, what about...
// ...Object.freeze() ??
const scoreObj = {
  "first": 44,
  "second": 12,
  "third": { "a": 1, "b": 2 }
}

// Even though, we froze the scoreObj, we still are able to change the values of "nested objects". That because Object.freeze() - is a shallow freeze.
Object.freeze(scoreObj);
scoreObj.third.a = 8;
console.log(scoreObj);

// To avoid these mutations
// Deep Copy is needed to avoid this issue.
// Several libraries like lodash, Ramda and others
// have this feature built-in

/* Here is a one line Vanilla JS solution,
but it does not work with Dates, functions, undefined,
Infinity, RegExps, Maps, Sets, Blobs, FileLists, ImageDatas, and other complex data types.
*/
const newScoreObj = JSON.parse(JSON.stringify(scoreObj));
console.log(newScoreObj);
console.log(scoreObj === newScoreObj);

// Instead of using a library, here is a Vanilla JS function
const deepClone = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj;

  // Create an array or object to hold the values
  const newObject = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const value = obj[key];
    // recursive call for nested objects & arrays
    newObject[key] = deepClone(value);
  }

  return newObject;
}

const newScoreArray = deepClone(scoreArray);
console.log(newScoreArray);
console.log(newScoreArray === scoreArray);

const myScoreObj = deepClone(scoreObj);
console.log(myScoreObj);
console.log(myScoreObj === scoreObj);

// Now we can make a pure function
const pureAddToScoreHistory = (array, score, cloneFunc) => {
  const newArray = cloneFunc(array);
  newArray.push(score);
  
  return newArray;
}

const pureScoreHistory = pureAddToScoreHistory(scoreArray, 18, deepClone);
console.log(pureScoreHistory);
console.log(scoreArray);
console.log(pureScoreHistory === scoreArray);

