var mongoose = require('mongoose')
var People = mongoose.model('people');

module.exports =
    {
        index: function (req, res) {
            People.find({}, function (err, results) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(results);
                }
            })
        },

        create: function (req, res) {
            var newPeople = new People({ name: req.params.name })
            newPeople.save(function (err) {
                if (err) {
                    for (var x in err.errors) {
                        errors.push(err.errors[x].message);
                    }
                    res.redirect('/new/:name');
                } else {
                    res.redirect('/')
                }
            })
        },

        destroy: function (req, res) {
            People.remove({ name: req.params.name }, function (err, name) {
                res.redirect('/');
            })
        },

        show: function (req, res) {
            People.findOne({ name: req.params.name }, function (err, name) {
                if (name == null) {
                    res.json("name not found");
                } else {
                    res.json(name);
                }
            })
        }

    }