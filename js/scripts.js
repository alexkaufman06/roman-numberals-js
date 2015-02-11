var romanNumeral = function(number) {
  var answer = "";
  var romans = ["M", "D", "C", "L", "X", "V", "I"];
  var numberValues = [1000,500,100,50,10,5,1]

  for (var i=0; i < romans.length; i++) {
    while (number >= numberValues[i]) {
      answer = answer.concat(romans[i]);
      number -= numberValues[i];
    }
  } return answer;

};
