var express = require('express');
var app = express();

app.get('/', function (request, response) {
  response.send('Hello World!');
});
app.get('/cats', function (request, response) {
  response.send('Meow');
});
app.get('/dogs', function (request, response) {
  response.send('Woof');
});
app.get('/cats_and_dogs', function (request, response) {
  response.send('Living together');
});
app.get('/greet/:slug', function (request, response) {
  var slug = request.params.slug;
  response.send('Hello, ' + slug +  '!');
});
app.get('/year', function (request, response) {
  let year = request.query.age || 'age';
  let age = Number(2017) - Number(year);
  response.send('You were born in ' + age +  '.');
});
app.listen(8000, function () {
  console.log('Listening on port 8000');
});
