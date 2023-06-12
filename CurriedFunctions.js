// Currying
// Named after Haskell B. Curry
// Concept from lambda calculus
// Currying takes a function that receives more than one parameter and breaks it into a series of unary (one parameter) functions. Therefore, a curried function only takes one parameter at a time.

// Currying can look like this:
const buildSandwitch = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
    }
  }
}

const mySandwitch = buildSandwitch("Bacon")("Lettuce")("Tomato");
console.log(mySandwitch);

// It works but that's getting ugly and nested the further we go

// Let's refactor:
const buildSammy = ingred1 => ingred2 => ingred3 => `${ingred1}, ${ingred2}, ${ingred3}`;

const mySammy = buildSammy("Tomato")("Turkey")("Bread");
console.log(mySammy);

// Another Example of a curried function
const multiply = (x, y) => x * y;

const curriedMultiply = x => y => x * y;

console.log(multiply(2, 3));
console.log(curriedMultiply(2));
console.log(curriedMultiply(2)(3));

// Partially applied functions are a common use of currying
const timesTen = curriedMultiply(10);
console.log(timesTen);
console.log(timesTen(5));
