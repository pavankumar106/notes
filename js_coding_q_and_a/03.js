// Find the largest number in an array

var arr = [123, 65, 646734, 75, 0];

const findLargest = (arr) => {
  arr = arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
};

console.log(findLargest(arr));
