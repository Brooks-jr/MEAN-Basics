var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

// ====================================================================
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// ====================================================================
mongoose.connect('mongodb://localhost/ DATABASE NAME');

// ====================================================================
require('./server/config/routes.js')(app);

// ====================================================================
app.listen(8000, function() {
    console.log("listening on port 8000");
})