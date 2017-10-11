function madlib (name, subject) {
  var output = name + "'s favorite subject in school is " + subject + ".";
  return output;
}

var favSubject = madlib('Chris', 'math');

console.log(favSubject)
