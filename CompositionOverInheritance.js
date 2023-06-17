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
