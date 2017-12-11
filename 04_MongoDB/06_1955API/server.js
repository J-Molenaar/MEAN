// --*REQUIREMENTS*--
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

// --*CONFIGURATION*--
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// --*DATABASE & ROUTES*--
require('./server/config/mongoose.js');
const routes_setter = require('./server/config/routes.js');
routes_setter(app);

// --*SERVER*--
app.listen(8000, function() {
  console.log("listening on port 8000");
})
