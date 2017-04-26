var express = require('express');
var bodyParser = require('body-parser');
var routers = require('./routers');
var app = express();
var port = process.env.PORT || 5000;

app.use('/assets', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use('/', routers);

app.get('/',function(req,res){
    res.render('frame');
});


app.listen(port);