var pgp = require('pg-promise')({
  // initialization options
});
var db = pgp({database: 'restaurant'});



db.query('SELECT * FROM restaurant')
  .then(function (results)) {
    results.forEach(function (r) {
      console.log(r.id, r.name. r.address, r.category);
    });
  });
