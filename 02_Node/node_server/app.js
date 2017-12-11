// REQUIRED MODULES HERE

var http = require('http'); // get the http module:

var fs = require('fs'); // fs module allows us to read and write content for responses!!

var my_module = require('./my_module')(); //--**>> THIS LINE IS EXTREMELY IMPORTANT <<**-- importing another.js module This is literally the most important facet of Node.js; without this, the MEAN stack would be impossible to create.
//  by default, the require() method looks for the modules located in a folder called node_modules. To tell require() to look in the current directory (include "./" in front of the file path.
// note adding () at the end actually invokes the functions!
my_module.greet();
my_module.add(5,6);


// REQUIRED SERVER ROUTES HERE
// creating a server using http module:
var server = http.createServer(function (request, response){ // --**>> THIS LINE IS EXTREMELY IMPORTANT <<**-- note the CALLBACK FUNCTION which takes in request and response parameters
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:


    if(request.url === '/') { // If the request matches one of the response patterns we built into the server this runs
        fs.readFile('index.html', 'utf8', function (errors, contents){ //This command goes and finds a file named "index.html" and reads it.
            response.writeHead(200, {'Content-Type': 'text/html'});  //A header is the part of a response that contains the specifics of the response with a status code 200's & 300's are good
            response.write(contents);  //  sends the contents of the file/response body to the client
            response.end(); // finished!
        });
    }


    // request didn't match anything:
    else {
        fs.readFile('error.html', 'utf8', function (errors, contents){ //This command goes and finds a file named "index.html" and reads it.
            response.writeHead(404);  //A header is the part of a response that contains the specifics of the response with a status code 200's & 300's are good
            response.write(contents);  //  sends the contents of the file/response body to the client
            response.end(); // finished!
        });
    }
});

// ACTUAL SERVER PATH HERE
server.listen(6789); // tell your server which port to run on
// print to terminal window
console.log("Running in localhost at port 6789");

// OTHER IMPORTANT TYPES
//
// File type:	         Headers:
// HTML	                   {'Content-Type': 'text/html'}
// CSS	                   {'Content-Type': 'text/css'}
// Javascript	           {'Content-Type': 'text/javascript'}
// png/jpeg/gif	           {'Content-Type': 'image/*'} (* is the image format, ie png or jpeg etc)
//
//
