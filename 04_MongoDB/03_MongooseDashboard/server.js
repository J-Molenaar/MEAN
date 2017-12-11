// --*REQUIREMENTS*--
const express = require('express')
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

// --*CONFIGURATION*--
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// --*DATABASE*--
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cats_db');
var Cats_Schema = new mongoose.Schema({
    cat_name: { type: String, required: true, minlength: 1},
    lives: { type: Number,	required: true, minlength: 1},
    superpower: {type: String, required: true, minlength: 1},
    picture: { type: String, required: true, minlength: 1}
});

mongoose.model('Cat', Cats_Schema);       // We are setting this Schema in our Models as 'Cat'
var Cat = mongoose.model('Cat')                // creating a var for Schema to refer to in routes


// --*ROUTES*--
app.get('/', function(req, res) {
    Cat.find({}).exec( function(err, all_cats) {
      if (err) throw err;
      res.render( 'index', { "all_cats": all_cats});
    });
})

app.get('/new', function(req,res){
    res.render('add');
});

app.post("/add", function(req, res){
    var cat = new Cat({cat_name: req.body.cat_name, superpower: req.body.superpower, lives: req.body.lives, picture: req.body.picture});
    cat.save(function(err){
        if(err){
            console.log("ERROR!!!!")
            res.render('add', {errors: cat.errors});
        } else{
            console.log("cat");
            res.redirect("/")
        }
    })
});

app.get("/cat/:id", function(req, res){
    Cat.findOne({_id: req.params.id}, function(err, one_cat){
    res.render('info', {"one_cat": one_cat});
    });
});

app.get("/destroy/:id", function(req, res){
    Cat.remove({_id: req.params.id}, function(err){
    res.redirect("/")
    });
});

app.post("/edit/:id", function (req, res){
    Cat.update({_id : req.params.id }, {$set: {cat_name :req.body.new_name, superpower: req.body.new_superpower, lives:req.body.new_lives, picture:req.body.new_picture} }, function(err){
    res.redirect("/")
    });
});

// --*SERVER*--
const server  = app.listen(8000, function() {
 console. log( "listening on port 8000");
});
