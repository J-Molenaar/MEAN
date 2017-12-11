
// --*REQUIREMENTS*--
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');


//add socket io crap here


// --*CONFIGURATION*--
app.use(bodyParser.urlencoded({ extended: true }));          //use bodyParser
app.use(express.static(path.join(__dirname, './static')));
app.use(session({secret: 'codingdojorocks'}));
app.set('views', path.join(__dirname, './views'));        // setting up ejs and our views folder
app.set('view engine', 'ejs');

// --*ROUTES*--
app.get('/', function(req, res) {    // root route: render the index.ejs view
    if(req.session.count >=0 ){
        req.session.count;
    }
    else {
        req.session.count = 0;
    }
    if(!req.session.number){
        req.session.number = 0;
    }
    if(!req.session.answer){
        req.session.answer = Math.floor(Math.random()*100);
        console.log(req.session.answer);
    }
     res.render('index',{count: req.session.count, number:req.session.number, answer:req.session.answer});
})

// post route to adding form data
app.post('/guess', function(req, res){
    req.session.number = req.body.number;
    req.session.count +=1;
    res.redirect("/");
})

app.get('/reset', function(req, res){
    req.session.destroy();
    res.redirect('/');
})

// --*SERVER*--
app.listen(8000, function() {           
 console.log("listening on port 8000");
});
