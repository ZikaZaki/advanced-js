// JavaScript Hoisting
const initApp = () => {
  stepOne();
}

initApp();

const stepOne = () => {
  console.log("step one");
}

stepOne();
