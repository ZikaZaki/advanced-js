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
