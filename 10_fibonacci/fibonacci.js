const fibonacci = function (number) {
  if (number.value !== "number") number = parseInt(number);
  if (number < 1) return "OOPS";
  if (number === 1) return 1;

  const fibo = [0, 1]; // Initialize with the first two Fibonacci numbers
  for (let i = 2; i < 40; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo[number - 1] + fibo[number - 2];
};

// Do not edit below this line
module.exports = fibonacci;
