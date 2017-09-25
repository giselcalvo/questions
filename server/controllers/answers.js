var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');

module.exports = {
	update: (req, res)=>{
		console.log("in answer.js update()")
		Answer.findOne({_id: req.body["_id"]}, (err, answer)=>{
			if(err){
				console("could not find answer with that id");
			}
			else{
				console.log("found answer, adding like")
				answer.likes += 1;
				answer.save((err)=>{
					if(err){
						console.log("something went wrong adding a new like")
						res.json(err)
					}else{
						console.log("successfully increased the likes");
						res.json(true);
					}
				})				
			}
		})
	},
	create: (req, res)=>{
		console.log("in answers.js: create()")
		Question.findOne({_id: req.params.id}, (err, question)=>{
			if(err){
				console.log("could't find question with that id");
			}else{
				console.log("found question, creating answer");
				let newAnswer = new Answer(req.body);
			
				newAnswer.save((err, savedAnswer)=>{
					if(err){
						console.log("error saving the answer")
						res.json(err);
					}else{
						question.answers.push(savedAnswer);
						question.save((err, savedMsg)=>{
							if (err){
								console.log("error saving....")
								res.json(err);
							}else{
								console.log("successfully updated the question")
								res.json(true);
							}
						})
					}
						
				})
			}
		})
	},

}