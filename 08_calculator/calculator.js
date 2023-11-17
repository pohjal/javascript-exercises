const add = function (aNumber, bNumber) {
  return aNumber + bNumber;
};

const subtract = function (aNumber, bNumber) {
  return aNumber - bNumber;
};

const sum = function (numbers) {
  if (numbers.length < 1) return 0;
  if (numbers.length == 1) return numbers[0];
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  return sum;
};

const multiply = function (numbers) {
  if (numbers.length < 2) return 0;
  let result = numbers[0] * numbers[1];
  if (numbers.length > 2) {
    for (let index = 2; index < numbers.length; index++) {
      result = result * numbers[index];
    }
  }

  return result;
};

const power = function (number, power) {
  if (number == 0) return 1;
  let result = number;
  for (let i = 0; i < power - 1; i++) {
    result = result * number;
  }
  return result;
};

const factorial = function (number) {
  if (number == 0) return 1;
  let fact = number;
  for (let i = number - 1; i > 0; i--) {
    fact = fact * i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
