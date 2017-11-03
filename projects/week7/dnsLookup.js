var readline = require('readline');
var fs = require('fs');
var dns = require('dns');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Domain name: ", function(doname) {
  dns.lookup(doname, 4, function (err, addr, family) {
    if (err) {
      console.log('Invalid IP address\n' + err.message);
      return;
    }
    console.log('IP address: ' + addr);
  });
  rl.close();
});
