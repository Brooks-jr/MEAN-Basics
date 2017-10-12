// require mongoose
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    birthday: Date
    
    });
  
var User = mongoose.model('user', userSchema);
