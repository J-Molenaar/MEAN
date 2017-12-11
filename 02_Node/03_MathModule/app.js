// REQUIRED MODULES HERE
var http = require('http');
var fs = require('fs');
var mathlib = require('./mathlib')();

// REQUIRED SERVER ROUTES HERE

var server = http.createServer(function (request, response){
    console.log(request.url)
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/dead_link.png') {
            fs.readFile('dead_link.png', function (errors, contents){
                response.writeHead(200, {'Content-Type': 'image/png'});
                response.write(contents);
                response.end();
        });
    }
    else {
        fs.readFile('error.html', 'utf8', function (errors, contents){
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
});

//SERVER PATH HERE
server.listen(6789);
console.log("Running in localhost at port 6789");

console.log(mathlib);
console.log(mathlib.add(5,6));
console.log(mathlib.multiply(5,6));
console.log(mathlib.square(6));
console.log(mathlib.random(5,6));

// else if(request.url === '/images/lemon.jpg') {
//         fs.readFile('./images/lemon.jpg', function (errors, contents){
//             response.writeHead(200, {'Content-Type': 'image/jpg'});
//             response.write(contents);
//             response.end();
