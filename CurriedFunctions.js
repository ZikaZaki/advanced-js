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

// Another Example:
const updateElemText = id => content => document.querySelector(`#${id}`).textContent = content;
// Applied Partially
const updateHeaderText = updateElemText(`header`);
// updateHeaderText('Hello ZikaZaki!');

// Another common use of currying is function composition
// Allows calling small functions in a specific order
const addCustomer = fn => (...args) => {
  console.log('Saving customer info...');
  return fn(...args);
}

const processOrder = fn => (...args) => {
  console.log(`processing order #${args[0]}`);
  return fn(...args);
}

let completeOrder = (...args) => {
  console.log(`Order #${[...args].toString()} completed.`);
}

completeOrder = (processOrder(completeOrder));
console.log(completeOrder);
completeOrder = (addCustomer(completeOrder));
completeOrder("1000");

// If these functions were written in a more standard way, this is what you would see. And this is what meant by "climbing the stair case" out of each function. When applied above we had to start from the inside and work our way out to the top.
// function addCustomer(...args) {
//   return function processOrder(...args) {
//     return function completeOrder(...args) {
//       // end
//     }
//   }
// }

// Advnced example
// Requires a function with a fixed number of parameters
const curry = (fn) => {
  console.log("outside curried fn.length: ", fn.length);
  return curried = (...args) => {
    console.log("inside curried fn.length: ", fn.length);
    console.log("inside curried args.length: ", args.length);
    if (fn.length !== args.length) {
      // bind creates new function
      return curried.bind(null, ...args); 
    }
    return fn(...args);
  };
}

const total = (x, y, z) => x + y + z;
const curriedTotal = curry(total);
console.log(curriedTotal(10)(20)(30));
