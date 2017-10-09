// Require the Express Module
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
// ====================================================================

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// ====================================================================

mongoose.connect('mongodb://localhost/basic_mongoose');
// ====================================================================

app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    res.render('index');
})

app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.
    res.redirect('/');
})
// ====================================================================

app.listen(8000, function() {
    console.log("listening on port 8000");
})
