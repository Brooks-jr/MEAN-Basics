var express = require("express");
var app = express();

app.get('/', function(request, response)
{
    response.send("<h1>Yo, Express</h1>");
})

app.listen(8000, function()
{
    console.log("listening on port 8000");
})
app.use(express.static(__dirname + "/static"));
console.log(__dirname);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})

// root route
app.get('/', function (req, res){
    res.render('index', {title: "my Express project"});
  });
  // route to process new user form data:
  app.post('/users', function (req, res){
    // code to add user to db goes here!
    // redirect the user back to the root route. 
    // All we do is specify the URL we want to go to:
    res.redirect('/');
  })
  // require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));

