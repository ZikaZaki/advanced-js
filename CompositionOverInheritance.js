/* Inheritance */
class Pizza {
  constructor(size, crust, sauce) {
    this.size = size;
    this.crust = crust;
    this.sauce = sauce;
    this.toppings = [];
  }
  prepare() { console.log("Preparing..."); }
  bake() { console.log("Baking..."); }
  ready() { console.log("Ready!"); }
}

// Problem: Repeating methods - Not D.R.Y.
class Salad {
  constructor(size, dressing) {
    this.size = size;
    this.dressing = dressing;
  }
  prepare() { console.log("Preparing..."); }
  toss() { console.log("Tossing..."); }
  ready() { console.log("Ready!"); }
}

class StuffedCrustPizza extends Pizza {
  stuff() { console.log("Stuffing the crust..."); }
}

class ButteredCrustPizza extends Pizza {
  butter() { console.log("Buttering the crust..."); }
}

// Problem: Repeating methods - Not D.R.Y.
class StuffedButteredCrustPizza extends Pizza {
  stuff() { console.log("Stuffing the crust..."); }
  butter() { console.log("Buttering the crust..."); }
}

const myPizza = new StuffedButteredCrustPizza();
myPizza.stuff();
myPizza.butter();

/* ============================================================================================================================================ */
// To solve the problem of the D.R.Y. in the inheritance. Instead, we need to use Composition for methods.
const prepare = () => {
  return {
    prepare: () => console.log("Preparing...")
  }
}

const bake = () => {
  return {
    bake: () => console.log("Baking...")
  }
}

const toss = () => {
  return {
    toss: () => console.log("Tossing...")
  }
}

const ready = () => {
  return {
    ready: () => console.log("Ready!")
  }
}

const stuff = () => {
  return {
    stuff: () => console.log("Stuffing the crust...")
  }
}

const butter = () => {
  return {
    butter: () => console.log("Buttering the crust...")
  }
}

const createPizza = (size, crust, sauce) => {
  const pizza = {
    size: size,
    crust: crust,
    sauce: sauce,
    toppings: []
  }

  return {
    ...pizza,
    ...prepare(),
    ...bake(),
    ...ready()
  }
}

const createSalad = (size, dressing) => {
  return {
    size: size,
    dressing: dressing,
    ...prepare(),
    ...toss(),
    ...ready()
  }
}

// Compare to ES6 class syntax with extends and super()
const createStuffedButteredCrustPizza = (pizza) => {
  return {
    ...pizza,
    ...stuff(),
    ...butter()
  }
}

const anotherPizza = createPizza("medium", "thin", "original");
const somebodysPizza = createStuffedButteredCrustPizza(anotherPizza);
// OR
const davesPizza = createStuffedButteredCrustPizza(createPizza("medium", "thin", "original"));

const davesSalad = createSalad("side", "ranch");

davesPizza.bake();
davesPizza.stuff();
davesSalad.prepare();
console.log(davesPizza);
console.log(davesSalad);

// What about toppings?
const addTopping = (pizza, topping) => {
  pizza.toppings.push(topping);
  return pizza;
}

const jamesPizza = createPizza("medium", "thin", "original");
console.log(jamesPizza);
console.log(addTopping(jamesPizza, "pepperoni"));
console.log(jamesPizza); // mutation!

// we need to clone the pizza object to avoid mutation
// Function composition: Imperative Style
// const shallowPizzaClone = (fn) => {
//   return (obj, array) => {
//     const newObj = { ...obj };
//     return fn(newObj, array);
//   }
// }

// shorter way to write shallowPizzaClone: Declartive Style
const shallowPizzaClone = (fn) => (obj, array) => fn({ ...obj }, array);
