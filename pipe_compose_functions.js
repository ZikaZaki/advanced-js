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

