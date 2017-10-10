// Dependencies
var express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
path = require('path'),
port = 3000;

// Create express app
var app = express();

// Use bodyParser to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({ extended: true }));

// Tell server where views are and what templating engine I'm using
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Create connection to database
var connection = mongoose.connect("mongodb://localhost/mongdash");
// var Dog = mongoose.model('Dog', Dog);
// Create dog schema and attach it as a model to our database
var DogSchema = new mongoose.Schema({
name: String,
weight: Number,
color: String
});
var Dog = mongoose.model('Dog', DogSchema);
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

// Mongoose automatically looks for the plural version of your model name, so a Dog model in Mongoose looks for 'dogs' in Mongo.


app.listen(port, function(){
console.log("Running on ", port);
})