// Remove duplicates from an array

var arr = [1, 2, 3, 2, 3, 1, 2, 3, 4, 4, 4, 3, 2, 4, 5, 5, 66, 98];

const removeDuplicates = (arr) => {
  var res = [];
  arr.forEach((num) => {
    if (!res.includes(num)) {
      res.push(num);
    }
  });
  return res;
};

// using set

arr = [...new Set(arr)];
console.log(arr);

// console.log(removeDuplicates(arr));
