let mongoose = require('mongoose');
let User = mongoose.model('User');
let bcrypt = require('bcrypt');

module.exports = {
	logout: (req, res)=>{
		req.session.destroy();
		res.json(true);
	},

	login: (req, res)=>{
		console.log("hit users.js");
		let newUser = new User(req.body);
		newUser.save((err)=>{
			if (err){
				console.log('something went wrong');
				res.json(err);
			}else{
				console.log("successfully added user");
				req.session.userId = newUser._id;
				req.session.user = newUser;
				console.log("user in session", req.session);
				res.json(true)
			}
		})
	},
	register: (req, res)=>{
		console.log("hit users.js: register()")
		User.findOne({email: req.body.email}).exec((err, foundUser)=>{
			if(err){
				console.log("error");
			}else{
				if(!foundUser){
					let newUser = new User(req.body);
					let hashedPW = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
					newUser.password = hashedPW;
					newUser.save((err)=>{
						if (err){
							console.log('something went wrong');
							res.json(err);
						}
						else{
							console.log("successfully registered");
							req.session.userId = newUser._id;
							console.log(req.session.userId)
							res.json(newUser);
						}
					})

				}
			}
		})
	},
	// login: (req, res)=>{
	// 	console.log("hit users.js: login()")

	// 	//find them by email
	// 	User.findOne({email: req.body.email}).exec((err, foundUser)=>{
	// 		if (err){
	// 			console.log("error");
	// 		}else{
	// 			if(foundUser){
	// 				if(bcrypt.compareSync(req.body.password, foundUser.password)==true){
	// 					console.log("passwords match, logging in");
	// 					req.session.userId = foundUser._id;
	// 					res.json(true);
	// 				}
	// 				else{
	// 					console.log("password failed to match");
	// 					res.json({
	// 						errors:{
	// 							login:{
	// 								message: "Incorrect email and password confirmation"
	// 							}
	// 						}
	// 					})
	// 				}
	// 			}
	// 		}
	// 	})

	// },
	getCurrent: (req, res)=>{
		console.log("hit users.js: getCurrent()")
		if(req.session.userId == undefined){
			res.json({
				errors:{
					getCurrent:{
						message: "You are not logged in"
					}
				} 
			})
		}else{
			User.findOne({_id: req.session.userId}).exec((err, foundUser)=>{
				if (err) {
					console.log("you goofed");
				res.json(false);
				}
				else{
					console.log("found user in session");
					res.json(foundUser);
				}

			})
		}
	}
}
