
// --*REQUIREMENTS*--
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');


//add socket io crap here


// --*CONFIGURATION*--
app.use(bodyParser.urlencoded({ extended: true }));          //use bodyParser
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));        // setting up ejs and our views folder
app.set('view engine', 'ejs');

// --*ROUTES*--
app.get('/', function(req, res) {    // root route: render the index.ejs view
 res.render('index');
})

// post route to adding form data
app.post('/result', function(req, res) {
    // console.log("POST DATA", req.body);
    postData = {
        name: req.body.user_name,
        location: req.body.user_location,
        language: req.body.user_language,
        comment: req.body.comment
    };
 res.render('results',{form_data:postData});
})

// --*SERVER*--
app.listen(8000, function() {           // tell the express app to listen on port 8000
 console.log("listening on port 8000");
});
