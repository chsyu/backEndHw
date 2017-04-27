// var Uploadimg = require('../models/uploadmod');

// module.exports = function(req, res, next) {
//     var upload = new Uploadimg ({
// 		newimg:'newImage' + '-' + Today.getFullYear()+'-'+(Today.getMonth()+1)+'-'+Today.getDate()+'-'+Today.getHours()+'-'+Today.getMinutes()+'-'+Today.getSeconds()
// 	});
// 	Uploadimg.save(function(err){
// 		if (err) throw err;
// 		Uploadimg.find({}, function(err, imgs) {
// 			if (err) throw err;

// 			res.json({uploadimgs: imgs});
// 		});
// 	});
// };