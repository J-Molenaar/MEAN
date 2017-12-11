const mongoose = require('mongoose');
const Person = mongoose.model('Person');

module.exports = {
  show: function( req, res ) {
    Person.find( {} )
      .exec(function( err, people ){
        res.json( people );
      });
  },

  show_one: function( req, res ) {
    Person.findOne( { name: req.params.name } )
      .exec( function( err, people ) {
        res.json( people );
      });
  },

  create: function( req, res ) {
    let person = new Person();
    person.name = req.params.name;
    person.save( function( err, people ) {
      if( err ) {
        for( let error in people.errors ) {
          console.log( err.message );
        }
        res.json( people );
      }
      else {
        res.json( people );
      }
    });
  },

  remove: function( req, res ) {
    Person.remove( { name: req.params.name }, function( err, people ) {
      if( err ) {
        for( let error in people.errors ) {
          console.log( err.message );
        }
        res.json( null );
      }
      else {
        res.json( people );
      }
    });
  },
};
