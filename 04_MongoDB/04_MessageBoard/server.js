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
mongoose.connect('mongodb://localhost/message_board_db', {useMongoClient: true});
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

let Posts_Schema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4},
    text: { type: String, required: true, minlength: 1},
    date: { type: Date, default: Date.now },
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

let Comments_Schema = new mongoose.Schema({
    _post: {type: Schema.Types.ObjectId, ref: 'Post'},
    name: { type: String, required: true, minlength: 4},
    text: { type: String, required: true, minlength: 1},
    date: { type: Date, default: Date.now }
});

mongoose.model( 'Post', Posts_Schema );
mongoose.model( 'Comment', Comments_Schema );

let Post = mongoose.model('Post');
let Comments = mongoose.model('Comment');

// --*ROUTES*--
app.get('/', (req, res) => {
	Post.find({}).populate('comments').exec((err, all_posts) => {
        if(err){
            res.render('index', err);
        }else{
        res.render('index', {all_posts: all_posts});
        }
    });
});

// ADD NEW POST
app.post('/post', function(req, res){
    let message = new Post({name: req.body.name, text: req.body.text});
    message.save(function(err){
        if(err){
            console.log("ERROR!!!");
            res.redirect ('/');
        }else{
            console.log("NO ERROR!!!");
            res.redirect( '/' );
        }
    });
});

app.post('/comment', function(req, res) {
    let comment = new Comment({name: req.body.name, text: req.body.text});
    comment._post = req.body.id;
    comment.save(function( err ) {
        Post.update({_id: req.body.id}, {$push: {comments: comment}}, function(err, message){
            if( err ){
            console.log("ERROR!!!", post._id );
            res.render('/');
        } else{
            res.redirect('/');
            }
        })
    })
})



// --*SERVER*--
const server  = app. listen(8000, function() {
 console. log( "listening on port 8000");
});
