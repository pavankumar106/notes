// find the occurances count of all character in a text

var text = "Hello javascript";

text = text.replace(" ", "").toLowerCase().split("");

var res = text.reduce((acc, cur) => {
  acc[cur] = (acc[cur] | 0) + 1;
  return acc;
}, {});
console.log(res);
