/*
* Memoization is a programming concept or technique used to optimized the performance of a function that is called frequently with the same inputs. The technique involves caching the results of the function calls in memory so that subsequent calls with the same inputs can be returned directly from the cache instead of recomputing the result.
* Memoization is typically applied to:
* >>> Intesive Processing.
* >>> Recursive Functions
* >>> API Requests (not ideal)
************************************************BEST PRACTICES************************************************
* As a best practice Memoization should only be added to "Pure Functions", that is given the same inputs and always giving the same output.
* NOTE: Memoization also comes at a cost, you're trading "Memory" for "Speed".
*/
const initApp = async () => {
//   const memoizedMultBy10 = memoize(multiplyBy10);
//   console.log(memoizedMultBy10(10));
//   console.log(memoizedMultBy10(10));
//   console.log(memoizedMultBy10(5));
//   console.log(memoizedMultBy10(5));
  
//   const memoizedAdd3 = memoize(add3);
//   console.log(memoizedAdd3(1,2,3));
//   console.log(memoizedAdd3(1,2,3));
//   console.log(memoizedAdd3(4,5,6));
//   console.log(memoizedAdd3(4,5,6));
  
//   const memoizedAddMany = memoize(addMany);
//   console.log(memoizedAddMany(1,2,3,4,5,6));
//   console.log(memoizedAddMany(1,2,3,4,5,6));
//   console.log(memoizedAddMany(6,7,8,9,10));
//   console.log(memoizedAddMany(6,7,8,9,10));
  
  const memoizedAddFib= memoize(fib);
  console.log(memoizedAddFib(6));
  console.log(memoizedAddFib(6));
  console.log(memoizedAddFib(6));
}

document.addEventListener('DOMContentLoaded', initApp);

const multiplyBy10 = (num) => num * 10;

const add3 = (num1, num2, num3) => {
  return num1 + num2 + num3;
}

const addMany = (...args) => {
  return args.reduce((acc, num) => acc + num);
}

const fib = (pos) => {
  if (pos < 2) return pos;
  return fib(pos - 1) + fib(pos - 2);
}

/* Apply Memoizatio with "decorator" without creating another function, which will memoize any other function passed to it.
* decorator function */
const memoize = (fn) => {
  const cache = {};
  
  // By returning an anonymous function, we're crating a closure.
  return (...args) => {
    if (args.toString() in cache) {
      console.log(cache);
      return cache[args.toString()];
    }
    
    const result = fn(...args);
    cache[args.toString()] = result;
    return result;
  }
}
