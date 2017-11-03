var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Filename: ", function(filename) {
  fs.readFile(filename, function (error, buffer) {
    if (error) {
      console.error(error.message);
      return;
    }
    var contents = buffer.toString();
    var backwards = contents.split('').reverse().join('');
    fs.writeFile(filename, backwards, function (error) {
      if (error) {
        console.error(error.message);
        return;
      }
      console.log('File Save: ', filename);
    });
  });
});
