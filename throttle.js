/*
Is There A Certain Scenarios Where I Need To Choose Throttling Over Debouncing?

Yes, there are certain scenarios where throttling is more appropriate than debouncing. Here are a few examples:
Continuous Event Streaming: Throttling is useful when dealing with continuous event streams or rapidly changing data, 
such as scroll events or mouse movement events. In such cases, you may want to limit the frequency of function invocations 
to prevent overwhelming the system with a high volume of function calls. Throttling ensures that the function is called at regular intervals,
providing a controlled rate of execution.
Real-time Updates: When you're working with real-time data updates, such as stock price updates or sensor data, throttling can be beneficial. 
It allows you to process and display the data at a consistent and manageable rate, preventing information overload and maintaining a smooth 
user experience.
User Input Handling: Throttling can be useful for handling user input events, especially when there's a need to limit the rate of function 
execution. For example, if you have a button that triggers an action, you might want to prevent users from clicking it multiple times within 
a short time frame. Throttling ensures that the action is executed at a controlled pace, preventing accidental or rapid multiple clicks.
API Requests: Throttling can be applied when making API requests to avoid overwhelming the server or hitting rate limits. By limiting the 
frequency of API calls using throttling, you can ensure a more controlled and sustainable usage pattern.
In general, throttling is suitable when you want to maintain a consistent rate of function execution and limit the number of invocations 
within a specified interval. It helps in scenarios where you need to control the flow of events or prevent excessive function calls. 
Debouncing, on the other hand, is more appropriate when you want to wait for a pause or inactivity before triggering the function, 
such as handling search inputs or auto-saving form data.
*/
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
