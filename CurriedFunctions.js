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
