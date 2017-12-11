var mongoose = require("mongoose");
const path = require("path");

users = require("./../controllers/users.js");
items = require("./../controllers/items.js");

module.exports = function(app){

    app.post("/addUser", function(req, res){
        console.log("Inside Add User Server Express route." + req.body.username);
        users.create(req, res);
    })

    app.get("/getSession", function(req, res){
        console.log("Inside the get session express routing method");
        res.json(req.session.currUser);
    })

    app.get("/destroySession", function(req, res){
        console.log("Inside the destroy session express routing method.");
        req.session.destroy();
        res.json(true);
    })

    app.get("/logout", function(req, res){
        console.log("Inside Logout Express route");
        req.session.destroy();
        res.redirect("/")
    })

    app.post("/addItem", function(req, res){
        console.log("Inside Add Item Server Express route..." + req.body.question);
        items.addItem(req, res);
    })

    app.get("/getAllItems", function(req, res){
        console.log("Inside Getting All Items Server Express route");
        items.getAllItems(req, res);
    })

    app.post("/deleteItem", function(req, res){
        console.log("Inside delete item action!");
        items.deleteItem(req, res);
    })

    app.post("/getOneItem", function(req,res){
        console.log("Inside the find item express route ")
        items.getOneItem(req,res);
    })

    app.post("/updateItem", function(req,res){
        console.log("Inside the updated item express route")
        items.updateItem(req,res);
    })

    app.all("*", (req,res,next)=>{
        res.sendfile(path.resolve("./public/dist/index.html"))
    });

}
