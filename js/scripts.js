var romanNumeral = function(number) {
  while (number >= 1000) {
    return "M";
  } while (number >= 500) {
    return "D";
  } while (number >= 100) {
    return "C";
  }
};
