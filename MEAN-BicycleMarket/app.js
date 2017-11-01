
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
// var session = require('express-session');
// ====================================================================
app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/frontEnd/dist')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// app.use(session({secret: 'codestylewritecodejutsu'}));

// ====================================================================
mongoose.connect('mongodb://localhost/login_reg');

// ====================================================================
require('./server/config/routes.js')(app);
require('./server/config/mongoose.js');

// ====================================================================
app.listen(8000, function() {
    console.log("listening on port 8000");
})