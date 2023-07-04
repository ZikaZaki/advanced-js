
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

// const memoizedMultiplyBy10 = () => {
//   const cache = {};
  
//   return (num) => {
//     if(num in cache) {
//       console.log(cache);
//       return cache[num];
//     }
    
//     const result = num * 10;
//     cache[num] = result;
//     return result;
//   }
// }

const fib = (pos) => {
  if (pos < 2) return pos;
  return fib(pos - 1) + fib(pos - 2);
}

