
var prompt = require('prompt-promise');
var pgp = require('pg-promise')({});
var db = pgp({database: 'music'});
var result = [];


prompt('Album name? ')
.then(function albumName(val) {
  result.push(val);
  return prompt('albumYear: ');
})
.then(function albumYear(val){
  result.push(val);
  return prompt('Artist ID? ');
})
.then(function artistId(val) {
  result.push(val);
  var q = "INSERT INTO album VALUES (default, $1, $2, $3)";
  db.result(q, result);
  console.log(result);
  prompt.done();
  pgp.end();
  result = [];
})
.catch(function rejected(err) {
  console.log('error:', err.stack);
  prompt.finish();
});
