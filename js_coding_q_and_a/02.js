// Check if a string is a palindrome.

var str = "ADA";

const checkPalindrome = (str) => {
  var newStr = str.split("").reverse().join("");
  return str == newStr;
};

console.log(checkPalindrome(str));
