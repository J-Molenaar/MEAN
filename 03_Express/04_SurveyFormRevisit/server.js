// --*REQUIREMENTS*--
const express = require("express")
const path = require("path");
const app = express();

// --*CONFIGURATION*--
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// --*ROUTES*--
app.get('/', function(req, res) {
 res.render("index");
})

// --*SERVER*--
const server  = app.listen(8000, function() {
 console. log( "listening on port 8000");
});

// --*SOCKETS*--
const io  = require('socket.io').listen(server);

io.sockets. on( "connection", function (socket) {
  socket.on("button_clicked", function(data){
      socket.emit("post_message", {
          "message" : "You emitted the following information to the server:" + JSON.stringify(data)
      });
      console.log("post_message");
      socket.emit("lucky_number", {
          "lucky_number": "Your lucky number emitted by the server is: " + String(Math.floor(Math.random()*1000)+1)
      });
      console.log("lucky_number");
  });
});
