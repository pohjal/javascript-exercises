const sumAll = function (eka, toka) {
  if (eka < 0 || toka < 0) return "ERROR";
  if (false == Number.isInteger(eka) || false == Number.isInteger(toka))
    return "ERROR";

  let smaller = 0;
  let bigger = 0;
  let sum = 0;

  if (eka < toka) {
    smaller = eka;
    bigger = toka;
  } else {
    smaller = toka;
    bigger = eka;
  }

  for (var i = smaller; i <= bigger; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
