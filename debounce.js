/*
Is There A Certain Scenarios Where I Need To Choose Debouncing Over Throttling?

Yes, there are certain scenarios where debouncing is more appropriate than throttling. Here are a few examples:

1- Search Input: When implementing a search functionality, debouncing can be useful. As the user types in the search input, 
you can debounce the function that performs the search. This ensures that the search is triggered only after 
the user has paused typing for a certain period. Debouncing prevents unnecessary and frequent search requests while the user is still typing, 
providing a smoother user experience and reducing server load.

2- Resize and Window Events: When handling resize or window events, debouncing can be helpful. These events can be triggered rapidly, 
especially when the user is resizing the window or performing some action that triggers the events repeatedly. 
By debouncing the function that handles these events, you can ensure that the function is executed only after the user has finished resizing 
or performing the action, preventing excessive and unnecessary updates or calculations.

3- Auto-Saving: In scenarios where you want to automatically save user input or form data, debouncing can be beneficial. 
Instead of saving the data with every keystroke, you can debounce the saving function to trigger only after the user has finished typing or 
making changes. This reduces the number of save operations and improves performance.

4- Button Clicks: Debouncing can be applied to button clicks when you want to prevent accidental or multiple rapid clicks. 
By debouncing the click event handler, you can ensure that the action associated with the button is triggered only once, 
even if the user clicks the button multiple times in quick succession.

In general, debouncing is suitable when you want to introduce a delay or wait for a pause in the event triggers before performing an action. 
It helps in scenarios where you want to optimize performance, prevent unnecessary function calls, and provide a better user experience by reducing
the frequency of updates or actions triggered by rapid events.
*/
const initApp = () => {
  const button = document.querySelector('button');
//   button.addEventListener('click', debounce(clickLog, 2000));
  
  button.addEventListener('click', () => {
    clickLog();
    button.disabled = true;
    setTimeout(() => button.disabled = false, 2000);
  });
}
const clickLog = () => console.log('clicked');

document.addEventListener('DOMContentLoaded', initApp);

const debounce = (fn, delay) => {
  let id;
  console.log(`id at immediate load: ${id}`);
  return (...args) => {
    console.log(`previous id: ${id}`);
    if(id) clearTimeout(id);
    id = setTimeout(() => {
      fn(...args);
    }, delay);
  }
}
