var express = require('express');
var app = express();

var pgp = require('pg-promise')({});
var db = pgp({database: 'restaurant'});

const body_parser = require('body-parser');
app.use(body_parser.urlencoded({extended: false}));

app.set('views', './views');
app.set('view engine', 'hbs');
