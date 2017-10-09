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

mongoose.connect('mongodb://localhost/quotes');
// ====================================================================

// var UserSchema = new mongoose.Schema({
//     name: String
//    })
//    mongoose.model('User', UserSchema);
//    var User = mongoose.model('User')



var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String
   })
   mongoose.model('quotes', QuoteSchema); // We are setting this Schema in our Models as 'User'
   var Quote = mongoose.model('quotes') // We are retrieving this Schema from our Models, named 'User'
// ====================================================================
   

app.get('/', function(req, res) 
{
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    res.render('index');
})

app.get('/ViewQuotes', function(req, res)
    {
        Quote.find({}, function(err, results)
            {
                if(err) 
                    { 
                    console.log(err); 
                    }
                res.render('quotes', { quotes: results });
            });
    });
  
app.post('/AddQuotes', function(req, res)
    {
        Quote.create(req.body, function(err)
            {
                if(err) 
                    { 
                        console.log(err); 
                    }
                    res.redirect('/ViewQuotes');
            });
    });
// ====================================================================

app.listen(8000, function() {
    console.log("listening on port 8000");
})
