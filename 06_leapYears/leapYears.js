const leapYears = function (vuosi) {
  let onko = false;
  if (vuosi % 4 == 0) {
    if (vuosi % 100 != 0) return true;
    if (vuosi % 100 == 0 && vuosi % 400 == 0) return true;
  }

  return onko;
};

// Do not edit below this line
module.exports = leapYears;
