var http = require('http');

var sever = http.createServer(function(req, res){
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Home</h1>');
    }
    else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>About</h1>');
    }
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('you have requested: ' + req.url);
    res.end('Hello World');
});

sever
    .listen(3000, function(){
        console.log('Server is running on port 3000');
    });