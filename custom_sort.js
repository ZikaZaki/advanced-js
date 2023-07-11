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
