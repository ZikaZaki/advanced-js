/*
* Functional Programming: often uses 'pipe' and 'compose' = higher order functions (HOC).
* A Higher Order Function (HOC) is any function which takes a function as an argument, returns a function, or both.
*/

/* Here's how a "compose" function works:
   Starting with small unary (one parameter) functions
*/
const add2 = (x) => x + 2;
const subtract1 = (x) => x - 1;
const multiplyBy5 = (x) => x * 5;

// Notice how the functions execute from inside to outside & right to left.
const result = multiplyBy5(subtract1(add2(4)));
console.log(result);
// The above is NOT a compose function - let's make one.

/*
* Making our own compose and pipe functions
* NOTE: Ramda.js and lodash libraries have their own built-in compose and pipe functions. lodash calls pipe "flow".
* The higher order function "reduce" takes a list of values and applies a function to each of those values, accumulating a single result.
*/

/*
* To get the compose order from right to left as we see with nested function calls in our example above, we need reduceRight...
*/
const compose = (...fns) => val => fns.reduceRight((prev, fn) => fn(prev), val);

const compResult = compose(multiplyBy5, subtract1, add2)(4);
console.log("Compose Result: ", compResult);

/*
* To do the same, but read from left to right... we use "pipe". It is the same except uses reduce instead of reduceRight.
*/
const pipe = (...fns) => (val) => fns.reduce((prev, fn) => fn(prev), val);
const pipeResult = pipe(multiplyBy5, subtract1, add2)(4);
console.log("Pipe Result: ", pipeResult);

const pipeResult2 = pipe(add2, subtract1, multiplyBy5)(5);
console.log("Pipe Result: ", pipeResult2);

// You will often see the functions on separate lines
const pipeResult3 = pipe(
  add2,
  subtract1,
  multiplyBy5
)(6);
console.log("Pipe Result: ", pipeResult3)

/*
* This is a "pointer free" style where you do not see the unary parameter passed between each function.
*/

// Example with a 2nd parameter
const divideBy = (divisor, num) => num / divisor;

const pipeResult4 = pipe(
  add2,
  subtract1,
  multiplyBy5,
  x => divideBy(2, x)
)(5);
console.log("Pipe Result: ", pipeResult4);


// Or you could curry the divideBy function for a custom unary function:
const divBy = (divisor) => (num) => num / divisor;
const divideBy2 = divBy(2); // Partially applied

const pipeResult5 = pipe(
  add2,
  subtract1,
  multiplyBy5,
  divideBy2
)(5);
console.log("Pipe Result: ", pipeResult5);


// Let's look at some examples beyond math functions
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const splitOnSpace = (string) => string.split(' ');
const count = (array) => array.length;

const wordCount = pipe(
  splitOnSpace,
  count
);
console.log("Word Count: ", wordCount(lorem));

// The pipe function is reusable
const egbdf = "Every good boy does fine.";
console.log("Word Count: ", wordCount(egbdf));

// Combine Processes: Check for palindrome
const pal1 = "taco cat";
const pal2 = "UFO tofu";
const pal3 = "ZikaZaki";

const split = (string) => string.split('');
const join = (string) => string.join('');
const lower = (string) => string.toLowerCase();
const reverse = (array) => array.reverse();

const fwd = pipe(
  splitOnSpace,
  join,
  lower
);

const rev = pipe(
  fwd, // a nested pipe function
  split,
  reverse,
  join
);

console.log(fwd(pal1) === rev(pal1));
console.log(fwd(pal2) === rev(pal2));
console.log(fwd(pal3) === rev(pal3));


// Clone / Copy functions within a pipe or compose function

// 3 approaches:

// 1) Clone the object before an impure function mutates it
const scoreObj = { home: 0, away: 0 };

const shallowClone = (obj) => Array.isArray(obj) ? [...obj] : { ...obj };

const incrementHome = (obj) => {
  obj.home += 1; // mutation
  return obj;
};

const homeScore = pipe(
  shallowClone,
  incrementHome
  // another function,
  // and another function, etc
);

console.log(homeScore(scoreObj));
console.log(scoreObj);
console.log(homeScore(scoreObj) === scoreObj);

// Positive: Fewer function calls
// Negative: Create impure functions and testing difficulties, and possibly debugging difficulities.


// 2) Curry the function to create a partial that is unary
let incrementHomeB = (cloneFn) => (obj) => {
  const newObj = cloneFn(obj);
  newObj.home += 1; // mutation
  return newObj;
}

// Creates the partial by applying the first argument in advance
incrementHomeB = incrementHomeB(shallowClone);

const homeScoreB = pipe(
  incrementHomeB
  // another function,
  // and another function, etc
);

console.log(homeScoreB(scoreObj));
console.log(scoreObj);

// Positive: Pure function with clear dependencies
// Negative: More calls to the cloning function
