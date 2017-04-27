var express     = require('express'),
    app         = express(),
    path        = require('path'),
    bodyParser  = require('body-parser'),
    routers     = require('./routers'),
    port        = process.env.PORT || 5000;
var fs = require('fs');
var multer  = require('multer')

// view engine setup
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');

// static file path and middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false },{uploadDir:'./uploads'}));
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

// 单图上传
var createFolder = function(folder){
    try{
        fs.accessSync(folder); 
    }catch(e){
        fs.mkdirSync(folder);
    }  
};

var uploadFolder = './upload/';

createFolder(uploadFolder);


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder);    
    },
    filename: function (req, file, cb) {
       
        cb(null, file.fieldname + '-' + Today.getFullYear()+'-'+(Today.getMonth()+1)+'-'+Today.getDate()+'-'+Today.getHours()+'-'+Today.getMinutes()+'-'+Today.getSeconds());  
    }
});


var upload = multer({ storage: storage })

var Today=new Date();

app.post('/upload', upload.array('newImage',3), function(req, res, next){
    var file = req.file;
    res.send({ret_code: Today.getFullYear()+'-'+(Today.getMonth()+1)+'-'+Today.getDate()+'-'+Today.getHours()+'-'+Today.getMinutes()+'-'+Today.getSeconds()});
});


// app.get('/form', function(req, res, next){
//     var form = fs.readFileSync('./form.html', {encoding: 'utf8'});
//     res.send(form);
// });




app.listen(port);