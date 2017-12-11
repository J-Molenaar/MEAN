// --*REQUIREMENTS*--

var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

// --*CONFIGURATION*--

app.use(bodyParser.urlencoded({ extended: true }));          //use bodyParser
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: 'codingdojorocks'}));
app.set('views', path.join(__dirname, './views'));        // setting up ejs and our views folder
app.set('view engine', 'ejs');

// --*ROUTES*--

app.get('/', function(request, response) {    // root route: render the index.ejs view
    // request.session.count = request.body.count;
    if(request.session.count >=0 ){
        request.session.count;
    }
    else {
        request.session.count = 0;
    }

 response.render('index', {count: request.session.count});
})
app.post('/count', function(request, response){
    if(request.body.submit === 'add2'){
        request.session.count +=2;
    }
    else if (request.body.submit === 'reset') {
        request.session.count = 0;
    }
    response.redirect('/');
})

// --*SERVER*--

app.listen(8000, function() {           // tell the express app to listen on port 8000
 console.log("listening on port 8000");
});
