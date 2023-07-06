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
