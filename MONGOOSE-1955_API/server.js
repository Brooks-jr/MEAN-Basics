// Require the Express Module
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
app.listen(8000, function() {
    console.log("listening on port 8000");
})
// ====================================================================

mongoose.connect('mongodb://localhost/1955');
// ====================================================================

require('./server/config/routes.js')(app);
// ====================================================================