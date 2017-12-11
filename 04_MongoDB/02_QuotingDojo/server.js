// --*REQUIREMENTS*--
const express = require('express')
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

// --*CONFIGURATION*--
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// --*DATABASE*--
const mongoose = require('mongoose',{useMongoClient: true}); //removed open method error
mongoose.connect('mongodb://localhost/quotes_db');

var Quote_Schema = new mongoose.Schema({
 name: { type: String,	required: true, minlength: 1},
 quote: { type: String,	required: true, minlength: 2},
 date: { type: Date, default: Date.now }
});
mongoose.model('Quote', Quote_Schema);
var Quote = mongoose.model('Quote')

// --*ROUTES*--
app.get('/', function(req, res) {    // root route: render the index.ejs view
	// ADD logic to add stuff (ie user)  from req.body to the database HERE
res.render("index");
});

app.post("/quotes", function(req, res){
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    quote.save(function(err){
        if(err){
            console.log("ERROR!!!");
            res.render ("index", {errors: quote.errors});
        }else{
            console.log("quote");
            res.redirect( "/results" );
        }
    })
});

app.get("/results", function(req, res){
    Quote.find({}).sort('date').exec( function(err, all_quotes) {
      if (err) throw err;
      res.render( 'results', { "all_quotes": all_quotes} );
    });
 });


// --*SERVER*--
const server  = app. listen(8000, function() {
 console. log( "listening on port 8000");
});
