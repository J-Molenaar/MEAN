// --*REQUIREMENTS*--
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require("express-session");
var path = require('path');

// --*CONFIGURATION*--
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public/dist')));
app.use(session({
    secret: "wekrjhsdofiuwersdfjkhas",
    resave: false,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));

// --*DATABASE*--
require('./server/config/mongoose.js');

// --*ROUTES*--
const routes_setter = require("./server/config/routes.js");
routes_setter(app);

// --*SERVER*--
app.listen(8000, function() {
    console.log("listening on port 8000");
})
