// Count the number of vowels in a string.

var vowels = ["a", "e", "i", "o", "u"];

var string = "Hello javascript";
const countVowels = (string, vowels) => {
  console.log(string);
  string = string.toLowerCase();
  var count = 0;
  for (let i in string) {
    if (string[i] == " ") continue;

    if (vowels.includes(string[i])) {
      count++;
    }
  }
  return count;
};

console.log(countVowels(string, vowels));
