var mongoose =require('mongoose');
mongoose.connect('mongodb://test:test@ds155080.mlab.com:55080/username');

var Schema = mongoose.Schema;

var personSchema = new Schema({
  name : String,
  email : String,
  problem : String
});
// var loginSchema = new Schema({
//   user : String,
//   password : String
// });
module.exports = mongoose.model('Person', personSchema);
// module.exports = mongoose.model('Login', loginSchema);