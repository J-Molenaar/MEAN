const mongoose = require("mongoose")
const fs = require("fs")
const path = require("path")

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/bucketlist_db", {useMongoClient: true});
var models_path = path.join(__dirname, './../models');

// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
      if(file.toLowerCase().includes(".js")){
      require(path.join(models_path, file))
  }
});
