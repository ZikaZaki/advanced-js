// JavaScript Decorator Functions

// Decorators wrap a function in another function.

// These wrappers "decorate" the original function
// with new capabilities, without changing its strcture.

// The concept of decoration is not exclusive to JavaScript

// Benefits: D.R.Y. and clean code through composition

// Example 1:
// Using closure to log new many times a function is called

let sum = (...args) => {
  return [...args].reduce((acc, num) => acc + num);
}
