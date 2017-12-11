
// --*REQUIREMENTS*--
const express = require("express")
const path = require("path")
const app = express()
const bodyParser = require("body-parser")
const session = require("express-session")

// --*CONFIGURATION*--
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "./public/dist")))
app.use(session({
    secret: "aksjdhaksjdhakjsdh",
    resave: false,
    saveUninitialized: true
}))

// --*DATABASE*--
require("./server/config/mongoose.js")

// --*ROUTES*--
require("./server/config/routes.js")
routes_setter(app)

// --*SERVER*--
const server = app.listen(8000, funtion(){
    console.log ("Listening on port 8000")
})
