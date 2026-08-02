// Find the sum of all numbers in an array.
var arr = [1, 2, 3, 2, 3, 1, 2, 3, 4, 4, 4, 3, 2, 4, 5, 5, 66, 98];

var res = arr.reduce((acc, cur) => acc + cur, 0);

console.log(res);
