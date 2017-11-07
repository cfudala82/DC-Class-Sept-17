var readline = require('readline');
var fs = require('fs');
var request = require('request');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var url = 'https://nodejs.org/en/';
request.get(url, function (error, response, html) {
  if (error) {
    console.error(error.message);
    return;
  }
  console.log(html);
});
