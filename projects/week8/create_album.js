
var prompt = require('prompt-promise');
var res = [];

prompt('Album name? ')
.then(function albumName(val) {
  res.push(val);
  return prompt('albumYear: ');
})
.then(function albumYear(val){
  res.push(val);
  return prompt('Artist ID? ');
})
.then(function artistId(val) {
  res.push(val);
  console.log(res);
  prompt.done();
})
.catch(function rejected(err) {
  console.log('error:', err.stack);
  prompt.finish();
});











// var pgp = require('pg-promise')({
//   // initialization options
// });
// var db = pgp({database: 'restaurant'});
//
//
//
// db.query('SELECT * FROM restaurant')
//   .then(function (results)) {
//     results.forEach(function (r) {
//       console.log(r.id, r.name. r.address, r.category);
//     });
//   });
