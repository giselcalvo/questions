var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var User = mongoose.model('User')

module.exports = {
	create: (req, res)=>{
		console.log("in questions.js create()")
		User.findOne({_id: req.session.userId}).exec((err, foundUser)=>{
			if (err){
				console.log("error finding user", req.session.userId);
			}else{
				console.log("user was found:", foundUser);
				newQuestion = new Question(req.body);
				newQuestion["user"] = foundUser["name"];
				newQuestion.save((err)=>{
					if (err){
						console.log('Unable to add new question', newQuestion);
						res.json(err);
					}
					else{
						console.log("successfully added question");
						// console.log(newQuestion)
						res.json(true);
					}
				})	
			}
		})
	},

	read: (req, res)=>{
		Question.find({}).exec((err, foundQuestions)=>{
			if (err){
				console.log("error loading questions");
			}else{
				console.log("Found the questions");
				res.json(foundQuestions);
			}
		})
	},
	readQuestion: (req,res)=>{
		console.log("req.body", req.body);
		console.log("********* _id:", req.body["_id"]);
		Question.findOne({_id: req.body["_id"]}).populate('answers').exec((err, foundQuestion)=>{
			if (err){
				console.log("error loading question");
				res.json(err);
			}else{
				console.log("Found the question");
				// console.log(foundQuestion)
				res.json(foundQuestion);
			}
		})
	}
}