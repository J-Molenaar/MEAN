const mongoose = require('mongoose');
const User = mongoose.model('User');  	//change text to current model/collection/document name


module.exports = {

    create: function(req, res){
        console.log("Step 4: controllers/users.js")
        var user = new User({
            first: req.body.first,
             last:req.body.last,
             email: req.body.email,
             password: req.body.password
         });
        user.save()
            .then((data)=>{ //data is the response coming back form the save operation
                console.log(`Step 4 controllers users.js create: save user ${data.email}`)
                res.json(user);
                req.session.user_id = user._id;
                console.log("*******Session ID is: **********")
                console.log(req.session.user_id)
            })
            .catch((err)=> {
                console.log("create: inside the catch")
                console.log(err)
                res.json('false');
            });
        },

    login: function(){
        user.find({}).exec
    }

}; //END module.exports



// show: function(req, res) {
//     Cat.find({}).exec( function(err, all_cats) {
//       if (err) throw err;
//       res.render( 'index', { all_cats: all_cats});
//     });
// },
