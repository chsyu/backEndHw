var greetings=require('./greet.json');

var greet=function(){
    console.log(greetings.en);
}
module.exports=greet;