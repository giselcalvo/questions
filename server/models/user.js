let mongoose = require('mongoose');
let UserSchema = mongoose.Schema({
	name: {type: String, required: true},
}, {timestamps:true});

mongoose.model('User',UserSchema);