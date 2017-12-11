const mongoose = require('mongoose');
const Cat = mongoose.model('Cat');

module.exports = {
    show: function(req, res) {
        Cat.find({}).exec( function(err, all_cats) {
          if (err) throw err;
          res.render( 'index', { all_cats: all_cats});
        });
    },
    add: function(req, res){
        var cat = new Cat({cat_name: req.body.cat_name, superpower: req.body.superpower, lives: req.body.lives, picture: req.body.picture});
        Cat.save(function(err){
            if(err){
                console.log("ERROR!!!!")
                res.render('add', {errors: cat.errors});
            } else{
                console.log("cat");
                res.redirect("/");
            }
        });
    },

    info: function(req, res){
        Cat.findOne({_id: req.params.id}, function(err, one_cat){
        res.render('info', {"one_cat": one_cat});
        });
    },

    destroy: function(req, res){
        Cat.remove({_id: req.params.id}, function(err){
        res.redirect("/")
        });
    },

    edit: function (req, res){
        Cat.update({_id : req.params.id }, {$set: {cat_name :req.body.new_name, superpower: req.body.new_superpower, lives:req.body.new_lives, picture:req.body.new_picture} }, function(err){
        res.redirect("/")
        });
    }

}
