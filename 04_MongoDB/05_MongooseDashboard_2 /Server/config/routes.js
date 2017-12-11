// --*ROUTES*--
const mongoose = require('mongoose');
const cats =require('../controllers/cats.js')

module.exports = function(app){ //start of function app

    app.get('/', function(req, res) {
        cats.show(req,res);
    });

    app.get('/new', function(req, res){
        res.render('add');
    });

    app.post("/add", function(req, res){
        cats.add(req, res);
    });

    app.get("/cat/:id", function(req, res){
        cats.info (req, res);
    });

    app.get("/destroy/:id", function(req, res){
        cats.destroy(req, res);
    });

    app.post("/edit/:id", function (req, res){
        cats.edit (req, res);
    });

} //end of function(app)
