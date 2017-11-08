var readline = require('readline');
var request = require('request');
var fs = require('fs');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("URL: ", function(inputURL) {
  rl.question("Output file: ", function (outputURL) {
    request.get(inputURL, function (error, response, html) {
      if (error) {
        console.error(error.message);
        return;
      };
      rl.close();
      fs.writeFile(outputURL, html, function (err) {
        if (error) {
          console.log(error.message);
          return;
        };
      });
    });
  });
});
