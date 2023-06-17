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

class StuffedButteredCrustPizza extends Pizza {
  stuff() { console.log("Stuffing the crust..."); }
  butter() { console.log("Buttering the crust..."); }
}
