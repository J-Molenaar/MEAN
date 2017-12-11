const mongoose = require('mongoose');
const path = require ('path');
const users =require('../controllers/users.js')


module.exports = function(app){ //start of function app

    app.post('/register', function(req, res) {
        console.log("Register Step 3: routes.js inside Express")
        users.create(req,res);
    });

    app.post('/login', function(req, res) {
        console.log("routes.js inside Express: logging in user")
        users.login(req,res);
    });

    app.get('/getSession', function(req, res) {
        console.log("SESSION Step 3: Inside the getSession routes.js")
        if(req.session.id == null){
            res.status(500);
            console.log("Session Null");
            res.json({error: "Session is Null"})
        }
        else{
            res.status(200);
            res.json({id: req.session.id})
        }
    });

   app.get('*', (req, res) => {
        res.sendFile(path.resolve('./public/dist/index.html'));
    });

} //end of function(app)
