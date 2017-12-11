var mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 2
    },
    item:[
        {
        type: Schema.Types.ObjectId,
        ref: "Item"
    }]
}, {timestamps:true});

var User = mongoose.model("User", userSchema);
