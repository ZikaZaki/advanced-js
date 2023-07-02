
const initApp = () => {
  const tbutton = document.querySelector('#throttle');
  
  tbutton.addEventListener('click', throttle(clickLog, 2000));
  
  window.addEventListener('scroll', throttle(scrollLog, 500));
}

const clickLog = () => console.log('clicked');

const scrollLog = () => console.log('scrolling'); 

document.addEventListener('DOMContentLoaded', initApp);

