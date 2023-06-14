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

// Reason (2) Private Variables and Methods from Closure
const increment = (() => {
  let counter = 0;
  console.log(counter);
  const credits = (num) => console.log(`You have ${num} credits(s).`);
  return () => { counter++; credits(counter); }
})();
increment();
increment();
increment();
// credits(3); // ref error (Not in the global scope)

// Reason (3) The Module Pattern
const Score = (() => {
  let count = 0;

  return {
    current: () => { return count },
    increment: () => { count++ },
    reset: () => { count = 0 }
  }
})();

Score.increment();
console.log(Score.current());
Score.increment();
console.log(Score.current());
Score.reset();
console.log(Score.current());
