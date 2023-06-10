// Official Definition of Recursion:
// In computer science, recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem.

// Unofficial Definition of Recursion:
// "Any situation where you do something, and depending on the results, you might do it again."

// In programming, recursion occurs when a function calls itself.
// Any iterator function (aka function with a loop) can be recursive instead.

// iterator function
const countToTen = (num = 1) => {
  while (num <= 10) {
    console.log(num);
    num++;
  }
}

// countToTen();
