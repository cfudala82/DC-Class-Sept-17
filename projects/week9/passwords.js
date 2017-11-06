var pbkdf2 = require('pbkdf2');
var crypto = require('crypto');


// var salt = crypto.randomBytes(20).toString('hex');
// var password = 'some-password';
// var key = pbkdf2.pbkdf2Sync(
//   password, salt, 36000, 256, 'sha256'
// );
// var hash = key.toString('hex');
//
// console.log(password);
// console.log(hash);


var stored_pass = `pbkdf2_sha256$36000$${salt}$${hash}`;
// checking a password
var pass_parts = stored_pass.split('$');
var key = pbkdf2.pbkdf2Sync(
  'some-password',
  pass_parts[2],
  parseInt(pass_parts[1]),
  256, 'sha256'
);
var hash = key.toString('hex');
if (hash === pass_parts[3]) {
  console.log('Passwords Matched!');
}
