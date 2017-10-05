// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var session = require('express-session');

var bodyParser = require('body-parser');
// use it!
app.use(session({secret: 'im mr.king dice, im the gamest in the land'}));
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {

 res.render("index");
})
// post route for adding a user
app.post('/results', function(req, res) {
   name = req.body['name']
   location = req.body['hideout_location']
   weapon = req.body['fav_weap']
   comment = req.body['say_it']
 res.render('results', {name, location, weapon, comment});
})

app.post('/reset', function(req, res) {
    req.session.views=0
    var pageviews = req.session.views;
 res.redirect('/');
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
