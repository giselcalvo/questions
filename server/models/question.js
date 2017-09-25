var mongoose = require('mongoose');
var QuestionSchema = new mongoose.Schema({
	user: {type: String },
	title: {type: String },
	description: String,
	answers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Answer'}]	
});

mongoose.model('Question', QuestionSchema);