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

/* Reasons for using IIFE: */
// Reason (1) Does not pollute the golbal object namespace.
// -----------------------------------------------
// Example with polluted golbal object namespace:
// -----------------------------------------------
   const x = "whatever";
   const helloWorld = () => "Hello World!";
// --------------------------------------------------
// Example without polluting golbal object namespace:
// --------------------------------------------------
// Isolate declarations within the function
   (() => {
       const x = "IIFE whatever";
       const helloWorld = () => "Hello IIFE!";
       console.log(x);
       console.log(helloWorld());
   })();
