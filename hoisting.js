// JavaScript Hoisting
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
