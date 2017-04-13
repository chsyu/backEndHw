var Person = require('../models/person');

module.exports = function(req, res) {
	res.send('留言成功摟');
	var person = new Person({
		name:req.body.name,
		comments: req.body.comments,
		// time : new Date()
	});
	person.save(function(err){
		if (err) throw err;
		console.log('person saved!');
	});
};