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
