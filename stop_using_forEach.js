
const ids = [1,2,3,4,5,6,7,8,9,10];

const initApp = async () => {
  // getPostsSerialized(ids);
  getPostsConcurrently(ids);
}

document.addEventListener('DOMContentLoaded', initApp);

const getPost = async (id) => {
  return await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json();
}

const getPostsSerialized = async (ids) => {
  for (const id of ids) {
    const data = await getPost(id);
    console.log(data);
  }
  console.log("I'll wait on you");
}

