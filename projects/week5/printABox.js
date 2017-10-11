function printSquare (length, height) {

  console.log('*'.repeat(length));

  for (var i = 2; i < height; i++) {
    console.log('*' + ' '.repeat(length - 2) + '*');
  }

  console.log('*'.repeat(length));

}

printSquare(6, 4)
