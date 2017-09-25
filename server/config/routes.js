let users = require('./../controllers/users');
let questions = require('./../controllers/questions')
let answers = require('./../controllers/answers');
let path = require('path');

module.exports=(app)=>{
	app.post('/api/users', users.register);
	app.post('/api/login', users.login);
	app.get('/api/login', users.login);
	app.get('/api/users/logout', users.logout);

	app.post('/api/questions', questions.create)
	app.get('/api/questions', questions.read)
	app.post('/api/question', questions.readQuestion)

	app.post('/api/question/:id/new_answer', answers.create)
	app.post('/api/answer/addlike', answers.update);

	app.get('/api/users/current', users.getCurrent);
	app.all('*', (req,res)=>{
		res.sendFile(path.resolve("./public/dist/index.html"));
	}) 
}