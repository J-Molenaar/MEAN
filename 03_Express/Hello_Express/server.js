// Load the express module
var express = require("express");

// invoke var express and store the resulting application in var app
var app = express();

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');


// lets handle the base route "/" and respond with "Hello Express". notice that the function is app.get(...)
app.get('/', function(request, response){
    response.send();
})
app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})


app.use(express.static(__dirname + "/static"));

// Tell the express app to listen on port 8000, this line will almost always be at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})
