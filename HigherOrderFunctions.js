// Higher Order Functions

// A higher order function is a function that does at least one
// of the followings:
// ** Takes one or more functions as an argument (parameter)
// ** Returns a function as its result

// forEach()
import { posts } from "./posts.js";

posts.forEach(post => {
  console.log(post);
});

console.clear();

// filter()
const filteredPosts = posts.filter(post => {
  return post.userId === 5;
});

console.log(filteredPosts);
