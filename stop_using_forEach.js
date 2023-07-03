
const ids = [1,2,3,4,5,6,7,8,9,10];

const initApp = async () => {
  // getPostsSerialized(ids);
  getPostsConcurrently(ids);
}

document.addEventListener('DOMContentLoaded', initApp);
