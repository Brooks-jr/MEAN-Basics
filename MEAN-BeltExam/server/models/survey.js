const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
    question: {type: String},
    option1: {type: String},
    option2: {type: String},
    option3: {type: String},
    option4: {type: String},
    user_id: {type: String},
    creator: {type: String},
},
{
    timestamps: true
});

mongoose.model('Survey', SurveySchema);