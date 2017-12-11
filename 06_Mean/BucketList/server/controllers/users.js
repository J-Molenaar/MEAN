var mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
var User = mongoose.model("User", userSchema);

var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 2
    },
    lastname:{
        type: String,
        required: true,
        minlength:2
    },
    email:{
        type: String,
        required: true,
        minlength:2,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    items:[
        {
        type: Schema.Types.ObjectId,
        ref: "Item"
    }]
}, {timestamps:true});

userSchema.plugin(uniqueValidator, {message: "Email address already taken."});
