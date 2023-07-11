/*======== Understanding the sort() method ========*/

/*======== alpha sort order ========*/
const alphaArray = ["zebra", "arial", "medium"];
const alphaArray2 = ["zebra", "arial", "medium", 3, 1, 1000];

const alphaSort = (array) => {
  if (!array.length) return;
  return array.sort();
}

console.log(alphaSort(alphaArray));
console.log(alphaSort(alphaArray2));
/*======== Solution 1: Sort numbers in ascending order ========*/
const arrayOfNumbers = [1, 1000, 21, 30, 4];
const numberSortAsc = (array) => {
  if (!array.length) return;
  return array.sort((a, b) => a - b);
}

console.log(numberSortAsc(arrayOfNumbers));
/*======== Solution 2: Sort numbers in descending order ========*/
// const arrayOfNumbers = [1, 10000, 21, 30, 4];
const numberSortDesc = (array) => {
  if (!array.length) return;
  return array.sort((a, b) => a - b).reverse();
}

console.log(numberSortDesc(arrayOfNumbers));

/*======== Solution 3: Sort an array of numbers AND strings ========*/
const arrayNumAndString = [1, 10000, 21, 30, 4, "zika", "abc", "medium"];

const sortNumbersAndStrings = (array) => {
  if (!array.length) return;
  const numArray = [];
  const strArray = [];
  array.forEach(el => {
    isNaN(el) ? strArray.push(el) : numArray.push(el);
  });
  strArray.sort();
  numArray.sort((a, b) => a - b);

  return [...numArray, ...strArray];
}

console.log(sortNumbersAndStrings(arrayNumAndString));

/*======== Challenge 1: Define a function that takes an array of strings, and returns the most commonly occurring string ========*/
const arrayOfString = ["one", "two", "3", "one", "one", "two", "one", "one", 5, 5, 5, 5, 5, "two"];

// Solution 1:
const findMostCommonString = (array) => {
  if (!array.length) return;
  return array.sort((a, b) => 
      array.filter(str => str === a).length
      - array.filter(str => str === b).length
  ).pop();
}

// console.log(findMostCommonString(arrayOfString));
// downside to this solution: it modifies original array
// downside to this solution: it does not allow for ties, which means that it will only return the last common string.

// Solution 2:
const findMostCommonStringNoMod = (array) => {
  if (!array.length) return;
  const newArray = [...array];
  return newArray.sort((a, b) => 
      newArray.filter(str => str === a).length
      - newArray.filter(str => str === b).length
  ).pop();
}

console.log(findMostCommonStringNoMod(arrayOfString));
console.log(arrayOfString);
// downside to this solution: it does not allow for ties, which means that it will only return the last common string.
