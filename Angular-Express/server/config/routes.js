var mongoose = require('mongoose')


var dogs = require('../controllers/dogs.js')

module.exports = function(app) {

app.get('/api/test', function(req, res)
    {
        res.json({ test: "success" });
    });



// app.post('/', function(req, res){
    
//     });
    
//     // New
//     app.get('/new', function(req, res)
//     {
//         dogs.index(req, res);
//     res.render('new');
//     });

//     app.get('/', function(req, res)
//     {
       
//         res.render('index', { dogs: results });
//         });
      
    
//     // Show
//     app.get('/:id', function(req, res){
   
//     res.render('show', { dog: response[0] });
//     });
   
    
//     app.get('/:id/edit/', function(req, res){
   
//     res.render('edit', { dog: response[0] });
    
//     });
    
//     // Update
//     app.post('/:id', function(req, res){
//     Dog.update({ _id: req.params.id }, req.body, function(err, result){
//     if (err) { console.log(err); }
//     res.redirect('/');
//     });
//     });
    
//     // Delete
//     app.post('/:id/delete', function(req, res){
//     Dog.remove({ _id: req.params.id }, function(err, result){
//     if (err) { console.log(err); }
//     res.redirect('/');
//     });
//     });
}