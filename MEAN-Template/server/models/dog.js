// require mongoose
var mongoose = require('mongoose');
var Dog = mongoose.model('Dog', Dog);

var DogSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    color: String
    });
  
    mongoose.model('Dog', DogSchema);
