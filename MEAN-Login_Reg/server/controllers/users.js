var mongoose = require('mongoose')
var User = mongoose.model('user', userSchema);

module.exports = {

    index: function(req, res)
    {
        user.create(req.body, function(err, result){
            if (err) { console.log(err); }
            res.redirect('/')
            });
        },

    find: function(req, res)
    {
    
        user.find({}, function(err, results){
            if (err) { console.log(err); }
            res.render('index', { users: results });
            });
        

        user.find({ _id: req.params.id }, function(err, response) {
            if (err) { console.log(err); }
            res.render('show', { user: response[0] });
            });

        user.find({ _id: req.params.id }, function(err, response) {
            if (err) { console.log(err); }
            res.render('edit', { user: response[0] });
            });
        },

    update: function(req, res){
    
        user.update({ _id: req.params.id }, req.body, function(err, result) {
            if (err) { console.log(err); }
            res.redirect('/');
            });
        }
    }
