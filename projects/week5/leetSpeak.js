function leetspeak (str) {
  var string = str;
  var upperStr = string.toUpperCase();
  var numChar = upperStr.length;
  var list = [];

  for (var i = 0; i < numChar; i++) {
    var letter = upperStr[i];

    if (letter === 'A') {
      list.push('4');
    } else if (letter === 'E') {
      list.push('3');
    } else if (letter === 'G') {
      list.push('6');
    } else if (letter === 'L') {
      list.push('1');
    } else if (letter === 'O') {
      list.push('0');
    } else if (letter === 'S') {
      list.push('5');
    } else if (letter === 'T') {
      list.push('7');
    }
  }

  return list;

}

var leet = leetspeak('Leet');

console.log(leet);
