var express = require('express');
var bodyParser = require('body-parser');
var routers = require('./routers');
var app = express();
// var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use('/', routers);

app.get('/',function(req,res){
    res.render('about');
});
app.get('/order',function(req,res){
    res.render('order');
});
app.get('/contact',function(req,res){
    res.render('contact');
});
app.get('/relate',function(req,res){
    res.render('relate');
});
app.get('/work',function(req,res){
    res.render('work');
});
app.get('/about',function(req,res){
    res.render('portfolio');
});

app.listen(port);