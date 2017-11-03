var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Filename: ", function(file) {
    fs.readFile(file, 'utf-8', function (error, buffer) {
      if (error) {
        console.log(error.message);
        return;
      }
    console.log(buffer);
  })
  rl.close();
});
