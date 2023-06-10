// // Lexical Scope defines how variable names are resolved in nested functions.
// // Nested (child) functions have access to the scope of their parent functions.
// // This is often confused with closure, but lexical scope is only an important part of closure.

// // w3schools: "A closure is a function having access to the parent scope, even after the parent function has closed (returned)."

// // A closure is created when we define a function, not when a function is executed.

// // global scope
// let x = 1;

// const parentFunction = () => {
//   // local scope
//   let myValue = 2;
//   console.log(x);
//   console.log(myValue);

//   // Even though, we can say that childFunction has a closure over the parentFunction scope and a closure over the global scope, but it's not directely giving an example to closures. It's just a lexical scope.
//   const childFunction = () => {
//     console.log(x += 5);
//     console.log(myValue += 1);
//   }

//     console.log("now we are having a real example of closure, because the child function will be executed after the parent function closed (returned).");

//   return childFunction;
// }

// // parentFunction();

// const childFun = parentFunction();
// childFun();
// childFun();
// const childFun2 = parentFunction();
// childFun2();
