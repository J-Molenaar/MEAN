const mongoose = require('mongoose');
const people =require('../controllers/people.js')

module.exports = function(app){ //start of function app

    app.get('/', function(req, res) {
        people.show(req,res);
    });

    app.get( '/new/:name', function( req, res ) {
      people.create( req, res );
    });

    app.get( '/remove/:name', function( req, res ) {
      people.remove( req, res );
    });

    app.get( '/:name', function( req, res ) {
      people.show_one( req, res );
    });

} //end of function(app)
