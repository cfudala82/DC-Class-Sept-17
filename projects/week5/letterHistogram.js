// A function that tally's up  all the letters in the string and prints
// and object with the info in it.



function letterHistogram (str) {
  var letters = [];
  var strObject = {};

  for (var i = 0; i < str.length; i++) {
    var letter = str.charAt(i);
    letters.push(letter);
    // console.log(letters);
  // }
  // for () {
    strObject.letters = strObject.letters + 1 || 1;
    // console.log(strObject);
  }
return strObject;
}

letterHistogram('banana');
// console.log(a);
console.log(letterHistogram('banana'));
