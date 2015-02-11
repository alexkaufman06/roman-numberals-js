var romanNumeral = function(number) {
  var answer = "";
  var romans = ["M", "D", "C", "L", "X", "V", "I"];
  var numberValues = [1000,500,100,50,10,5,1]
  var replacements = ["CM", "CD", "XC", "XL", "IX", "IV"]
  var exceptions = ["DCCCC", "CCCC", "LXXXX", "XXXX", "VIIII", "IIII"]

  for (var i=0; i < romans.length; i++) {
    while (number >= numberValues[i]) {
      answer = answer.concat(romans[i]);
      number -= numberValues[i];
    }
  } for (var i=0; i < exceptions.length; i++) {
    answer = answer.replace(exceptions[i], replacements[i]);
  } return answer;
};

$(document).ready(function() {
  $("form#roman-numerals").submit(function(event) {
    var number = parseInt($("input#number").val());
    var answer = romanNumeral(number);

    $(".numeral-answer").text(answer);
    $("#result").show();

    event.preventDefault();
  });
});
