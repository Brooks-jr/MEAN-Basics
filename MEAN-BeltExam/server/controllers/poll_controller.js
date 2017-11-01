const mongoose = require('mongoose');
const Poll = mongoose.model('Survey');
const User = mongoose.model('User');

module.exports = {
    add: (req, res, next) => {
        let p = new Poll(req.body);
        p.creator = req.session.name;
        p.user_id = req.session.user_id;
        p.save()
        .then(() => { res.json(true); })
        .catch((err) => { res.status(501).json(err); });
    },
// =================================================================

    destroy: (req, res, next) => {
        let p = new Poll(req.body);
        Poll.remove(p)
        .then(() => { res.json(true); })
        .catch((err) => { res.status(504).json(err); })
    },
// =================================================================
  
    all: (req, res, next) => {
        Poll.find({})
        .then((polls) => { res.json(polls); })
        .catch((err) => { res.status(450).json(err); });
    },
    
}