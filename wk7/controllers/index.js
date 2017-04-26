var Person = require('../models/person');

module.exports = function(req, res, next) {
	Person.find({}, function(err) {
		if (err) throw err;
		res.render('frame');
	});
};