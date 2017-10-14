// A function that takes an array of words as an argument and returns the
// acronym of the words.

var arrrayOfWords1 = ['very', 'important', 'person'];
var arrrayOfWords2 = ['national', 'aeronautics', 'space', 'administration'];

var newArray = [];

function acronym (arrrayOfWords) {
  arrrayOfWords.forEach(function(word) {

    var y = word.charAt(0)
    newArray.push(y);
  });

  var acron = newArray.reduce(function (a, b) {
    return a + b;
  });

  return acron;
}

console.log(acronym(arrrayOfWords1));
