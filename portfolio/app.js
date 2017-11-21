var express = require('express');
var app = express();
var pgp = require('pg-promise')({});
var db = pgp({database: 'restaurant'});

app.set('views', './views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function(request, response) {
  response.render('home')
})


app.listen(8000, function() {
  console.log('Listening on Port 8000');
});
