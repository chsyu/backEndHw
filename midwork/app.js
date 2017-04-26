var express     = require('express'),
    app         = express(),
    path        = require('path'),
    bodyParser  = require('body-parser'),
    routers     = require('./routers'),
    port        = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');

// static file path and middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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
app.get('/record',function(req,res){
    res.render('record');
});

app.listen(port);