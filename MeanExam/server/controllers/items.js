var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Item = mongoose.model("Item");
var User = mongoose.model("User");

module.exports = {

    addItem: function(req, res){
            var item = new Item({
                question: req.body.question,
                opt1: req.body.opt1,
                opt1Votes: 0,
                opt2: req.body.opt2,
                opt2Votes: 0,
                opt3: req.body.opt3,
                opt3Votes: 0,
                opt4: req.body.opt4,
                opt4Votes: 0,
            });
            item.save().then((item)=>{
                User.update({_id: req.session.userId}, {$push: {items: item}}, function(err, user)
                {
                    if(err)
                    {
                        console.log("There were errors tying the item to the user...");
                    }
                    else
                    {
                        console.log("Item successfully tied to user!");
                    }
                });
                console.log(`Successfully saved ${item.question}...`);
                res.json(item);
                console.log("After res.json, before redirect...");
            }).catch((err)=>{
                res.status(500);
                console.log("Inside the .catch");
                console.log(err);
                res.json(err);
            })
    },

    getAllItems: function(req, res){
        Item.find()
            .exec((err, allitems)=>{
                if(err){
                    console.log("No items found")
                }
                else
                {
                console.log("All Items: " + allitems)
                res.json(allitems)
                }})
    },

    getOneItem: function(req, res){
        console.log("***********");
    Item.findOne({_id: req.body.itemId})
        .exec((err, item)=>{
            if(err)
            {
                console.log("Error during Get One Item express controller" + err);
            }
            else
            {
                console.log("Current Item: " + item);
                res.json(item)
            }})
    },

    deleteItem: function(req, res){
        console.log("Inside removeitem method in Express Controller", req.body.itemid);
        Item.remove({_id: req.body.itemid})
        .then(item => {res.json(true);})
        .catch(err => console.log("We didnt remove the item" + err))

    },

    updateItem: function(req, res){
    console.log("Inside Update Item method in Express Controller");
    Item.findOne({_id: req.body.itemid})
        .then((item)=> {
            if(req.body.idx == 1)
            {
                item.opt1Votes += 1;
            }
            else if(req.body.idx == 2)
            {
                item.opt2Votes += 1;
            }
            else if(req.body.idx == 3)
            {
                item.opt3Votes += 1;
            }
            else if(req.body.idx == 4)
            {
                item.opt4Votes += 1;
            }
            item.save()
        })
        .then(() =>{res.json(true)})
        .catch((err) => {"Errors during update current item: " + err})
},

    logout: function(req, res)
    {
        req.session.destroy();
        res.redirect('/');
    },

    // updateBicycle: function(req, res){
    //     console.log("Inside update bike controller");
    //     console.log(req.body)
    //     Bicycle.findOne({_id: req.body.bike._id})
    //         .then((bike)=> {
    //             bike.title = req.body.bike.title
    //             bike.location = req.body.bike.location
    //             bike.price = req.body.bike.price
    //             bike.description = req.body.bike.description
    //             bike.save()
    //         })
    //         .then(() =>{res.json(true)})
    //         .catch((err) => {console.log(err)})
    // },

}
