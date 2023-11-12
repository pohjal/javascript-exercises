const removeFromArray = function (array, ...args) {
  let palautettava = [];
  for (var i = 0; i < array.length; i++) {
    if (false == args.includes(array[i])) palautettava.push(array[i]);
  }
  return palautettava;
};

// Do not edit below this line
module.exports = removeFromArray;
