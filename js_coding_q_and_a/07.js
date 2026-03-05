// Find the factorial of a number.

const findFactorial = (n) => {
  var res = 1;
  while (n > 0) {
    res = res * n;
    n = n - 1;
  }
  return res;
};

// using recursion
const findFactorial1 = (n) => {
  if (n > 0) {
    return n * findFactorial1(n - 1);
  } else {
    return 1;
  }
};

console.log(findFactorial1(5));
