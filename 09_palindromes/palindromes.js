const palindromes = function (word) {
  var reverse = "";
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[word.length - 1 - i]) return false;
  }

  return false;
};

// Do not edit below this line
module.exports = palindromes;
