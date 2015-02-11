var romanNumeral = function(number) {
  while (number >= 1000) {
    return "M";
  } while (number >= 500) {
    return "D";
  } while (number >= 100) {
    return "C";
  } while (number >= 50) {
    return "L";
  } while (number >= 10) {
    return "X";
  } while (number >= 5) {
    return "V";
  } while (number >= 1) {
    return "I";
  }
};
