var mongoose = require('mongoose')


module.exports = {

    index: function(req, res)
    {
        Dog.create(req.body, function(err, result){
            if (err) { console.log(err); }
            res.redirect('/')
            });
        },

    find: function(req, res)
    {
    
        Dog.find({}, function(err, results){
            if (err) { console.log(err); }
            res.render('index', { dogs: results });
            });
        

        Dog.find({ _id: req.params.id }, function(err, response) {
            if (err) { console.log(err); }
            res.render('show', { dog: response[0] });
            });

        Dog.find({ _id: req.params.id }, function(err, response) {
            if (err) { console.log(err); }
            res.render('edit', { dog: response[0] });
            });
        },

    update: function(req, res){
    
        Dog.update({ _id: req.params.id }, req.body, function(err, result) {
            if (err) { console.log(err); }
            res.redirect('/');
            });
        }
    }
