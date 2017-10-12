var mongoose = require('mongoose')
var Dog = mongoose.model('Dog', Dog);

var dogs = require('../controllers/ CONTROLLER FILE NAME.EXTENSION')

module.exports = function(app) {

    app.get('/', function (req, res){

        res.render('index', {title: "my Express project"});
      });


    app.post('/users', function (req, res){
        var user = new User(req.body);
        // set the name property of session.  
        req.session.name = req.body.name;
        user.save(function(err){
            if(err){
                res.render('index', {errors: user.errors})
            }
            else {
                res.redirect('/users');
            } 
        });
    });

    
    app.get("/users/:id", function (req, res){
        console.log("The user id requested is:", req.params.id);
        // just to illustrate that req.params is usable here:
        res.send("You requested the user with id: " + req.params.id);
        // code to get user from db goes here, etc...
    });
}