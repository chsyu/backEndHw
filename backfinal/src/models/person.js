var mongoose =require('mongoose');
mongoose.connect('mongodb://test:test@ds155080.mlab.com:55080/username');

var Schema = mongoose.Schema;

var personSchema = new Schema({
  name : String,
  email : String,
  problem : String
});
module.exports = mongoose.model('Person', personSchema);