// Reverse a string without using built-in reverse functions.
var str = "coding in javascript";

const reverseString = (str) => {
  var res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") continue;
    res = str[i] + res;
  }
  return res;
};

console.log(reverseString(str));
