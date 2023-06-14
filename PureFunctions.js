// Pure Functions

// A part of the Functional Programming Paradigm

/* Why write Pure Functions?
  1) Clean Code
  2) Easy to Test
  3) Easy to Debug
  4) Decoupled and Independant (That's they're not married to the rest of your application).
  5) Could be added to your utility functions.
*/

/* Rules for Pure Functions:
  1) The same input ALWAYS gives the same output
  2) No side effects
*/

// The same input ALWAYS gives the same output
const add = (x, y) => x + y;
console.log(add(2, 3));

const fullName = (first, last) => `${first} ${last}`;
console.log(fullName("Zack", "Ali"));

// We can replace the function with the output
// This is called "referentail transparency"

/* Rule (1.a) A pure function should have at least one parameter.
Otherwise, it is the same as a constant because they can only work with their input.
*/
const firstName = () => "Dave";
// const firstName = "Dave";

/* 2) No side effects:
This also means accessing the scope outside the function makes the function impure
*/
const z = 5;
const sum = (x, y) => x + y + z;

/* Pure function cannot:
- Access a database, API, file system, storage, etc.
- Modify the DOM or even log to the console.
Thant said, clearly "impure" functions are necessary but they are harder to test and debug.
----------------------------------------------------------------
Further, no input state can be modified. That is, no data should be "mutated". Consider all input data to be immutable.
*/

// Impure Example 1:
let x = 1;
const increment = () => x += 1;
console.log(increment());
console.log(x);

// Impure Example 2:
const myArray = [1, 2, 3];
const addToArray = (array, data) => {
  array.push(data);
  return array;
}
console.log(addToArray(myArray, 4));
console.log(myArray);

// Refactored Example 1:
const pureIncrement = (num) => num += 1;
console.log(pureIncrement(x));
console.log(x);

// Refactored Example 2:
const pureAddToArray = (array, data) => [...array, data];
console.log(pureAddToArray(myArray, 5));
console.log(myArray);
