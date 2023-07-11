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

// Solution 3:
const mostCommonWithTies = (array) => {
  if (!array.length) return;
  const countObj = {};

  array.forEach(el => {
    countObj[el] ? countObj[el] += 1 : countObj[el] = 1;
  });

  // console.log(countObj);
  const sortArray = [];
  Object.keys(countObj).forEach(key => {
    sortArray.push([key, countObj[key]]);
  });

  sortArray.sort((a, b) => a[1] - b[1]);
  // console.log(sortArray);

  const highestCount = sortArray[sortArray.length - 1][1];

  // Solution 3a: return original element and count
  // const resultArray = sortArray.filter(arr => arr[1] === highestCount);

  // Solution 3b: only returns the original element
  const resultArray = [];
  sortArray.forEach(arr => {
    if (arr[1] === highestCount) resultArray.push(arr[0]);
  });

  return resultArray;
}

console.log(mostCommonWithTies(arrayOfString));
// downside to this solution: object keys are converted to strings. This solution converts all array data to string type.

/*======== Challenge 2: Count all occurrences of every word in a string ========*/
const wordString = "Every good boy; does fine. Every good boy does fine. Every good boy does? fine. Every! good, boy does fine. Every good boy does.";

// Solution
const countAllWords = (string) => {
  if (!string.length) return;

  const wordArray = string.toLowerCase().replace(/([.!?,;:-])/g, "").replace(/[\s]{2,}/g, " ").split(" ");

  // console.log(wordArray);
  
  const countObj = {};
  wordArray.forEach(word => {
    countObj[word] ? countObj[word] += 1 : countObj[word] = 1;
  });

  return countObj;
}

console.log(countAllWords(wordString));

/*======== Challenge 2: Return most common word in a string ========*/
// Solution:
const mostCommonWord = (string) => {
  if (!string.length) return;

  const wordArray = string.toLowerCase().replace(/([.!?,;:-])/g, "").replace(/[\s]{2,}/g, " ").split(" ");

  return mostCommonWithTies(wordArray);
}

console.log(mostCommonWord(wordString));
