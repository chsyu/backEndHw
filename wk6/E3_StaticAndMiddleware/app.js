var express = require('express');
var app=express();

<<<<<<< HEAD
var port=process.env.PORT || 3000;
=======
// var port=process.env.PORT || 2000;
>>>>>>> daedd9e54fb8d02b8e1e1d1f5b2e944b48026829
app.use('/assets',express.static(__dirname+'/public'));
app.get('/',function(req,res){
    res.render('index');
});
app.get('/api',function(req,res){
    
});

app.listen(port);