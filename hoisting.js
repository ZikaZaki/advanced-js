// JavaScript Hoisting
console.log(x);

var x = 5;

stepOne();

const stepOne = () => {
  console.log("step one");
}
