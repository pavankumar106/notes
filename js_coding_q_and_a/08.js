// Print the Fibonacci sequence up to n terms.

const fibo = (n) => {
  var first = 0;
  var second = 1;
  var res = [first, second];
  while (n >= 2) {
    var newNum = first + second;
    first = second;
    second = newNum;
    res.push(newNum);
    n = n - 1;
  }
  return res;
};

console.log(fibo(5));
