var express = require('express');
var app = express();

var animals = [
  { name: 'cats', favorite: true },
  { name: 'dogs', favorite: true },
  { name: 'tree frogs', favorite: true },
  { name: 'earth worms', favorite: false },
  { name: 'guinea pigs', favorite: true },
];

// view engine setup
app.set('views', './views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function (request, response) {
  let name = 'Chris';
  response.render('chris', {name: name});
});

// Make an express program that will display "Hello, world!" at the root URL: /
app.get('/hello_world', function (request, response) {
  response.send('Hello World');
});

// Routes: Add to your program the following pages:
app.get('/cats', function (request, response) {
  response.send('Meow');
});
app.get('/dogs', function (request, response) {
  response.send('Woof');
});
app.get('/cats_and_dogs', function (request, response) {
  response.send('Living together');
});

// Route Parameters:Adding to the same program, say a greeting to the user, given that the user's name is encoded inside the URL. For example, if you go to the URL
app.get('/greet/:slug', function (request, response) {
  var slug = request.params.slug;
  response.send('Hello, ' + slug +  '!');
});

// Query Parameters: Tell the year you were born
app.get('/year', function (request, response) {
  let year = request.query.age || 'age';
  let age = Number(2017) - Number(year);
  response.send('You were born in ' + age +  '.');
});

// Templates: Make the greet page say hello to visitor and tell the year they were born. This time you will use a .hbs file in the views folder to render the message using HTML.  For example, if you go to the URL:  /greet/Manoush?age=32
app.get('/greet/:slug', function (request, response) {
  let slug = request.params.slug;
  let year = request.query.age || 2017;
  let age = Number(2017) - Number(year);
  response.render( 'home', {slug: slug, age: age});
});

app.get('/fav_animals', function (request, response) {
  let animals = [
    { name: 'cats', favorite: true },
    { name: 'dogs', favorite: true },
    { name: 'tree frogs', favorite: true },
    { name: 'earth worms', favorite: false },
    { name: 'guinea pigs', favorite: true },
  ];
  response.render('animals', {animals: animals});
});

app.listen(8000, function () {
  console.log('Listening on port 8000');
});
