// JavaScript Decorator Functions

// Decorators wrap a function in another function.

// These wrappers "decorate" the original function
// with new capabilities, without changing its strcture.

// The concept of decoration is not exclusive to JavaScript

// Benefits: D.R.Y. and clean code through composition

// Example 1:
// Using closure to log how many times a function is called

// Core Function
let sum = (...args) => {
  return [...args].reduce((acc, num) => acc + num);
}

// Decorator Function
const callCounter = (fn) => {
  let count = 0;

  return (...args) => {
    // write to logs, console, db, etc
    console.log(`sum has been called ${count += 1} times`);
    return fn(...args);
  }
}

// This why we used "let" to define the sum() function,
// so that we can reassign it with a decorator
sum = callCounter(sum);
console.log(sum(2, 3, 5));
console.log(sum(1, 5));
console.log(sum(14, 5));

// Example 2:
// Check for valid data and number of params

// Core Function
let rectangleArea = (length, width) => {
  return length * width;
};

// 1st Decorator Function
const countParams = (fn) => {
  return (...params) => {
    if (params.length !== fn.length) {
      throw new Error(`Incorrect number of parameters for ${fn.name}`);
    }

    return fn(...params);
  }
}

// 2nd Decorator Function
const requireIntegers = (fn) => {
  return (...params) => {
    params.forEach(param => {
      if (!Number.isInteger(param)) {
        throw new TypeError(`Params for ${fn.name} must be integers`);
      }
    });

    return fn(...params);
  }
}

rectangleArea = countParams(rectangleArea);
rectangleArea = requireIntegers(rectangleArea);
console.log(rectangleArea(20, 30));
console.log(rectangleArea(20, 30, 40));
console.log(rectangleArea(20, 30.26));


// Example 3:
// Decorating an async API call function:
// Time data requests during development

// Core Function
let requestData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

// Decorator Function
const dataResponseTime = (fn) => {
  return async (url) => {
    console.time('fn');
    const data = await fn(url);
    console.timeEnd('fn');
    return data;
  }
}


// Test Function
const myTestFunction = async () => {
  requestData = dataResponseTime(requestData);
  const data = await requestData('https://jsonplaceholder.typicode.com/posts');
  console.log(data);
}

myTestFunction();
