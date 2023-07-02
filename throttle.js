
const initApp = () => {
  const tbutton = document.querySelector('#throttle');
  
  tbutton.addEventListener('click', throttle(clickLog, 2000));
  
  window.addEventListener('scroll', throttle(scrollLog, 500));
}

const clickLog = () => console.log('clicked');

const scrollLog = () => console.log('scrolling'); 

document.addEventListener('DOMContentLoaded', initApp);

const throttle = (fn, delay) => {
  let lastTime = 0;
  console.log('Called Throttle Immediately');
  let id = 0;
  return (...args) => {
    const now = new Date().getTime();
    id++;
    if(now - lastTime < delay) return;
    lastTime = now;
    console.log("Event id: ", id);
    fn(...args);
  }
}
