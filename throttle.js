/* ================================================================Summary================================================================
* When to use Debounce?----------------
* Debounce is used when you only interested in the:
  - End of wait time.
  - Final State.
* Examples:
- If you don't want to fire that API call until the user has stopped typing in the search input. 
*********************************************************************************************************************************************
* Throttle is used when you are considering the:
  - Intermediate States.
  - At Intervals.
* Examples:
- When you're scrolling the page of a web application, and you want something to happen or update at a regular intervals as it scrolls.
*/

const initApp = () => {
  const tbutton = document.querySelector('#throttle');
  tbutton.addEventListener('click', throttle(clickLog, 2000));

  // scroll event listnere
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
