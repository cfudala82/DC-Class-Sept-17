// Prints a banner, wraps stars around a text that was input into the function.

function printSquare (string) {

  var word = string.length;

  console.log('*'.repeat(word + 4));
  console.log('* ' + string + ' *');
  console.log('*'.repeat(word + 4));

}

printSquare('Welcome to Digital Crafts')
