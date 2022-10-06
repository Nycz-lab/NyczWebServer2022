var express = require('express');
var app = express();
app.set('view engine', 'pug');
var router = require('./routes.js');


app.use('/', router);

app.listen(3000);