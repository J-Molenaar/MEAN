var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var User = mongoose.model("User");
var Items = mongoose.model("Item");

module.exports = {

    create: function(req, res){

        var user = new User({
            firstname: req.body.firstname,
        });
        user.save().then((user)=>{
            req.session.userId = user._id;
            console.log('Successfully saved' + user.firstname);
            res.json(user);
            console.log("After res.json, before redirect...");
        }).catch((err)=>{
            res.status(500);
            console.log("Inside the .catch");
            console.log(err);
            res.json(err);
        })
    },

    getSession: function(req, res){
        if(req.session.userId == null)
        {
            res.status(500);
            console.log("Session is currently null.");
            res.json({error: "Session is currently null!"});
        }
        else
        {
            User.findOne({_id: req.session.userId}, function(err, user){
                res.status(200);
                res.json(user);
            })

        }
    },

    findCreator: function(req, res){
        console.log("Inside findCreator method in Express Controller");
        User.findOne({_id: req.body.creatorId}).exec(function(err, user){
            if(err){
                console.log("Errors during findUser!");
                res.json(err);
                res.status(500);
            }
            else{
                res.json(user);
                }

        })
    }


}


// findUser: function(req, res){
//     console.log("Inside findUser method in Express Controller");
//     User.findOne({email: req.body.email}).exec(function(err, user){
//         if(err){
//             console.log("Errors during findUser!");
//             res.json(err);
//             res.status(500);
//         }
//         else{
//             if(user.password != req.body.password)
//             {
//                 console.log("Passwords did not match!");
//                 res.status(500);
//                 res.json({error: "Passwords did not match!"});
//             }
//             else
//             {
//                 console.log(user)
//                 req.session.userId = user._id;
//                 res.json(user);
//             }
//
//         }
//     })
// },
