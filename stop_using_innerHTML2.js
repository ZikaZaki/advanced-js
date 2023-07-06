
const initApp = async () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    processUserInput();
  });
}

document.addEventListener('DOMContentLoaded', initApp);
