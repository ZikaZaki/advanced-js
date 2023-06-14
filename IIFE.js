// IIFE - Immediately-Invoked Function Expression
// Pronounced "Iffy" by Ben Alman who introudced the acronym.

// Variations:
// With anonymous arrow function inside:
(() => {
  // do stuff
})(); 

// With the function keyword:
(function () {
  // do stuff
})();

// With a function name (allows for recursion);
(function myIIFE(num = 0) {
  num++;
  console.log(num);
  return num !== 5 ? myIIFE(num) : console.log('finished!');
})();
