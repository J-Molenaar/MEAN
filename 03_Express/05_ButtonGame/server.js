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
const server  = app. listen(8000, function() {
 console. log( "listening on port 8000");
});

// --*SOCKETS*--
const io  =  require( 'socket.io'). listen(server);
io.sockets. on( 'connection', function (socket) {
  console. log( "WE ARE USING SOCKETS!");
  console. log(socket.id);
  let count = 0; 				//unique identifier
  socket.emit("update", count);
  socket.on("submit", () => {
      count++;
      io.emit("update", count);
  })
  socket.on("reset", () => {
      count =0;
      io.emit("update", count);
  })
})
