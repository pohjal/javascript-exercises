const findTheOldest = function (people) {
    const currentYear = new Date().getFullYear();
  var oldest = people[0];
  for (let i = 1; i < people.length; i++) {
    if (
      oldest.yearOfBirth - oldest.yearOfDeath <
      people[i].yearOfBirth - people[i].yearOfDeath
    ) {
      oldest = people[i];
    }
  }
  return oldest;
};
// Do not edit below this line
module.exports = findTheOldest;
