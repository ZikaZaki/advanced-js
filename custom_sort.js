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
