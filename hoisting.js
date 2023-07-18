/** **********************************************HOISTING*************************************************
* JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, 
variables or classes to the top of their scope, prior to execution of the code. Hoisting is not a term normatively 
defined in the ECMAScript specification.
*/
const initApp = () => {
  console.log(stepOne);
  stepOne();
}

document.addEventListener("DOMContentLoaded", initApp);

const stepOne = () => {
  console.log("step one");
}

stepOne();

// Example 1:
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x

// Add example two
var x; // Declare x
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element

// JavaScript Initializations are Not Hoisted
// JavaScript only hoists declarations, not initializations.
// Example 1
var x = 5; // Initialize x
var y = 7; // Initialize y

// Example 2
var x = 5; // Initialize x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y

var y = 7; // Initialize y

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y

// Example 3 same as Example 2
var x = 5; // Initialize x
var y;     // Declare y

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y

y = 7;    // Assign 7 to y
