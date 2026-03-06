// Flatten a nested array

var arr = [1, 2, 3, 2, 3, 4, [1, 2, 3, 4, 5], [5, 6, 7, 8, 7, 8]];

const flatt = (arr) => {
  var res = [];
  arr.forEach((item) => {
    if (typeof item !== "object") {
      res.push(item);
    } else {
      res.push(...item);
    }
  });
  return res;
};

console.log(flatt(arr));
