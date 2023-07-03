const ids = [1,2,3,4,5,6,7,8,9,10];

const initApp = async () => {
  // getPostsSerialized(ids);
  // useForEach(ids); 
  // getPostsConcurrently(ids);
  getPostsWithReduce(ids);
}

document.addEventListener('DOMContentLoaded', initApp);

const getPost = async (id) => {
  return await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json();
}

// Do not use forEach with async await, cause this will not get the data in the requested order.
// Also, you cannot return anything in the forEach method.
const useForEach = async (ids) => {
  await ids.forEach(async (id) => {
    const data = await getPost(id);
    console.log(data);
  });
  console.log("I'm not waiting");
}

const getPostsSerialized = async (ids) => {
  for (const id of ids) {
    const data = await getPost(id);
    console.log(data);
  }
  console.log("I'll wait on you");
}

// Get posts with Higher Order Function (reduce cause it returns a value).
const getPostsWithReduce = async (ids) => {
  await ids.reduce(async (acc, id) => {
    // Waits for the previous item to complete (Resolve).
    await acc;
    // get the next item
    const post = await getPost(id);
    console.log(post);
  }, Promise.resolve());
  console.log("I'll wait on you");
}

// Using Promise.all is faster, even though you may not get the data in order.
// When using Promise.all, if one of the promises falis they all fail. 
// So if you want to check the status allowing some to fail and some not and still get something back, use Promise.allSettled
const getPostsConcurrently = async (ids) => {
  // Promise.allSettled => returns all promises except the ones that failed.
  const posts = await Promise.all(ids.map(async (id) => getPost(id)));
  console.log(posts);
  console.log("I'll wait on you");
}
