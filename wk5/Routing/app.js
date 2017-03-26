var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    if(req.url==='/index'){
        fs.createReadStream(__dirname+'/index.html').pipe(res);
        
    }
    else if (req.url === '/container2') {
        fs.createReadStream(__dirname+'/container2.html').pipe(res);
    }
    else if(req.url=== '/storystar'){
        
    }else{
        res.writeHead(200, { 'Content-Type': 'text/html' });
    var  html= fs.readFileSync(__dirname+'/erro.html','utf8');
    res.end(html);
        
    }
    

    
}).listen(1344, '127.0.0.1');