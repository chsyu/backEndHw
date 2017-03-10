function greet(){
    console.log('hi');
}
greet();

function logGreeting(fn){
    fn();
}
logGreeting(greet);

var greetMe=function(){
    console.log('Hi,Tony!');
}
greetMe();

logGreeting(greetMe);

(function(){
    var hello="i am from invoking..";
    console.log(hello);
})();