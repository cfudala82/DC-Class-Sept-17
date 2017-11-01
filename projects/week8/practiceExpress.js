var express = require('express');
var app = express();
var body_parser = require('body_parser');
var pgp =
var db =


app.set('view engine', 'hbs');
app.use(express.static('public'));


app.get('/', function (request, response) {
  response.send('Hello World!');
});

app.get('/about', function (request, response) {
  response.send('About Me');
});

app.get('/hello', function (request, response) {
  var name = request.query.name || 'World';
  response.send('Hello ' + name);
});

app.get('/hello', function (request, response) {
  var name = request.query.name || 'World';

  var context = {title: 'Hello', name: name};
  response.render('hello.hbs', context);
});

app.get('/post/:slug', function (request, response) {
  var slug = request.params.slug;
  response.send('Post About: ' + slug);
});


app.get('/projects', function (request, response) {
  response.send('Projects');
});


app.post('/submit', function (request, response) {
  console.log(request.body);
  response.send('OK');
  response.redirect('/some-where-else');
});

app.get('/search', function(req, resp, next) {
  let term = req.query.searchTerm;
  let query = "SELECT * FROM restaurant WHERE \
  restaurant.name ILIKE '%$1#%'"; /*SQL Injection. Casing sensitive structure.*/
  db.any(query, term)
    .then(function(resultsArray) {
      resp.render('search_results.hbs', {
        results: resultsArray
      });
    })
    .catch(next);
});

app.listen(8000, function () {
  console.log('Listening on port 8000');
});



/*Go through the slides.  Erased some code, not sure if it
matches Paul's.

Make Directory views and put the template in there for Handlebars.
Ex.: views/hello.hbs use {{title}} and {{name}}

Handlebars template is an layout.hbs file.
  Ex.:

  <html>
    <head>
      <title>{{title}}</title>
    </head>
    <body>
      {{{body}}}
    </body>
  </html>

  Always send in your

HTML Escaping
  Sometimes you might want to turn off escaping, but be  careful because that gives access to your code.

  var html_content = '<strong>hello</strong>';

  {{html_content}} vs {{{html_content}}}

*/
