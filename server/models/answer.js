var mongoose = require('mongoose');
var AnswerSchema = new mongoose.Schema({
	user: {type: String},
	title: {type: String, required: true, minlength: 10 },
	description: String,
	likes: Number,	
});

mongoose.model('Answer', AnswerSchema);