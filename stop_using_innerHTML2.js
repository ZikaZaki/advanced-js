/*
* The use of innerHTML has a security issues which is demonstrated in this example.
* If a user sumbits this text (<img src='x' onerror='alert("XSS Attack!")'>), it will result in a XSS security issue.
*/
const initApp = async () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    processUserInput();
  });
}

document.addEventListener('DOMContentLoaded', initApp);

const processUserInput = () => {
  const rawData = document.querySelector('input').value;
  const h1 = document.querySelector('h1');
  h1.innerHTML = rawData;
}
