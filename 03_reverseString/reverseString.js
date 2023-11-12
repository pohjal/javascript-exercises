const reverseString = function (string) {
  let kaannos = "";
  for (var i = string.length; i > 0; i--) {
    kaannos += string.charAt(i - 1);
  }
  return kaannos;
};

// Do not edit below this line
module.exports = reverseString;
