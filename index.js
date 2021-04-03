var  http = require('http');

http.createServer(function  (req , res){
    res.end('hello các bạn hí');
}).listen(process.env.PORT || 3000);