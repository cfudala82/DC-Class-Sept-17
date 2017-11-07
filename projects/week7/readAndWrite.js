var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Input file: ", function(inputFile) {
  fs.readFile(inputFile, 'utf-8', function (error, buffer) {
    if (error) {
      console.log(error.message);
      return;
    }
    rl.question("Output file: ", function (outputFile) {
      var text = buffer.toString().toUpperCase();
      rl.close();

      fs.writeFile(outputFile, text, function (err) {
        if (error) {
          console.log(error.message);
          return;
        };
      });
    });
  });
});
