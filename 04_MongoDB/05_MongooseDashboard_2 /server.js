// --*REQUIREMENTS*--
const express = require('express')
const path = require('path');
const app = express();
const bodyParser = require('body-parser');


// --*CONFIGURATION*--
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// --*DATABASE*--
require('./server/config/mongoose.js');
const routes_setter = require('./server/config/routes.js');
routes_setter(app);
// --*SERVER*--
const server  = app.listen(8000, function() {
 console. log( "listening on port 8000");
});
