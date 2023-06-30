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
