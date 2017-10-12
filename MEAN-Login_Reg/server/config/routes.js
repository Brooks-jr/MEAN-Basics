var mongoose = require('mongoose')
var User = mongoose.model('user', userSchema);

var users = require('../controllers/users')

module.exports = function(app) {

    app.get('/', function (req, res){

        res.render('index', {title: "my Express project"});
      });


    app.post('/register', function (req, res){
        var newUser = new User(req.body);
        newUser.first_name = req.body.first_name
        newUser.last_name = req.body.last_name
        newUser.email = req.body.email
        newUser.password = req.body.password
        newUser.birthday = req.body.birthday

        req.session.name = req.body.name;
        user.save(function(err){
            if(err){
               
            }
            
                res.redirect('/');
            
        });
    });


    app.post('/login', function (req, res){
       
        newUser.email = req.body.email
        newUser.password = req.body.password

        req.session.name = req.body.email;
        user.save(function(err){
            if(err){
               
            }
            
                res.redirect('/');
            
        });
    });

    
    // app.get("/users/:id", function (req, res){
    //     console.log("The user id requested is:", req.params.id);
    //     // just to illustrate that req.params is usable here:
    //     res.send("You requested the user with id: " + req.params.id);
    //     // code to get user from db goes here, etc...
    // });
}