// JavaScript Hoisting
const initApp = () => {
  stepOne();
}

document.addEventListener("DOMContentLoaded", initApp);

const stepOne = () => {
  console.log("step one");
}

stepOne();
